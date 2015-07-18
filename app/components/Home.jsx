/**
 * @file React Home component
 */

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var constants = require('../constants');

var Home = React.createClass({
  displayName: 'Home',
  render: function() {
    return (
      <div>
        Home<br />
        <a href="/#/about">About</a>
      </div>
    );
  }
});

module.exports = Home;
