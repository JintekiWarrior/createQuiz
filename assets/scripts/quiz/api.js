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

module.exports = {
  createQuiz,
  indexQuiz
}
