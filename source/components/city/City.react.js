var React = require('react');
var $ = require('jquery');
var Cookie = require('cookie');

require('./city.css');

var City = React.createClass({

    getInitialState: function() {
        return {currentCity: '北京'}
    },

    render: function() {

        return (
            <div className="current-city">
                <i className="icon">&#xe659;</i>
                <a>{this.state.currentCity}</a>
            </div>
        );
    }
});

module.exports = City;
