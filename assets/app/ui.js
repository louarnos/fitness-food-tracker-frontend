'use strict';

const foodDisplay = require('../templates/display-search-results.handlebars');
const app = require('../app-data.js');
const appApi = require('./api.js');

const searchFoodsSuccess = (data) => {
  console.log(data);
  $('#meal-content').removeClass('hidden');
  $('.search-table').removeClass('hidden');
  $('.search-table').html('');
  $('.search-table').html(foodDisplay({foods: data.foods}));
  $('.search-placeholder').addClass('hidden');
  $('html, body').animate({
  scrollTop: $("#meal-content").offset().top - 100
}, 1000);
};

const searchFoodsFailure = (data) => {
  console.log(data);
};

const updateUserSuccess = (data) => {
  console.log(data);
  $('#update-user-form').each(function(){
    this.reset();
  });
  $('#update-user-form').addClass('hidden');
  $('.jumbotron').removeClass('hidden');
};

const updateUserFailure = (data) => {
  console.log(data);
};

const addMealItemSuccess = (data) => {
  console.log(data);
};

const addMealItemFailure = (data) => {
  console.log(data);
};

const createMealSuccess = (data) => {
  console.log(data);
  app.currentMeal = data.meal;
  app.foods.forEach(function(food){
    console.log(food);
    let data = {
      meal_item: {
        user_meal_id: app.currentMeal.id,
        food_for_meal_id: food.id,
        serv_qty: food.serv_qty,
      }
    };
    appApi.addMealItem(addMealItemSuccess,
                       addMealItemFailure,
                       data);
  });
};

const createMealFailure = (data) => {
  console.log(data);
};


module.exports = {
  searchFoodsSuccess,
  searchFoodsFailure,
  updateUserSuccess,
  updateUserFailure,
  createMealSuccess,
  createMealFailure,
  addMealItemSuccess,
  addMealItemFailure,
};
