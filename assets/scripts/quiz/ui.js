'use strict'

// const store = require('./../store')

const appFunctions = require('./../functions.js')

const createQuizSuccess = function (res) {
  $('.create-quiz').trigger('reset')
  // shows a message when a quiz is created
  $('#crud-message').text('creation success').show()
  // hides the crud message after 4 seconds
  appFunctions.hideCrud()
  $('#quiz-display').html(`
    <h3 class="create-quiz-text">${res.quiz.title}</h3>
    <p class="create-quiz-text">Description: ${res.quiz.description}</p>
    `)
}

const indexQuizSuccess = function (res) {
  let quizHTML = ''
  res.quiz.forEach(quiz => {
    quizHTML += `
      <div>
        <h3 class="index-text">${quiz.title}</h3>
      </div>
      <button class="show-quiz-button feature-button" data-id=${quiz._id}>Show Quiz</button>
      <button class="update-quiz-show feature-button" data-id=${quiz._id}>Update Quiz</button>
      <button class="delete-quiz feature-button" data-id=${quiz._id}>Delete Quiz</button>
    `
  })
  $('#quiz-display').html(quizHTML)
}

const onShowSuccess = function (res) {
  $('.create-quiz').hide()
  $('.update-quiz').hide()
  $('#show-quiz-display').show()
  $('#show-question-display').show()
  $('.create-question').show()
  // trigger reset for all forms on show quiz success
  $('.create-quiz').trigger('reset')
  $('.update-quiz').trigger('reset')
  $('.create-question').trigger('reset')

  $('#show-quiz-display').html(`
    <h3 id="show-quiz-title">${res.title}</h3>
    <p id="show-quiz-description">${res.description}</p>
    `)
  let questionHTML = ''
  res.questions.forEach(quest => {
    questionHTML += `
    <h3 class='question'>${quest.question}</h3>
    <ul class='answers-list'>
      <li class='answer'>${quest.rightAnswer}</li>
      <li class='answer'>${quest.wrongAnswer}</li>
      <li class='answer'>${quest.wrongAnswer2}</li>
    </ul>
    `
  })
  $('#show-question-display').html(questionHTML)
}

const onUpdateSuccess = function (res) {
  $('.update-quiz').trigger('reset')
  // shows a message when a quiz is updated
  $('#crud-message').text('update success').show()
  // hides the crud message after 4 seconds
  appFunctions.hideCrud()
}

const onDeleteSuccess = function (res) {
  // shows a message when a quiz is deleted
  $('#crud-message').text('deletion success').show()
  // hides the crud message after 4 seconds
  appFunctions.hideCrud()
}

const errorHandler = function () {
  // shows message on failure
  $('#crud-message').text('Oops! Something went wrong.')
  // hides the crud message after 4 seconds
  appFunctions.hideCrud()
}

module.exports = {
  createQuizSuccess,
  indexQuizSuccess,
  onUpdateSuccess,
  onDeleteSuccess,
  onShowSuccess,
  errorHandler
}
