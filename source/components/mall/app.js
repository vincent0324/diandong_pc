var React = require('react');
var ReactDOM = require('react-dom');
var City = require('../city/City.react');

ReactDOM.render(<City/>, document.getElementById('mall-city-btn'));

var Mall = require('./Mall');
var mall = new Mall();
