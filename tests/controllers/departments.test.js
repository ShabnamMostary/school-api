const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const models = require('../../models')
const { before, beforeEach, afterEach, describe, it } = require('mocha')
const { getAllDepartments, getDepartmentByName } = require('../../controllers/departments')
const { departmentList, singleDepartment } = require('../mocks/departments')
chai.use(sinonChai)
const { expect } = chai
describe('Controllers - DepartmentsApi', () => {
  let sandbox
  let stubbedFindAll
  let stubbedFindOne
  let stubbedSend
  let response
  let stubbedSendStatus
  let stubbedStatusDotSend
  let stubbedStatus

  before(() => {
    sandbox = sinon.createSandbox()
    stubbedFindAll = sandbox.stub(models.Departments, 'findAll')
    stubbedFindOne = sandbox.stub(models.Departments, 'findOne')
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
  describe('getAllDepartments', () => {
    it('retrieves a list of departments from the database and calls response.send() with the list', async () => {
      stubbedFindAll.returns(departmentList)
      await getAllDepartments({}, response)
      expect(stubbedFindAll).to.have.callCount(1)
      expect(stubbedSend).to.have.been.calledWith(departmentList)
    })
    it('returns status 500 with an error message when database throws an error', async () => {
      stubbedFindAll.throws('ERROR!')
      await getAllDepartments({}, response)
      expect(stubbedFindAll).to.have.callCount(1)
      expect(stubbedStatus).to.have.been.calledWith(500)
      expect(stubbedStatusDotSend).to.have.been.calledWith('Unable to retrieve departments, please try again')
    })
  })
  describe('getDepartmentByName', () => {
    it('retrieves the department associated with the provided name from the database and calls response.send with it', async () => {
      stubbedFindOne.returns(singleDepartment)
      const request = { params: { name: 'Mechanical' } }

      await getDepartmentByName(request, response)
      expect(stubbedFindOne).to.have.been.calledWith({
        where: {
          name: { [models.Op.like]: `%Mechanical%` },
        }
      })
      expect(stubbedSend).to.have.been.calledWith(singleDepartment)
    })
    it('returns status 404 when no department is found', async () => {
      stubbedFindOne.returns(null)
      const request = { params: { name: 'xyz' } }

      await getDepartmentByName(request, response)
      expect(stubbedFindOne).to.have.been.calledWith({ where: { name: { [models.Op.like]: '%xyz%' }, } })
      expect(stubbedSendStatus).to.have.been.calledWith(404)
    })
    it('returns status 500 with an error message when database throws an error', async () => {
      stubbedFindOne.throws('ERROR!')
      const request = { params: { name: 'throw-error' } }

      await getDepartmentByName(request, response)
      expect(stubbedFindOne).to.have.been.calledWith({ where: { name: { [models.Op.like]: '%throw-error%' }, } })
      expect(stubbedStatus).to.have.been.calledWith(500)
      expect(stubbedStatusDotSend).to.have.been.calledWith('Unable to retrieve department, please try again')
    })
  })
})