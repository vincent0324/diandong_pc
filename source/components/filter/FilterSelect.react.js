var React = require('react');

require('./FilterSelect.css');

var testdrive = require('testdrive');

var FilterSelect = React.createClass({

    componentDidMount: function() {



        testdrive.show(0,0,0,0);
    },

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
