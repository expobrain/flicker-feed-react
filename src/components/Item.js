"use strict";

var React = require('react');
var FeedStore = require('../stores/FeedStore');


var Feeds = React.createClass({

  render: function () {
    return (
      <li className="feed-item list-group-item">
        <div className="thumbnail img-thumbnail">
          <a href={this.props.data.link} target="_blank">
            <img src={this.props.data.media.m} alt={this.props.data.title} />
          </a>
        </div>
        <div className="details">
          <h2 className="author">{this.props.data.author}</h2>
          <div className="title">{this.props.data.title}</div>
          <div className="tags">{this.props.data.tags}</div>
        </div>
      </li>
    )
  }
});


module.exports = Feeds;
