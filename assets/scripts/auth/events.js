'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  // take this data and send it to our server
  // using an HTTP request (POST)
  api.signUp(data)
    .then(ui.signUpSuccess) // if your request is successful do 'this'
    .catch(ui.signUpFailure) // if your request fails do 'this'
}

const onSignIn = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = event => {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

// GAME BELOW

let playerOne = 'x'
let playerTwo = 'o'

let scoreX = 0
let scoreO = 0

let currentTurn = 1
let movesMade = 0

let gameOver = false

const onCreateGame = event => {
  // reset to default
  playerOne = 'x'
  playerTwo = 'o'
  scoreX = 0
  scoreO = 0
  currentTurn = 1
  movesMade = 0
  gameOver = false
  event.preventDefault()
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

// const box = $('.box')
const winnerContainer = $('.winner')
const reset = $('.reset')
const scoreContainer = $('.score')
const tieContainer = $('.tie')
const data = {}
const onMakeMove = event => {
  const target = $(event.target)
  const index = parseInt(target.attr('id'))
  data.index = index
  movesMade++
  // console.log(event.target.innerHTML)
  if (event.target.innerHTML === '') {
    // if event.target.text('')
    // finding odd numbers
    if (currentTurn % 2 === 1) {
      event.target.innerHTML = playerOne
      event.target.style.color = 'red'
      data.value = playerOne
      currentTurn++
    } else {
      event.target.innerHTML = playerTwo
      event.target.style.color = 'black'
      data.value = playerTwo
      currentTurn--
    }
  }

  if (checkForWinner()) {
    // if current move is equal to 1, player two wins, else player one wins
    const theWinner = currentTurn === 1 ? playerTwo : playerOne
    declareWinner(theWinner)
    if (theWinner === playerOne) {
      scoreX++
    } else {
      scoreO++
    }
    gameOver = true
    currentTurn = null
    playerOne = ''
    playerTwo = ''
    declareScore(scoreX + scoreO)
  } else if (movesMade === 9) {
    declareTie()
  }

  data.over = gameOver

  api.makeMove(data)
    .then()
    .catch()
}

reset.on('click', function (event) {
  console.log(event.target)
  playerOne = 'x'
  playerTwo = 'o'
  const moves = Array.prototype.slice.call($('.inner'))
  moves.map((m) => {
    m.innerHTML = ''
  })
  winnerContainer.html('')
  winnerContainer.css('display', 'none')
  tieContainer.html('')
  tieContainer.css('display', 'none')
  currentTurn = 1
  movesMade = 0
})

function checkForWinner () {
  if (movesMade > 4) {
    const moves = Array.prototype.slice.call($('.inner'))
    const results = moves.map(function (box) {
      return box.innerHTML
    })

    const winCombo = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    return winCombo.find(function (combo) {
      if (results[combo[0]] !== '' &&
        results[combo[1]] !== '' &&
        results[combo[2]] !== '' &&
        results[combo[0]] === results[combo[1]] && results[combo[1]] ===
        results[combo[2]]) {
        return true
      } else {
        return false
      }
    })
  }
}

function declareWinner (winner) {
  winnerContainer.css('display', 'block')
  reset.css('display', 'block')
  winner = winner === playerOne ? 'X' : 'O'
  winnerContainer.html(winner + 'Wins!')
}

function declareScore (score) {
  scoreContainer.css('display', 'block')
  scoreContainer.html('X Wins: ' + scoreX + ' | ' + 'O Wins: ' + scoreO)
}

function declareTie (tie) {
  tieContainer.css('display', 'block')
  reset.css('display', 'block')
  tieContainer.html("It's a tie!")
}

module.exports = {
  onSignUp,
  getFormFields,
  onSignIn,
  onSignOut,
  onMakeMove,
  onCreateGame
}
