'use strict'

const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

// This will get the data from the quiz create form and make an ajax call.
// If successful the ui will show the created quiz, otherwise error.
//
// quiz create form event handler
const onCreateQuiz = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)

  api.createQuiz(data)
    .then(ui.createQuizSuccess)
    .catch(ui.errorHandler)
}

const onIndexQuiz = function (event) {
  event.preventDefault()

  api.indexQuiz()
    .then(ui.indexQuizSuccess)
    .catch(ui.errorHandler)
}

module.exports = {
  onCreateQuiz,
  onIndexQuiz
}
