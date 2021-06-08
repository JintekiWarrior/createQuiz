'use strict'

const store = require('./../store')

const createQuizSuccess = function (res) {
  console.log(res)
  $('.create-quiz').trigger('reset')
  $('.auth-message').text('Quiz Created')

  $('#quiz-display').html(`
    <h3>${res.quiz.title}</h3>
    <p>Description: ${res.quiz.description}</p>
    `)
}

const indexQuizSuccess = function (res) {
  $('.auth-message').text('Index Success')
  let quizHTML = ''
  res.quiz.forEach(quiz => {
    quizHTML += `
      <div>
        <h3 class="index-text">${quiz.title}</h3>
        <p class="index-text">Description: ${quiz.description}</p>
      </div>
      <button class="delete-quiz" data-id=${quiz._id}>Delete Quiz</button>
      <button class="update-quiz-show" data-id=${quiz._id}>Update Quiz</button>
      <button class="show-quiz-button" data-id=${quiz._id}>Show Quiz</button>
    `
  })
  $('#quiz-display').html(quizHTML)
}

const onShowSuccess = function (res) {
  $('.create-quiz').hide()
  console.log(res)
  $('#show-quiz-display').html(`
    <h3 id="show-quiz-title">${res.title}</h3>
    <p id="show-quiz-description">${res.description}</p>
    `)
  let questionHTML = ''
  res.questions.forEach(quest => {
    questionHTML += `
    <h3>${quest.question}</h3>
    <p>${quest.rightAnswer}</p>
    <p>${quest.wrongAnswer}</p>
    <p>${quest.wrongAnswer2}</p>
    `
  })
  $('#show-question-display').html(questionHTML)
}

const onUpdateSuccess = function (res) {
  $('.update-quiz').trigger('reset')
  $('auth-message').text('Update Successful')
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
