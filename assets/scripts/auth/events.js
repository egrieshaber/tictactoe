const api = require('./api')

const onCreateGameClick = function (event) {
  // ...
  // event.preventDefault

  // TODO
  // save response from server in ui.handleSuccessfulCreate
  // put the game object in store
  api.createGame()
    .then(console.log) // ui.handleSuccessfulCreate
    .catch(console.error)
}

module.exports = {
  onCreateGameClick
}
