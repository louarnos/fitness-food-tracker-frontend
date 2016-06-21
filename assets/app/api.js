'use strict';

const app = require('../app-data.js');


const foodSearch = (success, failure, keys) => {
  console.log('search queued');
  $.ajax({
    method: 'GET',
    url: app.api + '/foods_search/' + keys,
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
    url: app.api + '/users/' + app.user.id,
    data,
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  }).done(success)
  .fail(failure);
};

const createMeal = (success, failure, data) => {
  console.log('meal creation queued');
  $.ajax({
    method: 'POST',
    url: app.api + '/meals',
    data,
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  }).done(success)
  .fail(failure);
};

const addMealItem = (success, failure, data) => {
  console.log('meal creation queued');
  $.ajax({
    method: 'POST',
    url: app.api + '/meal_items',
    data,
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  }).done(success)
  .fail(failure);
};


module.exports = {
  foodSearch,
  updateUser,
  createMeal,
  addMealItem,
};
