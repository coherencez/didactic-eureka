'use strict'

const          mongoose = require('mongoose')
// const { hash, compare } = require('bcrypt')

// const BCRYPT_DIFFICULTY = 15
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

// userSchema.pre('save', function(next) {
// 	const user = this
// 	hash(user.phone, BCRYPT_DIFFICULTY, (err, hashedPhone) => {
// 		if(err) { return next(err) }
// 		user.phone = hashedPhone
//     next()
// 	})
// })
//
// userSchema.pre('save', function(next) {
//   const user = this
//   hash(user.email, BCRYPT_DIFFICULTY, (err, hashedEmail) => {
//     if(err) { return next(err) }
//     user.email = hashedEmail
//     next()
//   })
// })

module.exports = mongoose.model('User', userSchema)
