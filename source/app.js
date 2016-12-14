var React = require('react');
var ReactDOM = require('react-dom');


// header
require('./components/header/header.css');
var City = require('./components/city/City.react');
var UserPanel = require('./components/header/UserPanel.react');

ReactDOM.render(<City />, document.getElementById('city-holder'));
ReactDOM.render(<UserPanel />, document.getElementById('user-holder'));

// nav
require('./components/nav/nav.css');
