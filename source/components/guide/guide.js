define(function(require, exports, module) {

    var $ = require('jquery');

    // require('./guide.css');

    var Guide = function() {
        this.init();
    };

    Guide.prototype = {
        init: function() {
            this.bindEvent();
        },
        bindEvent: function() {

            $('.filter-sub-tab a').on('click', function() {
                var index = $(this).parent('.filter-sub-tab').find('a').index(this);
                var tabContent = $(this).parents('.filter-sub-tab').siblings('.filter-sub-tabcon');

                $(this).addClass('current').siblings('a').removeClass('current');
                tabContent.addClass('fn-hide').eq(index).removeClass('fn-hide');
            });

            $('.filter-super-tab a').on('click', function() {
                var index = $(this).parent('.filter-super-tab').find('a').index(this);
                var tabContent = $(this).parents('.filter-super-tab').siblings('.filter-super-tabcon');

                $(this).addClass('current').siblings('a').removeClass('current');
                tabContent.addClass('fn-hide').eq(index).removeClass('fn-hide');
            });
        }
    };

    module.exports = Guide;
});
