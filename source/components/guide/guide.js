define(function(require, exports, module) {

    var $ = require('jquery');
    var Swiper = require('swiper');

    require('./guide.css');

    var Guide = function() {
        this.init();
    };

    Guide.prototype = {
        init: function() {
            this.guideSwiper();
            this.bindEvent();
        },
        bindEvent: function() {

            $('.filter-sub-tab a').on('mouseenter', function() {
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
        },
        guideSwiper: function() {
            var guideSwiper = new Swiper('.guide-photo-container', {
                loop: true,
                grabCursor: true,
                // autoplay: 5000,
                autoplayDisableOnInteraction: false,
                wrapperClass: 'guide-photo-wrapper',
                slideClass: 'guide-photo-slide',
                pagination: '.guide-photo-pages',
                paginationClickable: true
            });

            $('.guide-photo-prev').on('click', function(e) {
                e.preventDefault();
                guideSwiper.swipePrev();
            });

            $('.guide-photo-next').on('click', function(e) {
                e.preventDefault();
                guideSwiper.swipeNext();
            });
        }
    };

    module.exports = Guide;
});
