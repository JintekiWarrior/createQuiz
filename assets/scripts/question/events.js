const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const store = require('./../store.js')

const onCreateQuestion = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  const quizId = store.quizId
  data.question.quizId = quizId

  api.createQuestion(data)
    .then(ui.onCreateQuestionSuccess)
    .catch(ui.errorHandler)
}

module.exports = {
  onCreateQuestion
}
