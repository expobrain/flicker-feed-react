"use strict";

var React = require('react');
var FeedStore = require('../stores/FeedStore');


var Feeds = React.createClass({

  render: function () {
    return <li className="feed-item">
      <div className="thumbnail">
        <a href={this.props.data.link} target="_blank">
          <img src={this.props.data.media.m} alt={this.props.data.title} />
        </a>
      </div>
      <div className="details">
        <div className="title">{this.props.data.title}</div>
        <div className="author">
          <a href={this.props.data.author_id}>
            {this.props.data.author}
          </a>
        </div>
        <div className="tags">Tags: {this.props.data.tags}</div>
      </div>
    </li>
  }
});


module.exports = Feeds;
