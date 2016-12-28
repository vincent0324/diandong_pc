var React = require('react');
var $ = require('jquery');
var BrandHolder = require('./BrandHolder.react');

var BrandList = React.createClass({

    getInitialState: function() {
        return {brands: null};
    },

    componentWillMount: function() {
        this.getBrandListRequest = $.ajax({
            url: 'http://car.diandong.com/api/get_pinpai_list',
            data: {},
            dataType: 'jsonp',
            type: 'GET',
            success: function(result) {
                this.setState({brands: result.data});
            }.bind(this)
        });
    },

    componentWillUnmount: function() {
        this.getBrandListRequest.abort();
    },

    render: function() {
        return (
            <div className="filter-brand-list fn-left" id="filter-brand-list">
                <a className={this.props.hasKeyBox
                    ? "filter-select-button focus"
                    : 'filter-select-button'} href="javascript:;" onClick={this.props.handleClick}>
                    <span>选择品牌</span>
                    <i className="icon">&#xe60d;</i>
                </a>
                <BrandHolder brands={this.state.brands} hasKeyBox={this.props.hasKeyBox}/>
            </div>
        );
    }
});

module.exports = BrandList;
