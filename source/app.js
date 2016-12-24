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


// filter
var Filter = require('./components/filter/Filter');
var filter = new Filter();

var FilterSelect = require('./components/filter/FilterSelect.react');

ReactDOM.render(<FilterSelect/>, document.getElementById('filter-select-holder'));


// focus
var Focus = require('./components/focus/focus');
var focus = new Focus();


// service
var Service = require('./components/service/Service.react');

ReactDOM.render(<Service/>, document.getElementById('service-holder'));


// news
var News = require('./components/news/news');
var news = new News();


// guide
var Guide = require('./components/guide/guide');
var guide = new Guide();



// mall
ReactDOM.render(<City/>, document.getElementById('mall-city-btn'));

var Mall = require('./components/mall/Mall');
var mall = new Mall();


// social
var Social = require('./components/social/Social');
var social = new Social();



// feature
var Feature = require('./components/feature/Feature.react');

ReactDOM.render(<Feature/>, document.getElementById('feature-holder'));


// link
var Link = require('./components/link/Link');
var link = new Link();



// footer
var Footer = require('./components/footer/Footer');
var footer = new Footer();
