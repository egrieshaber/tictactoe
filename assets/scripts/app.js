'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  const playerOne = 'x'
  const playerTwo = 'o'

  let currentTurn = 1
  let movesMade = 0

  const box = $('.box')
  const winnerContainer = $('.winner')
  const reset = $('.reset')

  box.on('click', function () {
    movesMade++
    if (currentTurn % 2 === 1) {
      event.target.innerHTML = playerOne
      event.target.style.color = 'red'
      currentTurn++
    } else {
      event.target.innerHTML = playerTwo
      event.target.style.color = 'blue'
      currentTurn--
    }
    if (checkForWinner()) {
      const theWinner = currentTurn === 1 ? playerTwo : playerOne
      declareWinner(theWinner)
    }
  })

  reset.on('click', function (e) {
    const moves = Array.prototype.slice.call($('.inner'))
    moves.map((m) => {
      m.innerHTML = ''
    })
    winnerContainer.html('')
    winnerContainer.css('display', 'none')
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

  // $('.inner').on('click', function () {
  //
  // })
})
