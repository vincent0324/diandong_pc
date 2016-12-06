var React = require('react');
var $ = require('jquery');

var Topbar = React.createClass({

    componentDidMount: function() {
        $('.topbar').slideDown();
    },

    render: function() {
        return (
            <div className="topbar">
                <div className="wrap"></div>
            </div>
        );
    }
});

module.exports = Topbar;
