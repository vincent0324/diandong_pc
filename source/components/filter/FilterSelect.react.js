var React = require('react');
var $ = require('jquery');
var BrandList = require('./BrandList.react');
var SeriesList = require('./SeriesList.react');

// require('./FilterSelect.css');

var FilterSelect = React.createClass({

    getInitialState: function() {
        return {brand: null, series: null, hasKeyBox: false};
    },

    toggleKeybox: function() {
        this.setState({
            hasKeyBox: !this.state.hasKeyBox
        });
    },

    componentWillMount: function() {
        $(document).on('click', function(e) {
            if ($(e.target).attr('id') !== 'filter-brand-list') {
                this.setState({hasKeyBox: false});
            }
        }.bind(this));
    },

    render: function() {
        return (
            <div id="filter-select" className="filter-select">
                <div className="filter-select-bar">
                    <BrandList hasKeyBox={this.state.hasKeyBox} handleClick={this.toggleKeybox}/>
                    <SeriesList series={this.state.series}/>
                </div>
                <div className="filter-select-tool">
                    <a className="filter-tool-button filter-tool-search" href="javascript:;">找车</a>
                    <a className="filter-tool-button filter-tool-price" href="javascript:;">询价</a>
                    <a className="filter-tool-button filter-tool-test" href="javascript:;">试驾</a>
                </div>
            </div>
        );
    }
});

module.exports = FilterSelect;
