"use strict";

var React = require('react');
var FeedStore = require('../store');


var Feeds = React.createClass({

  render: function () {
    return <li><p>{this.props.data.link}</p></li>
  }
});


module.exports = Feeds;
