/**
 * Pin Store
 */

var Fluxxor = require('fluxxor');

var constants = require('../constants');

var PIN_ACTIONS = constants.actions.PINS;

var PinStore = Fluxxor.createStore({
  initialize: function() {
    this.pinList = [];

    this.bindActions(
      PIN_ACTIONS.GET_LIST, this.onFetchPinList
    );
  },

  onFetchPinList: function(payload) {
    this.pinList = payload.data;
    this.emit('change');
  },

  getList: function() {
    return this.pinList;
  }
});

module.exports = PinStore;
