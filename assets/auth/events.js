'use strict';

// const getFormFields = require('../../../lib/get-form-fields');
const app = require('../app-data.js');
const authApi = require('./api.js');
const authUi = require('./ui.js');

const addHandlers = () => {
  $('#nav-sign-up').on('click', function(event){
    event.preventDefault();
    $("#sign-up-form").removeClass('hidden');
    $('#sign-in-form').addClass('hidden');
    $('#change-password-form').addClass('hidden');
    $(".search-input").addClass('hidden');
    $('.jumbotron').addClass('hidden');
  });
  $('#nav-sign-in').on('click', function(event){
    event.preventDefault();
    $('#sign-in-form').removeClass('hidden');
    $('#sign-up-form').addClass('hidden');
    $('#change-password-form').addClass('hidden');
    $(".search-input").addClass('hidden');
    $('.jumbotron').addClass('hidden');
  });
  $('#nav-sign-out').on('click', function(event) {
    event.preventDefault();
    authApi.signOut(authUi.signOutSuccess, authUi.failure);
  });
  $('#sign-up-form').on('submit', function (event) {
    event.preventDefault();
    let data = getFormFields(this);
    console.log(data);
    app.credentials = data;
    console.log(app.credentials);
    authApi.signUp(authUi.regSuccess, authUi.regFailure, data);
  });
  $('#sign-in-form').on('submit', function(event) {
    event.preventDefault();
    let data = getFormFields(this);
    authApi.signIn(authUi.signInSuccess, authUi.signInFail, data);
  });
  $('#change-password-form').on('submit', function(event) {
    event.preventDefault();
    let data = getFormFields(this);
    console.log(data);
    authApi.changePW(authUi.changePWSuccess, authUi.changePWFail, data);
  });
};

module.exports = {
  addHandlers
};
