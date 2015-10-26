var React = require('react');

var AppConstants = require('../constants/AppConstants');
var Navigate = require('./Navigate');

var Pages = AppConstants.Pages;

var HelloNashorn = React.createClass({

  propTypes: {
    appState: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <div>
        <Navigate page={Pages.HOME}>Go to "home"</Navigate>
        <h1>Hello Nashorn!</h1>
        <ul>
            <li><a href="#">Isomorphic JavaScript with Nashorn [CON6933]</a></li>
            <li><a href="#">Nashorn: Advanced Topics [CON7205]</a></li>
            <li><a href="#">Nashorn: Making This Rhinoceros Thunder [CON3856]</a></li>
            <li><a href="#">Modern, Portable JavaScript Stored Procedures with Nashorn [CON4405]</a></li>
            <li><a href="#">Nashorn: The “42” for Startups and Enterprises [CON1850]</a></li>
            <li><a href="#">Taming the Nashorn to Rule the Smart Home [CON5375]</a></li>
            <li><a href="#">Build and Monitor Cloud PaaS with JVM’s Nashorn JavaScripts [CON1859]</a></li>
            <li><a href="#">Test Your Nashorn JavaScript with JUnit, Groovy Spock, Jasmine, and Mocha [CON2129]</a></li>
            <li><a href="#">Delivering Isomorphic Templating with Jahia’s Digital Factory [CON10866]</a></li>
            <li><a href="#">Nodyn and Vert.x: Running Distributed Node.js Apps in JVM Environments [CON2133]</a></li>
        </ul>
      </div>
    );
  }
});

module.exports = HelloNashorn;
