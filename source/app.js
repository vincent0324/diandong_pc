require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');

var React = require('react');
var ReactDOM = require('react-dom');

require('./css/home.css');


// header
require('./components/header/header.css');
var City = require('./components/city/City.react');
var UserPanel = require('./components/header/UserPanel.react');
var Search = require('./components/search/Search.react');

ReactDOM.render(<City />, document.getElementById('city-holder'));
ReactDOM.render(<UserPanel />, document.getElementById('user-holder'));
ReactDOM.render(<Search />, document.getElementById('search-holder'));

// nav
require('./components/nav/nav.css');


// focus
var Focus = require('./components/focus/focus');
var focus = new Focus();

// news
var News = require('./components/news/news');
var news = new News();
