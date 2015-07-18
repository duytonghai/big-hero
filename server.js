require('node-jsx').install({extension: '.jsx'});

var express = require('express');

var Index = require("./server/Index");

var server = express();
var port = 8080;

// Serve initial HTML
server.get("/", function(req, res) {
  new Index().load(function(err, responseHTML) {
    if (err) {
      return res.status(500).send("Template error");
    }
    res.send(responseHTML);
  });
});

// Static assets
server.use(function(req, res, next) {
  if (req.url === "/scripts/bundle.js") {
    req.url = "/scripts/bundle.dev.js";
  }
  next();
});

server.use(express.static("./public"));

server.listen(port);

console.log("Running server on port " + port + ", press ctrl + c to stop.");
