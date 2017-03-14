import $ from 'jquery';
import Area from 'area';
import Swiper from 'swiper';
import Countdown from 'countdown';

import './mall.css';

const cityListOfGuangZhou = [
    '4401',
    '4406',
    '4418',
    '4402',
    '4412',
    '4407',
    '4420',
    '4404',
    '4453',
    '4417',
    '4409',
    '4408',
    '4410'
];

class Mall {

    constructor() {
        this.init();
    }

    init() {
        this.initEventSwiper();
        this.initMallSwiper();
        this.getLocalNews();
        this.setCountdown();
        this.bindEvent();
    }

    bindEvent() {

        $('.event-slide-item').on('click', function() {
            var index = $('.event-slide-item').index(this);

            $('.event-slide-item').removeClass('current').eq(index).addClass('current');
            $('.event-box-item').hide().eq(index).fadeIn();
        });
    }

    initEventSwiper() {
        var eventSlides = $('.event-slide');

        if (eventSlides.length <= 3) {
            $('.event-ctrl').addClass('fn-hide');
        }

        var eventSwiper = new Swiper('.event-container', {
            wrapperClass: 'event-wrapper',
            slideClass: 'event-slide',
            slidesPerView: 3,
            mode: 'vertical'
        });

        $('.event-ctrl-prev').on('click', function(e) {
            e.preventDefault();
            eventSwiper.swipePrev();
        });

        $('.event-ctrl-next').on('click', function(e) {
            e.preventDefault();
            eventSwiper.swipeNext();
        });
    }

    initMallSwiper() {
        var mallSwiper = new Swiper('.mall-container', {
            wrapperClass: 'mall-wrapper',
            slideClass: 'mall-slide',
            slidesPerView: 4,
            paginationClickable: true,
            // autoplay: 3000,
            // speed: 1000,
            loop: true
            // mode: 'vertical'
        });

        $('.mall-swiper-prev').on('click', function(e) {
            e.preventDefault();
            mallSwiper.swipePrev();
        });

        $('.mall-swiper-next').on('click', function(e) {
            e.preventDefault();
            mallSwiper.swipeNext();
        });
    }

    getLocalNews() {
        var context = this;

        Area.init(function() {
            var areaIndex = Area.id.substring(0, 2);

            if (areaIndex === '44') {
                $('.mall-local-item').addClass('fn-hide');

                if (cityListOfGuangZhou.join('').indexOf(Area.id) >= 0) {
                    $('.mall-local-item-guangzhou').removeClass('fn-hide');
                    $('.mall-local-city').html('广州');
                } else {
                    $('.mall-local-item-shenzhen').removeClass('fn-hide');
                    $('.mall-local-city').html('深圳');
                }
            } else {
                $('.mall-local-item').addClass('fn-hide');
                $('.mall-local-item-beijing').removeClass('fn-hide');
                $('.mall-local-city').html('北京');
            }
        });
    }

    setCountdown() {
        var now = new Date().getTime();

        $('.event-countdown').each(function(index) {
            var day = $(this).find('span').eq(0),
                hour = $(this).find('span').eq(1),
                minute = $(this).find('span').eq(2),
                second = $(this).find('span').eq(3),
                endTime = parseInt($(this).data('endtime'));

            if (!endTime) {
                return;
            } else if (endTime > now) {
                var cd = new Countdown({
                    elements: {
                        day: day,
                        hour: hour,
                        minute: minute,
                        second: second
                    },
                    now: now,
                    end: endTime
                });
            } else {
                $(this).html('该活动已结束');
            }
        });

        $('.mall-item-countdown').each(function(index) {
            var day = $(this).find('span').eq(0),
                hour = $(this).find('span').eq(1),
                minute = $(this).find('span').eq(2),
                second = $(this).find('span').eq(3),
                endTime = parseInt($(this).data('endtime'));

            if (!endTime) {
                return;
            } else if (endTime > now) {
                var cd = new Countdown({
                    elements: {
                        day: day,
                        hour: hour,
                        minute: minute,
                        second: second
                    },
                    now: now,
                    end: endTime
                });
            } else {
                $(this).html('该活动已结束');
            }
        });
    }
};

export default Mall;
