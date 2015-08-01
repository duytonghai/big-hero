require('node-jsx').install({extension: '.jsx'});

var express = require('express');

var Index = require('./server/Index');
var pin = require('./server/models/pin');

var server = express();
var port = 8000;

server.use(function(req, res, next) {
  // Allows cross domain request
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');

  if (req.url === '/scripts/bundle.js') {
    req.url = '/scripts/bundle.dev.js';
  }
  next();
});

server.use(express.static('./public'));

// Serve initial HTML
server.get('/', function(req, res) {
  new Index().load(function(err, responseHTML) {
    if (err) {
      return res.status(500).send('Template error');
    }
    res.send(responseHTML);
  });
});

server.get('/boards', pin.getBoards);
server.get('/boards/:id/pins', pin.getPins);

server.listen(port);

console.log('Running server on port ' + port + ', press ctrl + c to stop.');
