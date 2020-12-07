const models = require('../models')
const getAllStudents = async (request, response) => {
  const students = await models.Students.findAll()

  return students
    ? response.send(students)
    : response.sendStatus(404)
}
const addNewStudent = async (request, response) => {
  try {
    const { name, departmentId, email, research_area } = request.body

    if (!name || !departmentId || !email || !research_area) {
      return response.status(400).send('Following items are required name,departmentId,email and research_area')
    }

    const addNewStudent = await models.Students.create({ name, departmentId, email, research_area })

    return response.status(201).send(addNewStudent)
  } catch (error) {
    return response.status(500).send('Unable to save new student, please try again')
  }
}



module.exports = { getAllStudents, addNewStudent }
