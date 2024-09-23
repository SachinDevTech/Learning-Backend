const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('At root Path')
  //res.send("Can't send two response headers")
})

app.get('/bold', function (req, res) {
    res.send('<b>At Bold Path</b>')
  })

app.get('/html', function (req, res) {
    res.send('<h1>Hellow Duniya!</h1>')
  })


app.listen(3000)