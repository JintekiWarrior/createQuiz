'use strict'

const store = require('./store.js')

// function that shows the change password form
const showPassForm = function () {
  $('.change-password').show()
}

// function that shows the update quiz form
const showUpdateForm = function () {
  $('.create-quiz').hide()
  $('.update-quiz').show()
  const updateId = $(event.target).data('id')
  store.update = updateId
}

const showSignUpForm = function () {
  $('.sign-in-container').hide()
  $('.sign-up-container').show()
}

const showSignInForm = function () {
  $('.sign-up-container').hide()
  $('.sign-in-container').show()
}

module.exports = {
  showPassForm,
  showUpdateForm,
  showSignUpForm,
  showSignInForm
}
