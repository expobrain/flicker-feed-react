"use strict";

var React = require('react');
var Feed = require('./components/Feed');
var FetchMore = require('./components/FetchMore');


var FlickrFeedApp = React.createClass({

  render: function () {
    return (
      <div>
        <div id="feed"><Feed /></div>
        <div id="fetch-more"><FetchMore /></div>
      </div>
    );
  }
});


React.render(<FlickrFeedApp />, document.getElementById('flicker-feed-app'));
