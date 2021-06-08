'use strict'

// const store = require('./../store')

const onCreateQuestionSuccess = function (res) {
  $('.create-question').trigger('reset')
}

const errorHandler = function (err) {
  $('.auth-message').text('Oops! Something went wrong. Status: ' + err.status)
}

module.exports = {
  onCreateQuestionSuccess,
  errorHandler
}
