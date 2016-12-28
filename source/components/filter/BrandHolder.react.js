var React = require('react');

var BrandHolder = React.createClass({

    getInitialState: function() {
        return {keyBox: this.props.hasKeyBox}
    },

    getBrandKeys: function() {
        var keyArray = [];

        for (var i in this.props.brands) {
            keyArray.push(i);
        }

        return keyArray;
    },

    handleKeyClick: function(event) {
        var keyValue = event.target.dataset.key;

        console.log(keyValue);
    },

    getBrandElement: function(brandId) {
        return (
            <a href="javascript:;" key={brandId} data-key={brandId} onClick={this.handleKeyClick}>{brandId}</a>
        );
    },

    render: function() {

        var keyHtml = this.getBrandKeys().map(this.getBrandElement);

        return (
            <div className={this.props.hasKeyBox
                ? "brand-list-holder"
                : "brand-list-holder fn-hide"}>
                <div className="brand-list-key">{keyHtml}</div>
                <div className="brand-list-value"></div>
            </div>
        );

    }
});

module.exports = BrandHolder;
