/**
 * Pin Store
 */

var Fluxxor = require('fluxxor');

var constants = require('../constants');

var BOARDS = constants.actions.BOARDS;

var BoardStore = Fluxxor.createStore({
  initialize: function() {
    this.list = {};

    this.bindActions(
      BOARDS.GET_BOARDS, this.onFetchList
    );
  },

  onFetchList: function(payload) {
    this.list = payload.data;
    this.emit('change');
  },

  getList: function() {
    return this.list;
  }
});

module.exports = BoardStore;
