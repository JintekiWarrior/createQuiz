'use strict'

const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const store = require('./../store.js')

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

const onShowQuiz = function (event) {
  event.preventDefault()

  const showButton = event.target
  const quizId = $(showButton).data('id')
  store.quizId = quizId

  api.showQuiz(quizId)
    .then(ui.onShowSuccess)
    .catch(ui.errorHandler)
}

const onUpdateQuiz = function (event) {
  event.preventDefault()

  const quizData = getFormFields(event.target)

  const quizId = store.update

  api.updateQuiz(quizId, quizData)
    .then(ui.onUpdateSuccess)
    .catch(ui.errorHandler)
}

const onDeleteQuiz = function (event) {
  event.preventDefault()

  const deleteButton = event.target
  const quizId = $(deleteButton).data('id')

  api.deleteQuiz(quizId)
    .then(ui.onDeleteSuccess)
    .catch(ui.errorHandler)
}

module.exports = {
  onCreateQuiz,
  onIndexQuiz,
  onShowQuiz,
  onUpdateQuiz,
  onDeleteQuiz
}
