const models = require('../models')
const getAllStudents = async (request, response) => {
  const students = await models.Students.findAll()

  return students
    ? response.send(students)
    : response.sendStatus(404)
}


module.exports = { getAllStudents }