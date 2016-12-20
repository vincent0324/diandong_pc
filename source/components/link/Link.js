define(function(require, exports, module) {

    var $ = require('jquery');

    var Link = function() {
        this.init();
    };

    Link.prototype = {
        init: function() {
            this.bindEvent();
        },
        bindEvent: function() {

            $('.link-tab-btn h4').on('click', function() {
                var index = $('.link-tab-btn h4').index(this);

                $('.link-tab-btn h4').removeClass('current').eq(index).addClass('current');
                $('.link-tab-content').addClass('fn-hide').eq(index).removeClass('fn-hide');
            });
        }
    };

    module.exports = Link;
});
