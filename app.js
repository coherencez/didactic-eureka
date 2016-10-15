'use strict'
const apiKeys = require('./secretKey')
const Twitter = require('twitter')

const client = new Twitter(apiKeys)

client.post('statuses/update', {status: 'Testing TwitterAPI connection'}, (err, twt, res) => {
  if(err) {
    console.error(err)
  }
  console.log(twt)
  console.log(res)
})
