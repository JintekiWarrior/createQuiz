'use strict'

// const store = require('./../store')

const createQuizSuccess = function (res) {
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
        <h3>${quiz.title}</h3>
        <p>Description: ${quiz.description}</p>
        <p>Id: ${quiz._id}</p>
      </div>
      <button class="delete-quiz" data-id=${quiz._id}>Delete Quiz</button>
    `
  })
  $('#quiz-index').html(quizHTML)
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
  errorHandler
}
