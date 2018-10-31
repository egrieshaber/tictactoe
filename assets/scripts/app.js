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

  box.on('click', function () {
    movesMade++
    if (currentTurn === 1) {
      event.target.innerHTML = playerOne
      event.target.style.color = 'red'
      currentTurn++
    } else {
      event.target.innerHTML = playerTwo
      event.target.style.color = 'blue'
      currentTurn--
    }
  })

  $('.inner').on('click', function () {

  })
})
