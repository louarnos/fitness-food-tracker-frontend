'use strict';

const app = require('../app-data.js');
const authApi = require('./api.js');
const authUi = require('./ui.js');

const signOutSuccess = (data) => {
  $('#sign-in-form').each(function(){
    this.reset();
  });
  $('#sign-up-form').each(function(){
    this.reset();
  });
  $('#change-password-form').each(function(){
    this.reset();
  });
  $("#nav-li-change-password").addClass('hidden');
  $("#nav-li-sign-out").addClass('hidden');
  $("#nav-sign-up").removeClass('hidden');
  $("#nav-sign-in").removeClass('hidden');
  $(".search-input").addClass('hidden');
  $('.jumbotron').removeClass('hidden');
};

const signInSuccess = (data) => {
  console.log(data);
  app.user = data.user
  console.log(app.user);
  console.log('signed-in');
  $('#sign-in-form').each(function(){
    this.reset();
  });
  $('#sign-in-form').addClass('hidden')
  $("#nav-li-change-password").removeClass('hidden');
  $("#nav-li-sign-out").removeClass('hidden');
  $("#nav-sign-up").addClass('hidden');
  $("#nav-sign-in").addClass('hidden');
  $(".search-input").removeClass('hidden');
};

const changePWSuccess = (data) => {
  console.log(data);
  $('#change-password-form').each(function(){
    this.reset();
  });
};

const changePWFail = (error) => {
  console.log(error);
  $('#pw-change-fail-notification').removeClass('hidden');

  setTimeout(function(){
    $('#pw-change-fail-notification').addClass('hidden');
  }, 2000);

};

const regSuccess = (data) => {
  console.log(data);
  app.user = data.user;
  $('#sign-up-form').addClass('hidden');
  authApi.signIn(signInSuccess, signInFail, app.credentials);
  $('#sign-up-form').each(function(){
    this.reset();
  });
};

const signInFail = (error) => {
  console.log(Error);
  console.log('sign-in-failed');
};

const regFailure = (error) => {
  console.log(error);
  $('#sign-up-fail-notification').removeClass('hidden');

  setTimeout(function(){
    $('#sign-up-fail-notification').addClass('hidden');
  }, 2000);
};

const failure = (error) => {
  console.log(error);
};

const success = (data) => {
  console.log(data);
};

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  changePWSuccess,
  regSuccess,
  signInFail,
  regFailure,
  changePWFail
};
