const models = require('../models')
const getAllStudents = async (request, response) => {
  try {
    const students = await models.Students.findAll()

    return students
      ? response.send(students)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unable to retrieve students, please try again')
  }
}
const getStudentByName = async (request, response) => {
  try {
    const { name } = request.params

    const student = await models.Students.findOne({
      where: {
        name: { [models.Op.like]: `%${name}%` },
      }
    })

    return student
      ? response.send(student)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unable to retrieve student, please try again')
  }
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
const deleteStudent = async (request, response) => {
  try {
    const { name } = request.params

    const student = await models.Students.findOne({ where: { name } })

    if (!student) return response.status(404).send(`No student matching the name: ${name}`)
    await models.Students.destroy({ where: { name } })

    return response.send(`Successfully deleted the student: ${name}.`)
  } catch (error) {
    return response.status(500).send('Unknown error while deleting student, please try again.')
  }
}



module.exports = { getAllStudents, getStudentByName, addNewStudent, deleteStudent }
