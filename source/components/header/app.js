var React = require('react');
var ReactDOM = require('react-dom');
var City = require('../city/City.react');
var UserPanel = require('./UserPanel.react');

ReactDOM.render(<City />, document.getElementById('city-holder'));
ReactDOM.render(<UserPanel />, document.getElementById('user-holder'));
