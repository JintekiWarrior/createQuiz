const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const store = require('./../store.js')

const onCreateQuestion = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)

  api.createQuestion(data)
    .then(ui.createQuestionSuccess)
    .catch(ui.errorHandler)
}

module.exports = {
  onCreateQuestion
}
