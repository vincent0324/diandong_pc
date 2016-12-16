require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');

var React = require('react');
var ReactDOM = require('react-dom');
var Service = require('./Service.react');

ReactDOM.render(<Service/>, document.getElementById('service-holder'));
