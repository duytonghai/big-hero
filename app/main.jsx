/**
 * Main file to render child components for the whole app
 */

var _ = require('lodash');
var React = require('react');
var Router = require('react-router');
var Fluxxor = require('fluxxor');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

var actions = require('./actions');
var stores = require('./stores');

var App = require('./App');
var Home = require('./components/Home');
var Collection = require('./components/Collection');
var About = require('./components/About');
var constants = require('./constants');

window.app = (function() {
  var routes = (
    <Route name='app' path='/' handler={App}>
      <DefaultRoute handler={Home} />
      <Route name={constants.routeNames.COLLECTION} path='collection' handler={Collection} />
      <Route name={constants.routeNames.HOME_PAGE} path='home' handler={Home} />
      <Route name={constants.routeNames.ABOUT_PAGE} path='about' handler={About} />
    </Route>
  );

  var flux = new Fluxxor.Flux(stores, actions);
  flux.on('dispatch', function(type, payload) {
    console.log('Dispatch: ', type, payload);
  });

  var router = Router.create({routes: routes});

  return router.run(function(Handler) {
    React.render(<Handler flux={flux} />, document.body);
  });
})();
