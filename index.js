const { request, response } = require('express')
const express = require('express')
const { departments, students, faculty } = require('./schools')
// const bodyParser = require('body-parser')
const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', (request, response) => {
  return response.render('index')
})
app.get('/api', (request, response) => {
  return response.render('api')
})
app.get('/students', (request, response) => {
  return response.render('students', { students })
})
app.get('/faculty', (request, response) => {
  return response.render('faculty', { faculty })
})



app.listen(1337, () => {
  console.log('Listening on 1337...') // eslint-disable-line no-console
})
