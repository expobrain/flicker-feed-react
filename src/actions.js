"use strict";

var AppDispatcher = require('./dispatcher');
var Constants = require('./constants');


var Actions = {

  create: function(text) {
    AppDispatcher.handleViewAction({
      actionType: Constants.FEED_FETCH_MORE
    });
  }
};


module.exports = Actions;
