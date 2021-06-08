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

const showQuiz = function (quizId) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/quizzes/' + quizId,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
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

const deleteQuiz = function (quizId) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/quizzes/' + quizId,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

module.exports = {
  createQuiz,
  indexQuiz,
  updateQuiz,
  deleteQuiz,
  showQuiz
}
