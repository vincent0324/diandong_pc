var React = require('react');
var $ = require('jquery');

var BrandHolder = React.createClass({

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

    componentDidMount: function() {
        var context = this;

        this.getBrandListRequest = $.ajax({
            url: 'http://car.diandong.com/api/get_pinpai_list',
            data: {},
            dataType: 'jsonp',
            type: 'GET',
            success: function(result) {
                var brands = result.data;
                var brandElementHtml = '';

                for (var j in brands) {
                    brandElementHtml += '<div class="brand-list-box">';
                    for (var k = 0; k < brands[j].length; k++) {
                        brandElementHtml += '<a class="brand-list-element" href="javascript:;" data-brand="' + brands[j][k].ppid + '">' + brands[j][k].name + '</a>'
                    }
                    brandElementHtml += '</div>';
                }

                $('.brand-list-value').html(brandElementHtml);
            }.bind(this)
        });

        $(document).on('click', '.brand-list-element', function() {
            context.setState({key: $(this).html()});
        });
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
