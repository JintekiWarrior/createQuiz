'use strict'

// const store = require('./../store')
const appFunctions = require('./../functions.js')

const onCreateQuestionSuccess = function (res) {
  $('.create-question').trigger('reset')
  // shows a message when a quiz is deleted
  $('#crud-message').text('question created').show()
  // hides the crud message after 4 seconds
  appFunctions.hideCrud()
}

const errorHandler = function () {
  $('#crud-message').text('Oops! Something went wrong.')
  // hides the crud message after 4 seconds
  appFunctions.hideCrud()
}

module.exports = {
  onCreateQuestionSuccess,
  errorHandler
}
