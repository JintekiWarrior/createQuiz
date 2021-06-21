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
  // trigger reset for all forms on update
  $('.create-quiz').trigger('reset')
  $('.create-question').trigger('reset')
}

const showCreateForm = function () {
  $('.create-quiz').show()
  $('#show-quiz-display').hide()
  $('#show-question-display').hide()
  $('.create-question').hide()
  $('.update-quiz').hide()
  $('#second-heading').text('Craft a quiz')
  // trigger reset on all forms on create quiz
  $('.update-quiz').trigger('reset')
  $('.create-question').trigger('reset')
}

const showSignUpForm = function () {
  $('.sign-in-container').hide()
  $('.sign-up-container').show()
  $('.sign-in').trigger('reset')
  $('.sign-up').trigger('reset')
}

const showSignInForm = function () {
  $('.sign-up-container').hide()
  $('.sign-in-container').show()
}

const hideAuth = function () {
  setTimeout(function () {
    $('#auth-message').hide()
  }, 4000)
}

const hideCrud = function () {
  setTimeout(function () {
    $('#crud-message').hide()
  }, 4000)
}

module.exports = {
  showPassForm,
  showUpdateForm,
  showSignUpForm,
  showSignInForm,
  showCreateForm,
  hideAuth,
  hideCrud
}
