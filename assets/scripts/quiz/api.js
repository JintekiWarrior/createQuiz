'use strict'

const config = require('./../config.js')
const store = require('./../store.js')

const createQuiz = function (data) {
  return $.ajax({
    method: 'POST',
    data,
    url: config.apiUrl + '/quizzes',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const indexQuiz = function (data) {
  return $.ajax({
    method: 'GET',
    data,
    url: config.apiUrl + '/quizzes'
  })
}

const updateQuiz = function (quizId, quizData) {
  console.log(quizId)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/quizzes/' + quizId,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    },
    data: quizData
  })
}

module.exports = {
  createQuiz,
  indexQuiz,
  updateQuiz
}
