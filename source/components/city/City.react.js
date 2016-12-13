var React = require('react');
var $ = require('jquery');
var Cookie = require('cookie');

require('./city.css');

var City = React.createClass({

    getInitialState: function() {
        return {currentCity: '北京'}
    },

    getCurrentCityFromCookie: function() {

        if (!!Cookie.get('cityName')) {
            return true;
        }

        return false;
    },

    componentDidMount: function() {

        if (this.getCurrentCityFromCookie()) {
            this.setState({currentCity: Cookie.get('cityName')});
        } else {
            this.getCurrentCityRequest = $.ajax({
                url: 'http://car.diandong.com/api/get_local',
                data: {},
                dataType: 'jsonp',
                type: 'POST',
                success: function(result) {
                    this.setState({currentCity: result.data.city});
                    Cookie.set('cityName', result.data.city);
                    Cookie.set('cityId', result.data.code);
                }.bind(this)
            });
        }
    },

    componentWillUnmount: function() {
        this.getCurrentCityRequest.abort();
    },

    render: function() {

        return (
            <div className="current-city">
                <i className="icon">&#xe659;</i>
                <a href="http://www.diandong.com/city/">{this.state.currentCity}</a>
            </div>
        );
    }
});

module.exports = City;
