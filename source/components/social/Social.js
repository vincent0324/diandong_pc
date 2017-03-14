import $ from 'jquery';
import Swiper from 'swiper';

import './social.css';

class Social {

    constructor() {
        this.init();
    }

    init() {
        this.initSocialSwiper();
        this.initFriendSwiper();
    }

    initSocialSwiper() {
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
    }

    initFriendSwiper() {
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

export default Social;
