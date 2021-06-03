'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

// requires the authEvents functions
const authEvents = require('./auth/events.js')

const quizEvents = require('./quiz/events.js')

$(() => {
  // Authorization event listeners
  // event listener for the sign-up class attached to the form
  $('.sign-up').on('submit', authEvents.onSignUp)
  // event listener for the sign-in class attached to the form
  $('.sign-in').on('submit', authEvents.onSignIn)
  // event listener for sign-out class attached to the button
  $('.sign-out').on('click', authEvents.onSignOut)
  // event lstener for the change-password class attached to the form
  $('.change-password').on('submit', authEvents.onChangePassword)

  // Quiz template event listeners
  // event listener for the create-quiz class attached to the form
  $('.create-quiz').on('submit', quizEvents.onCreateQuiz)
  // event listener for the index-quiz class attached to a button
  $('.index-quiz').on('click', quizEvents.onIndexQuiz)
})
