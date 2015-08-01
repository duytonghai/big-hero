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

var Home = React.createClass({
  displayName: 'Home',
  mixins: [FluxMixin, StoreWatchMixin('PinStore', 'BoardStore')],
  getStateFromFlux: function() {
    var pinStore = this.getFlux().store('PinStore');
    var boardStore = this.getFlux().store('BoardStore');

    return {
      pinList: pinStore.getList(),
      boardList: boardStore.getList()
    };
  },
  componentDidMount: function() {
    if (_.isEmpty(this.state.boardList)) {
      this.getFlux().actions.getBoards();
    }
  },
  selectBoard: function(e) {
    var boardId = e.target.value;
    this.getFlux().actions.getPins(boardId);
  },
  render: function() {
    var display, select;
    var pinList = this.state.pinList;
    var boardList = this.state.boardList;

    if(boardList.length > 0) {
      select = <select onChange={this.selectBoard}>
          <option key="default">Select</option>
          {
            _.map(boardList, function(board) {
              return <option key={board.id} value={board.id}>{board.name}</option>;
            })
          }
        </select>
    }

    if (pinList.length > 0) {
      display = _.map(pinList, function(pin) {
        return <div key={pin.id}><img src={pin.image.original.url} /></div>;
      });
    }

    return (
      <div>
        Home<br />
        <Link to={constants.routeNames.ABOUT_PAGE}>About</Link><br />
        {select}
        {display}
      </div>
    );
  }
});

module.exports = Home;
