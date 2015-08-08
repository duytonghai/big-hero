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

componentWillMount: function() {
  (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.4&appId=1044498398907793";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
},

  render: function() {
    var collection = _.map(this.props.pinList, function(pin) {
      return <article key={pin.id}>
        <a className="thumbnail" href={pin.image.original.url} data-position="left center">
          <img src={pin.image.original.url} alt="" />
        </a>
        <h2>{pin.note}</h2>
      </article>;
    });

    return (
      <div id="main">
          <header id="header">
            <h1>Big Hero</h1>
            <p>The oppotunity to improve yourself</p>
            <ul className="icons">
              <li><div className="fb-share-button" data-href="http://big-hero.com:8000" data-layout="button"></div></li>
            </ul>
          </header>

          <section id="thumbnails">{collection}</section>

          <footer id="footer">
            <ul className="copyright">
              <li>Developed by Big Hero Storm Team</li>
              <li>Designed by <a href="http://html5up.net">HTML5 UP</a></li>
            </ul>
            <ul className="icons">
              <li><a href="https://www.pinterest.com/haiduytong/big-hero/" target="_blank" className="icon fa-pinterest"><span className="label">Twitter</span></a></li>
              <li><a href="https://github.com/duytonghai/big-hero" target="_blank" className="icon fa-github"><span className="label">Github</span></a></li>
            </ul>
          </footer>
      </div>
    );
  }
});

module.exports = Collection;
