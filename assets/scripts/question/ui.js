'use strict'

// const store = require('./../store')

const onCreateQuestionSuccess = function (res) {
  console.log(res)
}

const errorHandler = function (err) {
  $('auth-message').text('Oops! Something went wrong. Status: ' + err.status)
}


module.exports = {
  onCreateQuestionSuccess,
  errorHandler
}
