var request = require('request');
var pinConfigs = require('../../confs/providers').pin;

module.exports = {
  getPins: function(req, res) {
    var boardId = req.params.id;
    var fields = req.query.fields;
    var path = '/boards/{{id}}/pins';

    request({
      url: pinConfigs.host + path.replace('{{id}}', boardId) + '?access_token=' + pinConfigs.token + '&fields=' + fields,
    }, function(error, response, body) {
      res.set({
        'Content-Type': 'application/json'
      }).status(200).send(body);
    });
  },
  getBoards: function(req, res) {
    var boardId = req.params.id;
    var path = '/me/boards';

    request({
      url: pinConfigs.host + path + '?access_token=' + pinConfigs.token
    }, function(error, response, body) {
      res.set({
        'Content-Type': 'application/json'
      }).status(200).send(body);
    });
  }
};
