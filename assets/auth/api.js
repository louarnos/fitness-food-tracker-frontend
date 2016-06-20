'use strict';

const app = require('../app-data.js');

const signUp = (success, failure, data) => {
  console.log("Sign up request queued");
  $.ajax({
    method : 'POST',
      url : app.api + '/sign-up',
    data
  }).done(success).fail(failure);
};

const signIn = (success, failure, data) => {
  console.log("Sign in request queued");
  $.ajax({
    method : 'POST',
    url : app.api + '/sign-in',
    data
  }).done(success).fail(failure);
};

const signOut = (success, failure) => {
  console.log("Sign out request queued");
  $.ajax({
    method: 'DELETE',
    url: app.api + '/sign-out/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  }).done(success)
  .fail(failure);
};

const changePW = (success, failure, data) => {
  console.log("Change password request queued");
  $.ajax({
    method: 'PATCH',
    url: app.api + '/change-password/' + app.user.id,
    data,
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  }).done(success)
  .fail(failure);
};

const updateUser = (success, failure, data) => {
  console.log('update user stats queued');
  $.ajax({
    method: 'PUT',
    url: app.api + '/users/' + app.user._id,
    data,
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  }).done(success)
  .fail(failure);
};

module.exports = {
  signUp,
  signIn,
  signOut,
  changePW,
  updateUser,
};
