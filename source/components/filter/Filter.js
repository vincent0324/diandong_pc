define(function(require, exports, module) {

    var $ = require('jquery');

    var Filter = function() {
        this.init();
    };

    Filter.prototype = {

        init: function() {
            this.bindEvent();
        },

        bindEvent: function() {
            $('.filter-tab-list a').on('click', function() {
                var index = $('.filter-tab-list a').index(this);

                $('.filter-tab-list a').removeClass('current').eq(index).addClass('current');
                $('.filter-box-tabcon').addClass('fn-hide').eq(index).removeClass('fn-hide');
            });
        }
    };

    module.exports = Filter;
});
