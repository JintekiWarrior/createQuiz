'use strict'

const store = require('./store.js')

// function that shows the change password form
const showPassForm = function () {
  $('.change-password').show()
}

// function that shows the update quiz form
const showUpdateForm = function () {
  $('.create-quiz').hide()
  $('#show-quiz-display').hide()
  $('#show-question-display').hide()
  $('.create-question').hide()
  $('.update-quiz').show()
  $('#second-heading').text('Update a quiz')
  const updateId = $(event.target).data('id')
  store.update = updateId
}

const showCreateForm = function () {
  $('.create-quiz').show()
  $('#show-quiz-display').hide()
  $('#show-question-display').hide()
  $('.create-question').hide()
  $('.update-quiz').hide()
  $('#second-heading').text('Craft a quiz')
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
  showSignInForm,
  showCreateForm
}
