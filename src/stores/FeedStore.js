"use strict";

var $ = require('jquery');
var _ = require('lodash');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppDispatcher = require('../dispatcher');
var Constants = require('../constants');


var CHANGE_EVENT = 'feed_change';
var FLICKR_API_URL = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json';


/* --------------------------------------------------------------------------
 * Private implementation
 * --------------------------------------------------------------------------
 */

var _feed = [];

function _fetchMore () {
  $.ajax({
      url: FLICKR_API_URL,
      type: 'GET',
      dataType: 'jsonp',
      jsonp: false,
      jsonpCallback: 'jsonFlickrFeed'
    })
    .done(function (data) {
      // Append new data to current one
      _feed = _.chain(_feed)
        .concat(data.items)  // Concat new feed
        .unique('link')  // Remove duplicates
        .value();

      // Emit change
      FeedStore.emitChange();
    })
    .fail(function (xhr, status, err) {
      cosole.log(stauts, err.toString());
    });
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
    var action = payload.actionType;

    switch (action) {
      case Constants.FEED_FETCH_MORE:
        _fetchMore();
        break;
    }
  })

});


module.exports = FeedStore;
