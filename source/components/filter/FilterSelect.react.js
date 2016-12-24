var React = require('react');

require('./FilterSelect.css');

var FilterSelect = React.createClass({

    render: function() {
        return (
            <div id="filter-select" className="filter-select">
                <div className="filter-select-bar"></div>
                <div className="filter-select-button"></div>
            </div>
        );
    }
});

module.exports = FilterSelect;
