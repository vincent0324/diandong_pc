var Filter = require('./Filter');
var filter = new Filter();

var React = require('react');
var ReactDOM = require('react-dom');
var FilterSelect = require('./FilterSelect.react');

ReactDOM.render(<FilterSelect/>, document.getElementById('filter-select-holder'));
