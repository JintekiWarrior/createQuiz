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
  console.log(res)
  let quizHTML = ''
  res.quiz.forEach(quiz => {
    quizHTML += `
      <div>
        <h3>${quiz.title}</h3>
        <p>Description: ${quiz.description}</p>
      </div>
    `
  })
  $('#quiz-index').html(quizHTML)
}

const errorHandler = function (err) {
  $('auth-message').text('Oops! Something went wrong. Status: ' + err.status)
}

module.exports = {
  createQuizSuccess,
  indexQuizSuccess,
  errorHandler
}
