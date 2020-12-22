/* eslint-disable max-len */
const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const models = require('../../models')
const {
  before, beforeEach, afterEach, describe, it
} = require('mocha')
const { getAllStudents, getStudentByName, addNewStudent, deleteStudent } = require('../../controllers/students')
const { studentsList, singleStudent } = require('../mocks/students')

chai.use(sinonChai)
const { expect } = chai

describe('Controllers - StudentApi', () => {
  let sandbox
  let stubbedFindAll
  let stubbedFindOne
  let stubbedCreate
  let stubbedDestroy
  let stubbedSend
  let response
  let stubbedSendStatus
  let stubbedStatusDotSend
  let stubbedStatus

  before(() => {
    sandbox = sinon.createSandbox()
    stubbedFindAll = sandbox.stub(models.Students, 'findAll')
    stubbedFindOne = sandbox.stub(models.Students, 'findOne')
    stubbedCreate = sandbox.stub(models.Students, 'create')
    stubbedDestroy = sandbox.stub(models.Students, 'destroy')
    stubbedSend = sandbox.stub()
    stubbedSendStatus = sandbox.stub()
    stubbedStatusDotSend = sandbox.stub()
    stubbedStatus = sandbox.stub()
    response = {
      send: stubbedSend,
      sendStatus: stubbedSendStatus,
      status: stubbedStatus

    }
  })
  beforeEach(() => {
    stubbedStatus.returns({ send: stubbedStatusDotSend })
  })
  afterEach(() => {
    sandbox.reset()
  })
  describe('getAllStudents', () => {
    it('retrieves a list of student from the database and calls response.send() with the list', async () => {
      stubbedFindAll.returns(studentsList)
      await getAllStudents({}, response)
      expect(stubbedFindAll).to.have.callCount(1)
      expect(stubbedSend).to.have.been.calledWith(studentsList)
    })
    it('returns status 404 when no studentsList is empty', async () => {
      stubbedFindAll.returns(null)
      await getAllStudents({}, response)
      expect(stubbedFindAll).to.have.callCount(1)
      expect(stubbedSendStatus).to.have.been.calledWith(404)
    })
    it('returns status 500 with an error message when database throws an error', async () => {
      stubbedFindAll.throws('ERROR!')
      await getAllStudents({}, response)
      expect(stubbedFindAll).to.have.callCount(1)
      expect(stubbedStatus).to.have.been.calledWith(500)
      expect(stubbedStatusDotSend).to.have.been.calledWith('Unable to retrieve students, please try again')
    })
  })
  describe('getStudentByName', () => {
    it('retrieves the student associated with the provided name from the database and calls response.send with it', async () => {
      stubbedFindOne.returns(singleStudent)
      const request = { params: { name: 'Linda' } }

      await getStudentByName(request, response)
      expect(stubbedFindOne).to.have.been.calledWith({
        where: {
          name: { [models.Op.like]: '%Linda%' },
        }
      })
      expect(stubbedSend).to.have.been.calledWith(singleStudent)
    })
    it('returns status 404 when no student is found', async () => {
      stubbedFindOne.returns(null)
      const request = { params: { name: 'xyz' } }

      await getStudentByName(request, response)
      expect(stubbedFindOne).to.have.been.calledWith({ where: { name: { [models.Op.like]: '%xyz%' }, } })
      expect(stubbedSendStatus).to.have.been.calledWith(404)
    })
    it('returns status 500 with an error message when database throws an error', async () => {
      stubbedFindOne.throws('ERROR!')
      const request = { params: { name: 'throw-error' } }

      await getStudentByName(request, response)
      expect(stubbedFindOne).to.have.been.calledWith({ where: { name: { [models.Op.like]: '%throw-error%' }, } })
      expect(stubbedStatus).to.have.been.calledWith(500)
      expect(stubbedStatusDotSend).to.have.been.calledWith('Unable to retrieve student, please try again')
    })
  })
  describe('addNewStudent', () => {
    it('accepts new student details,saves them as a new student and returns the saved record with a 201 status', async () => {
      stubbedCreate.returns(singleStudent)
      const request = { body: singleStudent }

      await addNewStudent(request, response)
      expect(stubbedCreate).to.have.been.calledWith(singleStudent)
      expect(stubbedStatus).to.have.been.calledWith(201)
      expect(stubbedStatusDotSend).to.have.been.calledWith(singleStudent)
    })
    it('returns status 500 with an error message when database throws an error', async () => {
      stubbedCreate.throws('ERROR!')
      const request = { body: singleStudent }

      await addNewStudent(request, response)
      expect(stubbedCreate).to.have.been.calledWith(singleStudent)
      expect(stubbedStatus).to.have.been.calledWith(500)
      expect(stubbedStatusDotSend).to.have.been.calledWith('Unable to save new student, please try again')
    })
  })
  describe('deleteStudent', () => {
    it('deletes a student associated with the provided name from the database.', async () => {
      stubbedFindOne.returns(singleStudent)

      const request = { params: { name: 'Linda' } }

      await deleteStudent(request, response)
      expect(stubbedDestroy).to.have.calledWith({ where: { name: request.params.name } })
      expect(stubbedSend).to.have.been.calledWith(`Successfully deleted the student: ${request.params.name}.`)
    })

    it('returns a 404 status and a message when no student is found matching the name provided by the user.', async () => {
      stubbedFindOne.returns(null)

      const request = { params: { name: 'Fakeman' } }

      await deleteStudent(request, response)

      expect(stubbedDestroy).to.have.callCount(0)
      expect(stubbedStatus).to.have.been.calledWith(404)
      expect(stubbedStatusDotSend).to.have.been.calledWith(`No student matching the name: ${request.params.name}`)
    })
    it('returns a 500 status with a message when the database call throws an error.', async () => {
      stubbedFindOne.throws('ERROR!')

      await deleteStudent({}, response)

      expect(stubbedDestroy).to.have.callCount(0)
      expect(stubbedStatus).to.have.been.calledWith(500)
      expect(stubbedStatusDotSend).to.have.been.calledWith('Unknown error while deleting student, please try again.')
    })
  })
})
