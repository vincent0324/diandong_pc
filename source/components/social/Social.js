define(function(require, exports, module) {

    var $ = require('jquery');
    var Swiper = require('swiper');

    require('./social.css');

    var Social = function() {
        this.init();
    };

    Social.prototype = {

        init: function() {
            this.initSocialSwiper();
            this.initFriendSwiper();
        },

        initSocialSwiper: function() {
            var socialSwiper = new Swiper('.social-container', {
                loop: true,
                grabCursor: true,
                autoplay: 5000,
                autoplayDisableOnInteraction: false,
                wrapperClass: 'social-wrapper',
                slideClass: 'social-slide',
                pagination: '.social-pages',
                paginationClickable: true
            });
        },

        initFriendSwiper: function() {
            var friendSwiper = new Swiper('.friend-container', {
                loop: true,
                grabCursor: true,
                slidesPerView: 3,
                autoplayDisableOnInteraction: false,
                wrapperClass: 'friend-wrapper',
                slideClass: 'friend-slide'
            });

            $('.friend-ctrl-prev').on('click', function(e) {
                e.preventDefault();
                friendSwiper.swipePrev();
            });

            $('.friend-ctrl-next').on('click', function(e) {
                e.preventDefault();
                friendSwiper.swipeNext();
            });
        }
    };

    module.exports = Social;
});
