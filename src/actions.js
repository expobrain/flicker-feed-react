"use strict";

var AppDispatcher = require('./dispatcher');
var Constants = require('./constants');


var Actions = {

  fetch_more: function() {
    AppDispatcher.dispatch({
      actionType: Constants.FEED_FETCH_MORE
    });
  }
};


module.exports = Actions;
