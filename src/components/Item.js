"use strict";

var React = require('react');
var FeedStore = require('../stores/FeedStore');


var Feeds = React.createClass({

  render: function () {
    return <li><p>{this.props.data.link}</p></li>
  }
});


module.exports = Feeds;
