/**
 * @file React About component
 */

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var constants = require('../constants');

var About = React.createClass({
  displayName: "About",
  render: function() {
    return (
      <div>
        About<br />
        <Link to={constants.routeNames.HOME_PAGE}>Home</Link>
      </div>
    );
  }
});

module.exports = About;
