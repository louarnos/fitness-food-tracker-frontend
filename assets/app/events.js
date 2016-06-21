'use strict';

const appApi = require('./api.js');
const appUi = require('./ui.js');
const displayFoodForMeal = require('../templates/display-food-added-to-meal.handlebars');
const displayMealTotals = require('../templates/display-meal-totals.handlebars');
const app = require('../app-data.js');

const addHandlers = () => {
  $('#food-search-btn').on('click', function(event){
    event.preventDefault();
    let searchInput = $('#search-input-field').val();
    searchInput = searchInput.replace(/ /gi, "+").toUpperCase();
    appApi.foodSearch(appUi.searchFoodsSuccess,
                      appUi.searchFoodsFailure,
                      searchInput);
  });
  $('#nav-user-stats').on('click', function(event){
    event.preventDefault();
    $('.jumbotron').addClass('hidden');
    $('#update-user-form').removeClass('hidden');
  });

  $('#update-user-form').on('submit', function(event){
    event.preventDefault();
    let data = getFormFields(this);
    appApi.updateUser(appUi.updateUserSuccess,
                      appUi.updateUserFailure,
                      data);
  });

  $(document).on('click', '#add-food-btn', function(event){
    event.preventDefault();
    let selected = $(this).parent().parent().children();
    console.log(selected);
    let length = selected.length;
    let qty = $(selected[length-1]).find('#qty-input').val();
    let food = {};
    food.serv_qty = qty;
    selected.each(function(column){
      let key = $(this).parent().children()[column].dataset.item;
      console.log(typeof(key), key);
      if(key === 'description') {
        food[key] = $(this).parent().children()[column].innerText;
        console.log('in the if');
      }else if (key === 'id'){
        food[key] = $(this).parent().children()[column].innerText;
        console.log('in the if');
      }else if (key === 'grams_per_serving'){
        food[key] = $(this).parent().children()[column].innerText;
        console.log('in the if');
      }else {
        let val = $(this).parent().children()[column].innerText;
        food[key] = val*qty;
      }
    });
    $('.meal-table').removeClass('hidden');
    $('.meal-total-table').removeClass('hidden');
    $('.meal-table > table').append(displayFoodForMeal({food}));
    app.foods.push(food);
    let mealTotal = {
      "calories": 0,
      "fat_mono": 0,
      "fat_poly": 0,
      "fat_sat": 0,
      "carbs": 0,
      "sugar": 0,
      "fiber": 0,
      "protein": 0,
      "sodium": 0,
      "choles": 0,
    };
    app.foods.forEach(function(food){
      mealTotal.calories += food.calories;
      mealTotal.fat_mono += food.fat_mono;
      mealTotal.fat_poly += food.fat_poly;
      mealTotal.fat_sat += food.fat_sat;
      mealTotal.carbs += food.carbs;
      mealTotal.sugar += food.sugar;
      mealTotal.fiber += food.fiber;
      mealTotal.protein += food.protein;
      mealTotal.sodium += food.sodium;
      mealTotal.choles += food.choles;
    });
    $('.meal-total-table > table').html(displayMealTotals({ mealTotal }));
  });

  $(document).on('click', '#create-meal-btn', function(event){
    event.preventDefault();
    console.log('clicked', $('#meal-type-input').val());
    let data = {
      meal: {
        meal_type: $('#meal-type-input').val(),
      }
    };
    console.log(data);
    appApi.createMeal(appUi.createMealSuccess, appUi.createMealFailure, data);
  });
};

module.exports = {
  addHandlers,
};
