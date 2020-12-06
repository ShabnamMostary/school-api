const express = require('express')
const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/departments')
app.get('/api', (request, response) => {
  return response.render('api')
})
app.all('*', (request, response) => {
  return response.sendStatus(404)
})
app.listen(1337, () => {
  console.log('Listening on 1337...') // eslint-disable-line no-console
})
