define(function(require, exports, module) {

    var $ = require('jquery');

    require('./news.css');

    var News = function() {
        this.init();
    };

    News.prototype = {
        init: function() {
            this.bindEvent();
        },
        bindEvent: function() {
            $('.news-tab a').on('click', function() {
                var index = $('.news-tab a').index(this);
                console.log('111')

                $('.news-tab a').removeClass('current').eq(index).addClass('current');
                $('.news-tab-content').addClass('fn-hide').eq(index).removeClass('fn-hide');
            });

            $('.news-hot-tab a').on('mouseenter', function() {
                var index = $('.news-hot-tab a').index(this);

                $('.news-hot-tab a').removeClass('current').eq(index).addClass('current');
                $('.news-hot-tab-content').addClass('fn-hide').eq(index).removeClass('fn-hide');
            });
        }
    };

    module.exports = News;
});
