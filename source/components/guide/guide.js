import $ from 'jquery';
import Swiper from 'swiper';

import './guide.css';

class Guide {

    constructor() {
        this.init();
    }

    init() {
        this.guideSwiper();
        this.bindEvent();
    }

    bindEvent() {

        $('.filter-sub-tab a').on('mouseenter', function() {
            let index = $(this).parent('.filter-sub-tab').find('a').index(this);
            let tabContent = $(this).parents('.filter-sub-tab').siblings('.filter-sub-tabcon');

            $(this).addClass('current').siblings('a').removeClass('current');
            tabContent.addClass('fn-hide').eq(index).removeClass('fn-hide');
        });

        $('.filter-super-tab a').on('click', function() {
            let index = $(this).parent('.filter-super-tab').find('a').index(this);
            let tabContent = $(this).parents('.filter-super-tab').siblings('.filter-super-tabcon');

            $(this).addClass('current').siblings('a').removeClass('current');
            tabContent.addClass('fn-hide').eq(index).removeClass('fn-hide');
        });
    }

    guideSwiper() {
        let guideSwiper = new Swiper('.guide-photo-container', {
            loop: true,
            grabCursor: true,
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

export default Guide;
