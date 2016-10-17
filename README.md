# Mentor Finder

### What?
  A simple web app to help automate the process of finding a mentor.

### Why?
  Life's busy for students, even busier for students with jobs, families, and responsibilities
  to take care of outside of school work. This app aims to make the process of finding a mentor
  as streamlined and automated as possible. Simply fill out the form below with some basic info
  and let the app go to work.

### How?
   Outward facing it's easy, a simple Express server running on NodeJS, an FAQ, and a form
   rendered with Pug. Your data is being stored on MongoDB. Internally We've setup a Twitter
   bot that uses Twitter's Streaming and REST api's. It is always listening for certain key
   words and phrases. Whenever a tweet is sent that matches the criteria, the server intercepts
   and runs it through an algorithm. If the algorithm determines it is valuable, we send a
   mass text to all registered numbers using Twilio's SMS/MMS messaging service, containing
   relevant info from the tweet.
