'use strict'
const mongoose = require('mongoose')
const URI = process.env.MONGODB_URL || 'mongodb://localhost:27017/mentorbot'

mongoose.Promise = Promise

module.exports.connect = () => mongoose.connect(URI)
module.exports.disconnect = () => mongoose.disconnect()
