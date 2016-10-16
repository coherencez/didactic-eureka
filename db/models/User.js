'use strict'

const mongoose = require('mongoose')

const BCRYPT_DIFFICULTY = 15
const HTML5_EMAIL_VALIDATION = /^[a-zA-Z0-9.!#$%&’*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const userSchema = mongoose.Schema({
	email: {
		type: String,
		required: true,
		match: [HTML5_EMAIL_VALIDATION, 'Please fill in a valid email address'],
		index: {unique: true}
	},
	phone: {type: String, required: true},
})

module.exports = mongoose.model('User', userSchema)
