var React = require('react');

var AppConstants = require('../constants/AppConstants');
var Navigate = require('./Navigate');

var Pages = AppConstants.Pages;

var Home = React.createClass({

  propTypes: {
    appState: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <div>
        <Navigate page={Pages.HELLO_NASHORN}>Go to Nashorn Schedule</Navigate>
        <h1>JavaOne</h1>
        <p>JavaOne is an annual conference inaugurated in 1996 by Sun Microsystems to discuss Java technologies, primarily among Java developers. JavaOne is held in San Francisco, California typically running from Monday to Thursday. Technical sessions on a variety of topics are held during the day. In the evening, Birds of a Feather (BOF) sessions are held. BOF sessions allow people to focus on a particular aspect of Java technology.</p>
      </div>
    );
  }
});

module.exports = Home;
