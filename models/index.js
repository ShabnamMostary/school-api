const Sequelize = require('sequelize')
const DepartmentsModel = require('./departments')
const FacultyModel = require('./faculty')
const StudentsModel = require('./students')

const connection = new Sequelize('school', 'admin77', 'school77', {
  host: 'localhost', dialect: 'mysql'
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
  Students
}
