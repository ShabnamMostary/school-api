const models = require('../models')
const getAllFaculty = async (request, response) => {
  const faculty = await models.Faculty.findAll()

  return faculty
    ? response.send(faculty)
    : response.sendStatus(404)
}


module.exports = { getAllFaculty }
