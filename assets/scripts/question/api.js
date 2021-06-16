'use strict'

const config = require('./../config.js')
const store = require('./../store.js')

const createQuestion = function (data) {
  return $.ajax({
    method: 'POST',
    data,
    url: config.apiUrl + '/questions',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

module.exports = {
  createQuestion
}
