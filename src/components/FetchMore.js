"use strict";

var React = require('react');
var Actions = require('../actions');


var FetchMore = React.createClass({

  handleClick: function (event) {
    Actions.fetch_more();
  },

  render: function () {
    return (
      <button onClick={this.handleClick}>Fetch more!</button>
    );
  }
});


module.exports = FetchMore;
