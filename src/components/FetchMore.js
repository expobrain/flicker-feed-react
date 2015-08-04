"use strict";

var React = require('react');
var Actions = require('../actions');


var FetchMore = React.createClass({

  handleClick: function (event) {
    Actions.fetch_more();
  },

  render: function () {
    return (
      <div className="fetch-more">
        <button
          className="btn btn-lg btn-success"
          onClick={this.handleClick}
          >
          Fetch more!
        </button>
      </div>
    );
  }
});


module.exports = FetchMore;
