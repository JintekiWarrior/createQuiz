'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

// requires the authEvents functions
const authEvents = require('./auth/events.js')

const quizEvents = require('./quiz/events.js')

const questionEvents = require('./question/events.js')

const appFunctions = require('./functions.js')

$(() => {
  // Authorization event listeners
  // event listener for the sign-up class attached to the form
  $('.sign-up').on('submit', authEvents.onSignUp)
  // event listener for the sign-in class attached to the form
  $('.sign-in').on('submit', authEvents.onSignIn)
  // event listener for sign-out class attached to the button
  $('.sign-out').on('click', authEvents.onSignOut)
  // button to open up the change password form
  $('.change-password-show').on('click', appFunctions.showPassForm)
  // event lstener for the change-password class attached to the form
  $('.change-password').on('submit', authEvents.onChangePassword)

  // Quiz template event listeners
  // event listener for the create-quiz class attached to the form
  $('.create-quiz').on('submit', quizEvents.onCreateQuiz)
  // event listener for the index-quiz class attached to a button
  $('.index-quiz').on('click', quizEvents.onIndexQuiz)
  // this button will show the update quiz form
  $('#quiz-display').on('click', '.update-quiz-show', appFunctions.showUpdateForm)
  // event listener for the update-quiz class attached to a form
  $('.update-quiz').on('submit', quizEvents.onUpdateQuiz)
  // event listener for the delete-quiz class attached to a form
  $('#quiz-display').on('click', '.delete-quiz', quizEvents.onDeleteQuiz)
  // event listener for the show-quiz-button class attached to a button
  $('#quiz-display').on('click', '.show-quiz-button', quizEvents.onShowQuiz)

  // Question template event listeners
  // event listener for the create-question class attached to the form
  $('.create-question').on('submit', questionEvents.onCreateQuestion)
})
