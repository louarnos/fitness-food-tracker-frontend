'use strict';

const appApi = require('./api.js');
const appUi = require('./ui.js');
const displayFoodForMeal = require('../templates/display-food-added-to-meal.handlebars')

const addHandlers = () => {
  $('#food-search-btn').on('click', function(event){
    event.preventDefault();
    let searchInput = $('#search-input-field').val();
    searchInput = searchInput.replace(/ /gi, "+").toUpperCase();
    appApi.foodSearch(appUi.searchFoodsSuccess,
                      appUi.searchFoodsFailure,
                      searchInput);
  });

  $(document).on('click', '#add-food-btn', function(event){
    event.preventDefault();
    let selected = $(this).parent().parent().children();
    console.log(selected);
    let length = selected.length;
    let qty = $(selected[length-1]).find('#qty-input').val();
    let food = {};
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
    $('.meal-table > table').append(displayFoodForMeal({food}));
    console.log(food);
  });

};

module.exports = {
  addHandlers,
};
