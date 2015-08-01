var React = require('react');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
  displayName: 'Main Application',
  mixins: [FluxMixin],
  render: function() {
    return (
      <div>
        <RouteHandler />
      </div>
    );
  }
});

module.exports = App;
