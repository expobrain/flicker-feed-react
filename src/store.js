"use strict";

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppDispatcher = require('./dispatcher');
var Constants = require('./constants');


var CHANGE_EVENT = 'feed_change';


/* --------------------------------------------------------------------------
 * Private implementation
 * --------------------------------------------------------------------------
 */

var _feed = [];

function _fetchMore () {
  // implement me
  return false;
}


/* --------------------------------------------------------------------------
 * Public implementation
 * --------------------------------------------------------------------------
 */

var FeedStore = assign({}, EventEmitter.prototype, {

  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getFeed: function () {
    return _feed;
  },

  dispatchToken: AppDispatcher.register(function (payload) {
    var action = payload.action;

    switch (action) {
      case Constants.FEED_FETCH_MORE:
        if (_fetchMore()) {
          FeedStore.emitChange();
        }
        break;
    }
  })

});


module.exports = FeedStore;
