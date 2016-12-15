define(function(require, exports, module) {

    var Swiper = require('swiper');
    require('./focus.css');

    var Focus = function() {
        this.init();
    };

    Focus.prototype = {
        init: function() {
            // console.log('home');
            this.initFocusSlide();
        },

        initFocusSlide: function() {
            var focusSwiper = new Swiper('.focus-container', {
                loop: true,
                grabCursor: true,
                // autoplay: 5000,
                autoplayDisableOnInteraction: false,
                wrapperClass: 'focus-wrapper',
                slideClass: 'focus-slide',
                pagination: '.focus-pages',
                paginationClickable: true
            });
        }
    };

    module.exports = Focus;
});
