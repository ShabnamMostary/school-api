const Sequelize = require('sequelize')
const allConfigs = require('../config/sequelize')
const DepartmentsModel = require('./departments')
const FacultyModel = require('./faculty')
const StudentsModel = require('./students')
const environment = process.env.NODE_ENV || 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect
})
const Departments = DepartmentsModel(connection, Sequelize)
const Faculty = FacultyModel(connection, Sequelize, Departments)
const Students = StudentsModel(connection, Sequelize, Departments)

Departments.hasMany(Faculty)
Departments.hasMany(Students)
Faculty.belongsTo(Departments)
Students.belongsTo(Departments)

module.exports = {
  Departments,
  Faculty,
  Students,
  Op: Sequelize.Op,
}
