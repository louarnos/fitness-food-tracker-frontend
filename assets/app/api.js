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

module.exports = {
  foodSearch,
};
