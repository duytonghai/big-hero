var React = require('react');

var Home = require('../app/components/Home');

var Template = require('./template');

function Index() {}

Index.prototype.load = function(callback) {
  var home = React.renderToString(<Home />);

  new Template('../app/index.html').render({
    app: home
  }, callback);
};

module.exports = Index;
