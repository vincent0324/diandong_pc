define(function(require, exports, module) {

    var $ = require('jquery');
    var Swiper = require('swiper');

    require('./focus.css');

    var Focus = function() {
        this.init();
    };

    Focus.prototype = {
        init: function() {
            this.initFocusSlide();
        },

        initFocusSlide: function() {
            var focusSwiper = new Swiper('.focus-container', {
                loop: true,
                autoplay: 5000,
                paginationClickable: true,
                // effect: 'fade',
                // autoplayDisableOnInteraction: false,
                wrapperClass: 'focus-wrapper',
                slideClass: 'focus-slide',
                pagination: '.focus-pages'
            });

            $('.focus-ctrl-prev').on('click', function(e) {
                e.preventDefault();
                focusSwiper.swipePrev();
            });

            $('.focus-ctrl-next').on('click', function(e) {
                e.preventDefault();
                focusSwiper.swipeNext();
            });
        }
    };

    module.exports = Focus;
});
