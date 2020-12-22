const models = require('../models')
const getAllFaculty = async (request, response) => {
  try {
    const faculty = await models.Faculty.findAll()

    return faculty
      ? response.send(faculty)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unable to retrieve faculty, please try again')
  }
}
const getFacultyByName = async (request, response) => {
  try {
    const { name } = request.params

    const faculty = await models.Faculty.findOne({
      where: {
        name: { [models.Op.like]: `%${name}%` },
      }
    })

    return faculty
      ? response.send(faculty)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unable to retrieve faculty, please try again')
  }
}

const addNewFaculty = async (request, response) => {
  try {
    const { name, departmentId, email, research_area } = request.body

    if (!name || !departmentId || !email || !research_area) {
      return response.status(400).send('Following items are required name,departmentId,email and research_area')
    }

    const newFaculty = await models.Faculty.create({ name, departmentId, email, research_area })

    return response.status(201).send(newFaculty)
  } catch (error) {
    return response.status(500).send('Unable to save new faculty, please try again')
  }
}
const deleteFaculty = async (request, response) => {
  try {
    const { name } = request.params

    const faculty = await models.Faculty.findOne({ where: { name } })

    if (!faculty) return response.status(404).send(`No faculty matching the name: ${name}`)
    await models.Faculty.destroy({ where: { name } })

    return response.send(`Successfully deleted the faculty: ${name}.`)
  } catch (error) {
    return response.status(500).send('Unknown error while deleting faculty, please try again.')
  }
}


module.exports = { getAllFaculty, getFacultyByName, addNewFaculty, deleteFaculty }
