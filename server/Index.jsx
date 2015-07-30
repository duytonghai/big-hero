var React = require('react');

var App = require('../app/App');

var Template = require('./template');

function Index() {}

Index.prototype.load = function(callback) {
  new Template('../app/index.html').render({
    app: <App />
  }, callback);
};

module.exports = Index;
