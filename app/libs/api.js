/**
 * @file Api to call request
 */

'use strict';

var request = require('request');

var API = {};

API.get = function(url, callback) {
  request({
    url: 'http://big-hero.com:8000/' + url
  }, function(error, response, body) {
    callback(JSON.parse(body));
  });
};

module.exports = API;