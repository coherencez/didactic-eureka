'use strict'
const express = require('express')
  ,bodyParser = require('body-parser')
  ,      PORT = process.env.PORT || 3000
  ,       app = express()

app.set('port', PORT)
app.set('view engine', 'pug')
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static('public'))


app.get('/', (req,res) => {
  res.render('index')
})

app.post('/', ({body: {email, phone}},res) => {
  console.log(email, phone)
})

app.listen(PORT, () => {
  console.log(`Now listening on PORT: ${PORT}`)
})
