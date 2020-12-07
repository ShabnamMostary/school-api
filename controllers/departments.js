const models = require('../models')
const getAllDepartments = async (request, response) => {
  const departments = await models.Departments.findAll()

  return departments
    ? response.send(departments)
    : response.sendStatus(404)
}


module.exports = { getAllDepartments }
