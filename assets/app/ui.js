'use strict';

const foodDisplay = require('../templates/display-search-results.handlebars');

const searchFoodsSuccess = (data) => {
  console.log(data);
  $('#meal-content').removeClass('hidden');
  $('.search-table').removeClass('hidden');
  $('.search-table').html('');
  $('.search-table').html(foodDisplay({foods: data.foods}));
};

const searchFoodsFailure = (data) => {
  console.log(data);
};


module.exports = {
  searchFoodsSuccess,
  searchFoodsFailure,
};
