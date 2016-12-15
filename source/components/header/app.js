var React = require('react');
var ReactDOM = require('react-dom');
var City = require('../city/City.react');
var UserPanel = require('./UserPanel.react');
var Search = require('../search/Search.react');

ReactDOM.render(<City />, document.getElementById('city-holder'));
ReactDOM.render(<UserPanel />, document.getElementById('user-holder'));
ReactDOM.render(<Search/>, document.getElementById('search-holder'));
