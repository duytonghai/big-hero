/**
 * @file Api to call request
 */

'use strict';

var $ = require('jquery');

var API = {};

API.get = function(url, callback) {
  $.get(url, {}, function(body) {
    callback(body);
  }, 'json');
};

module.exports = API;