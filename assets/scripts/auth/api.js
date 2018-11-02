const config = require('./config')

const createGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token='' ${TOKEN}
    },
    data: {}
  })
}

module.exports = {
  createGame
}
