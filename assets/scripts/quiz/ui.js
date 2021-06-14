'use strict'

// const store = require('./../store')

const createQuizSuccess = function (res) {
  $('.create-quiz').trigger('reset')
  $('.auth-message').text('Quiz Created')

  $('#quiz-display').html(`
    <h3 class="create-quiz-text">${res.quiz.title}</h3>
    <p class="create-quiz-text">Description: ${res.quiz.description}</p>
    `)
}

const indexQuizSuccess = function (res) {
  $('.auth-message').text('Index Success')
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
  $('.auth-message').text('Update Successful')
}

const onDeleteSuccess = function (res) {
  $('.auth-message').text('Delete Success')
}

const errorHandler = function (err) {
  $('auth-message').text('Oops! Something went wrong. Status: ' + err.status)
}

module.exports = {
  createQuizSuccess,
  indexQuizSuccess,
  onUpdateSuccess,
  onDeleteSuccess,
  onShowSuccess,
  errorHandler
}
