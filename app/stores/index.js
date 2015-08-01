/**
 * Import and initialize stores
 */

var PinStore = require('./PinStore');
var BoardStore = require('./BoardStore');

module.exports = {
  PinStore: new PinStore(),
  BoardStore: new BoardStore()
};
