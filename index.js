const express = require('express')
const bodyParser = require('body-parser')
const { getAllDepartments } = require('./controllers/departments')
const { getAllFaculty, addNewFaculty, deleteFaculty } = require('./controllers/faculty')
const { getAllStudents, addNewStudent, deleteStudent } = require('./controllers/students')
const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))
app.get('/api', (request, response) => {
  return response.render('api')
})
app.get('/departments', getAllDepartments)
// app.get('/department/:name', getDepartmentByName)
app.get('/faculty', getAllFaculty)
app.post('/faculty', bodyParser.json(), addNewFaculty)
app.delete('/faculty/:name', deleteFaculty)
app.get('/students', getAllStudents)
app.post('/students', bodyParser.json(), addNewStudent)
app.delete('/students/:name', deleteStudent)
app.all('*', (request, response) => {
  return response.sendStatus(404)
})
app.listen(1337, () => {
  console.log('Listening on 1337...') // eslint-disable-line no-console
})
