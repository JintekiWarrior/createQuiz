'use strict'

const config = require('./../config.js')
const store = require('./../store.js')

const createQuestion = function (data) {
  return $.ajax({
    method: 'POST',
    data,
    url: config.apiUrl + '/questions'
  })
}

module.exports = {
  createQuestion
}
