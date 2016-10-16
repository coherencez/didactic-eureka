'use strict'
const express = require('express')
  ,bodyParser = require('body-parser')
  ,      PORT = process.env.PORT || 3000
  ,       app = express()
  ,   { red } = require('chalk')
  , {connect} = require('./db/database')
  ,      User = require('./db/models/User')

app.set('port', PORT)
app.set('view engine', 'pug')
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static('public'))


app.get('/', (req,res) => {
  res.render('index')
})

app.post('/', ({body: {email, phone}},res,err) => {
  User
  .findOne({email})
  .then(user => {
    if(user) {
      return res.render('index', {msg: 'Email is already registered, please try again'})
    }
    return User.create({email, phone})
  })
  .then(user => res.render('index', {msg: `Thank you! Your number: ${user.phone} and email: ${user.email} have been registered`, registered: true}))
  .catch(console.error)
})

app.use((req, res, next) => {
	res.render('404')
})

// error handling middleware
app.use((err, {method, url, headers: {'user-agent': agent}}, res, next) => {
	if(process.env.NODE_ENV === 'production') {
		res.sendStatus(err.status || 500)
	} else {
		res.set('Content-Type', 'text/plain').send(err.stack)
	}

	const timeStamp     = new Date()
	const statusCode    = res.statusCode
	const statusMessage = res.statusMessage

	console.error(
       `[${timeStamp}] "${red(`${method} ${url}`)}" Error (${statusCode}): "${statusMessage}"`
     )
  console.error(err.stack)
	next()
})


connect()
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Now listening on PORT: ${PORT}`)
    })
  )
  .catch(console.error)
