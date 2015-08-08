/**
 * @file React component for Collection
 */

var _ = require('lodash');
var React = require('react');

var constants = require('../constants');

var Collection = React.createClass({
  displayName: 'Collection',
  propTypes: {
    pinList: React.PropTypes.array
  },
  render: function() {
    var collection = _.map(this.props.pinList, function(pin) {
      return <article key={pin.id}>
        <a className="thumbnail" href={pin.image.original.url} data-position="left center">
          <img src={pin.image.original.url} alt="" />
        </a>
        <h2>{pin.note}</h2>
        <a href="https://www.facebook.com/">Facebook</a>
      </article>;
    });

    return (
      <div id="main">
          <header id="header">
            <h1>Big Hero</h1>
            <p>The oppotunity to improve yourself</p>
            <ul className="icons">
              <li><a href="https://www.facebook.com/" target="_blank" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
              <li><a href="https://www.twitter.com/" target="_blank" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
              <li><a href="https://github.com/duytonghai/big-hero" target="_blank" className="icon fa-github"><span className="label">Github</span></a></li>
            </ul>
          </header>

          <section id="thumbnails">{collection}</section>

          <footer id="footer">
            <ul className="copyright">
              <li>Developed by Big Hero Storm Team</li>
              <li>Designed by <a href="http://html5up.net">HTML5 UP</a></li>
            </ul>
          </footer>
      </div>
    );
  }
});

module.exports = Collection;
