'use strict'

// require get form fields an internal function used to easily get data
// from form inputs.
const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

// A function that retrieves the data inputed into the sign up form
// It will then use the data to make an ajax call and if successful
// call the ui (user interface) function to print a success or failure
// message.
// preventDefault method just stops the page from refreshing after the sign up
// button is clicked.
//
// Sign up form submit event handler
const onSignUp = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)

  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.errorHandler)
}

// Obtains the data from the sign in form. Runs an ajax call and if successful
// invokes a function that will print a success message and if not will invoke
// a function to print a failure message.
//
// Sign in form submit handler
const onSignIn = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)

  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.errorHandler)
}

// Will sign out a user if the ajax call is successful. It will also delete
// the token associated with the user.
//
// Sign out form submit handler
const onSignOut = function (event) {
  event.preventDefault()

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.errorHandler)
}

// Obtains the data from the form and makes an ajax call. If successful
// will send a message to say so. If not will print the `errorHandler` message.
//
// Change password form submit handler
const onChangePassword = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)

  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.errorHandler)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword
}
