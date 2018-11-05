'use strict'

const store = require('../store.js')

const signUpSuccess = data => {
  $('#message').text('Sign up Succesful!')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signUpSuccess ran.  Data is :', data)
}

const signUpFailure = error => {
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('signUpFailure ran.  Error is :', error)
}

const signInSuccess = data => {
  store.user = data.user
  $('#message').text('Signed in seccessfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signInSuccess ran.  Data is :', data)
}

const signInFailure = error => {
  $('#message').text('Error on sign in')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('signInFailure ran.  Error is :', error)
}

const signOutSuccess = data => {
  store.user = null
  $('.grid').addClass('hidden')
  $('#message').text('Signed out seccessfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signOutSuccess ran.  Data is :', data)
}

const signOutFailure = error => {
  $('#message').text('Error on sign out')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('signOutFailure ran.  Error is :', error)
}

const createGameSuccess = data => {
  store.game = data.game
  $('.grid').removeClass('hidden')
  $('.grid > div > div > div').each(function () {
    $(this).text('')
  })
  console.log('createGameSuccess ran.  Data is :', data)
}

const createGameFailure = error => {
  $('#message').text('Error on create game')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('createGameFailure ran.  Error is :', error)
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  createGameSuccess,
  createGameFailure
}
