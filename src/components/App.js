"use strict";

var React = require('react');
var FeedStore = require('../store');
var Item = require('./Item');


var FlickrFeedApp = React.createClass({

  _getState: function () {
    return {
      feed: FeedStore.getFeed()
    };
  },

  _onChange: function () {
    return this._getState();
  },

  getInitialState: function () {
    return this._getState();
  },

  componentDidMount: function () {
    FeedStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    FeedStore.removeChangeListener(this._onChange);
  },

  render: function () {
    var items = this.state.feed.map(function (item) {
      return <Item key={item.id} data={item}/>
    })

    return (
      <ul id="feed-items">{items}</ul>
    );
  }
});


module.exports = FlickrFeedApp;
