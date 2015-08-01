/**
 * @file Initialize actions
 */

var api = require('../libs/api');

var constants = require('../constants');

var PINS = constants.actions.PINS;
var BOARDS = constants.actions.BOARDS;

module.exports = {
  getPins: function(id) {
    var fields = 'image';
    api.get('boards/' + id + '/pins?fields=' + fields, function(data) {
      this.dispatch(PINS.GET_LIST, data);
    }.bind(this));
  },
  getBoards: function() {
    api.get('boards', function(data) {
      this.dispatch(BOARDS.GET_BOARDS, data);
    }.bind(this));
  }
};
