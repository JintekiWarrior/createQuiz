'use strict'

const store = require('./../store')
const appFunctions = require('./../functions.js')
// hide the sign-up form for styling, showing the after sign in below
// erase this function and set the after-sign-in to hide for full functionlity
// $('.before-sign-in').hide()

// This info is hidden until sign in is successful
$('.after-sign-in').hide()
// Hides the sign up container at start
$('.sign-up-container').hide()
// This info will hide the change password form until the button is clicked
$('.change-password').hide()
// This will hide the update quiz form
$('.update-quiz').hide()
// hide the create question form at start
$('#show-quiz-display').hide()
$('#show-question-display').hide()
$('.create-question').hide()
$('#auth-message').hide()

// User interface event that triggers if the ajax call is successful
// This will reset the form fields, and send a success message when the user
// successfully log in
const signUpSuccess = function (response) {
  $('.sign-up').trigger('reset')
  $('#auth-message').text('Sign up successful!').show()
  appFunctions.hideAuth()
}

// When the user signs in a message is sent to inform the user. Also the
// users credentials are stored temporarily.
// Once signed in the `before-sign-in` div container hides and the `after-sign-in`
// shows
const signInSuccess = function (response) {
  $('.sign-in').trigger('reset')
  $('auth-message').text('Sign in successful!')
  store.user = response.user
  $('.before-sign-in').hide()
  $('.after-sign-in').show()
}

// Sends a message if the user successfully signs out. Then deletes the users
// credentials that were temprarily stored.
// Funciton also shows the `before-sign-in` forms and hides the `after-sign-in`
// forms.
const signOutSuccess = function (response) {
  $('.auth-message').text('Sign out successful!')
  store.user = null
  store.update = null
  $('.before-sign-in').show()
  $('.after-sign-in').hide()
  // trigger reset for all forms on sign out
  $('.create-quiz').trigger('reset')
  $('.update-quiz').trigger('reset')
  $('.create-question').trigger('reset')
}

const changePasswordSuccess = function () {
  $('.change-password').trigger('reset')
  $('.auth-message').text('Password Changed Successfully!')
  $('.change-password').hide()
}

// Handles all authorization errors and prints a status message.
const errorHandler = function (error) {
  $('#auth-message').text('There was an error! status: ' + error.status).show()
  appFunctions.hideAuth()
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  errorHandler
}
