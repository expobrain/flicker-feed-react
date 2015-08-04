"use strict";

var React = require('react');
var Feed = require('./components/Feed');
var FetchMore = require('./components/FetchMore');


var FlickrFeedApp = React.createClass({

  render: function () {
    return (
      <div>
        <header>Flickr Feeder</header>
        <Feed />
        <footer><FetchMore /></footer>
      </div>
    );
  }
});


React.render(<FlickrFeedApp />, document.getElementById('flicker-feed-app'));
