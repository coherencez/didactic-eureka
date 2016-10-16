'use strict'
const {twitterCreds, twilioCreds:{accountSid,authToken}} = require('./secretKey')
const twitterClient = require('twitter')
const Twilio = require('twilio')(accountSid,authToken)
const fs = require('fs')

const Twitter = new twitterClient(twitterCreds)

// Twitter.post('statuses/update', {status: 'Testing TwitterAPI connection'}, (err, twt, res) => {
//   if(err) {
//     console.error(err)
//   }
//   console.log(twt)
//   console.log(res)
// })

Twitter.stream('statuses/filter', {track: 'javascript,mentor,web developer'}, stream => {
  stream.on('data', ({user, text}) => {
    console.log(text)
    Twilio.messages.create({
      to: "+16158123396",
      from: "+16158618139",
      body: `@${user.screen_name}: ${text}`,
      // mediaUrl: "https://c1.staticflickr.com/3/2899/14341091933_1e92e62d12_b.jpg",
    }, function(err, message) {
        if(err) throw err
        console.log(message.sid);
    });


      // Twitter.post('statuses/update', {status: tweet.text}, (err, twt, res) => {
      //   if(err){
      //     console.error(err)
      //   }
      //   console.log(twt)
      //   console.log(res)
      // })
  })
  stream.on('error', error => {
    console.error(error)
  })
})
