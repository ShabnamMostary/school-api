const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const models = require('../../models')
const { before, beforeEach, afterEach, describe, it } = require('mocha')
const { getAllFaculty, getFacultyByName, addNewFaculty, deleteFaculty } = require('../../controllers/faculty')
const { facultyList, singleFaculty } = require('../mocks/faculty')
chai.use(sinonChai)
const { expect } = chai
describe('Controllers - FacultyApi', () => {
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
    stubbedFindAll = sandbox.stub(models.Faculty, 'findAll')
    stubbedFindOne = sandbox.stub(models.Faculty, 'findOne')
    stubbedCreate = sandbox.stub(models.Faculty, 'create')
    stubbedDestroy = sandbox.stub(models.Faculty, 'destroy')
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
  describe('getAllFaculty', () => {
    it('retrieves a list of faculty from the database and calls response.send() with the list', async () => {
      stubbedFindAll.returns(facultyList)
      await getAllFaculty({}, response)
      expect(stubbedFindAll).to.have.callCount(1)
      expect(stubbedSend).to.have.been.calledWith(facultyList)
    })
    it('returns status 500 with an error message when database throws an error', async () => {
      stubbedFindAll.throws('ERROR!')
      await getAllFaculty({}, response)
      expect(stubbedFindAll).to.have.callCount(1)
      expect(stubbedStatus).to.have.been.calledWith(500)
      expect(stubbedStatusDotSend).to.have.been.calledWith('Unable to retrieve faculty, please try again')
    })
  })
  describe('getFacultyByName', () => {
    it('retrieves the faculty associated with the provided name from the database and calls response.send with it', async () => {
      stubbedFindOne.returns(singleFaculty)
      const request = { params: { name: 'Scott' } }

      await getFacultyByName(request, response)
      expect(stubbedFindOne).to.have.been.calledWith({
        where: {
          name: { [models.Op.like]: `%Scott%` },
        }
      })
      expect(stubbedSend).to.have.been.calledWith(singleFaculty)
    })
    it('returns status 404 when no faculty is found', async () => {
      stubbedFindOne.returns(null)
      const request = { params: { name: 'xyz' } }

      await getFacultyByName(request, response)
      expect(stubbedFindOne).to.have.been.calledWith({ where: { name: { [models.Op.like]: '%xyz%' }, } })
      expect(stubbedSendStatus).to.have.been.calledWith(404)
    })
    it('returns status 500 with an error message when database throws an error', async () => {
      stubbedFindOne.throws('ERROR!')
      const request = { params: { name: 'throw-error' } }

      await getFacultyByName(request, response)
      expect(stubbedFindOne).to.have.been.calledWith({ where: { name: { [models.Op.like]: '%throw-error%' }, } })
      expect(stubbedStatus).to.have.been.calledWith(500)
      expect(stubbedStatusDotSend).to.have.been.calledWith('Unable to retrieve faculty, please try again')
    })
  })
  describe('addNewFaculty', () => {
    it('accepts new faculty details,saves them as a new faculty and returns the saved record with a 201 status', async () => {
      stubbedCreate.returns(singleFaculty)
      const request = { body: singleFaculty }

      await addNewFaculty(request, response)
      expect(stubbedCreate).to.have.been.calledWith(singleFaculty)
      expect(stubbedStatus).to.have.been.calledWith(201)
      expect(stubbedStatusDotSend).to.have.been.calledWith(singleFaculty)
    })
    it('returns status 500 with an error message when database throws an error', async () => {
      stubbedCreate.throws('ERROR!')
      const request = { body: singleFaculty }

      await addNewFaculty(request, response)
      expect(stubbedCreate).to.have.been.calledWith(singleFaculty)
      expect(stubbedStatus).to.have.been.calledWith(500)
      expect(stubbedStatusDotSend).to.have.been.calledWith('Unable to save new faculty, please try again')
    })
  })
  describe('deleteFaculty', () => {
    it('deletes a faculty associated with the provided name from the database.', async () => {
      stubbedFindOne.returns(singleFaculty)
      const request = { params: { name: 'Scott' } }
      await deleteFaculty(request, response)
      expect(stubbedDestroy).to.have.calledWith({ where: { name: request.params.name } })
      expect(stubbedSend).to.have.been.calledWith(`Successfully deleted the faculty: ${request.params.name}.`)
    })

    it('returns a 404 status and a message when no faculty is found matching the name provided by the user.', async () => {
      stubbedFindOne.returns(null)

      const request = { params: { name: 'Fakeman' } }

      await deleteFaculty(request, response)

      expect(stubbedDestroy).to.have.callCount(0)
      expect(stubbedStatus).to.have.been.calledWith(404)
      expect(stubbedStatusDotSend).to.have.been.calledWith(`No faculty matching the name: ${request.params.name}`)
    })
    it('returns a 500 status with a message when the database call throws an error.', async () => {
      stubbedFindOne.throws('ERROR!')

      await deleteFaculty({}, response)

      expect(stubbedDestroy).to.have.callCount(0)
      expect(stubbedStatus).to.have.been.calledWith(500)
      expect(stubbedStatusDotSend).to.have.been.calledWith('Unknown error while deleting faculty, please try again.')
    })
  })
})
