'use strict'
const express = require('express')
  ,      PORT = process.env.PORT || 3000
  ,       app = express()

app.set('port', PORT)
app.set('view engine', 'pug')
app.use(express.static('public'))


app.get('/', (req,res) => {
  res.render('index')
})

app.listen(PORT, () => {
  console.log(`Now listening on PORT: ${PORT}`)
})
