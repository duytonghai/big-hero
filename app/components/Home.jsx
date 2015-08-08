/**
 * @file React Home component
 */

var _ = require('lodash');
var React = require('react');
var Router = require('react-router');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;
var Link = Router.Link;

var constants = require('../constants');
var mainScript = require('../libs/main');

var Collection = require('./Collection');

var BIG_HERO_BOARD_ID = constants.values.BIG_HERO_BOARD_ID;

var Home = React.createClass({
  displayName: 'Home',
  mixins: [FluxMixin, StoreWatchMixin('PinStore')],
  getStateFromFlux: function() {
    var pinStore = this.getFlux().store('PinStore');

    return {
      pinList: pinStore.getList() || []
    };
  },
  componentDidMount: function() {
    if (!this.state.pinList.length) {
      this.getFlux().actions.getPins(BIG_HERO_BOARD_ID);
    }
  },
  componentDidUpdate: function(prevProps, prevState) {
    if (prevState.pinList.length !== this.state.pinList.length) {
      mainScript.init();
    }
  },
  render: function() {
    var display = <div />;
    var pinList = this.state.pinList;

    if (pinList.length > 0) {
      display = <Collection pinList={pinList} />
    }
    return display;
  }
});

module.exports = Home;
