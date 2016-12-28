var React = require('react');

var SeriesList = React.createClass({

    render: function() {
        return (
            <div className="filter-series-list fn-right">
                <a className="filter-select-button" href="javascript:;">
                    <span>选择车系</span>
                    <i className="icon">&#xe60d;</i>
                </a>
            </div>
        );
    }
});

module.exports = SeriesList;
