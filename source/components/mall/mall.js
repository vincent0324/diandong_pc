define(function(require, exports, module) {

    var $ = require('jquery');
    var Area = require('area');
    var Swiper = require('swiper');
    var Countdown = require('countdown');

    require('./mall.css');

    var Mall = function() {
        this.init();
    };

    Mall.prototype = {

        cityListOfGuangZhou: [
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
        ],

        init: function() {
            this.initEventSwiper();
            this.initMallSwiper();
            this.getLocalNews();
            this.setCountdown();
            this.bindEvent();
        },

        bindEvent: function() {

            $('.event-slide-item').on('click', function() {
                var index = $('.event-slide-item').index(this);

                $('.event-slide-item').removeClass('current').eq(index).addClass('current');
                // $('.event-box-item').addClass('fn-hide').eq(index).removeClass('fn-hide');
                $('.event-box-item').hide().eq(index).fadeIn();
            });
        },

        initEventSwiper: function() {
            var eventSwiper = new Swiper('.event-container', {
                wrapperClass: 'event-wrapper',
                slideClass: 'event-slide',
                slidesPerView: 3,
                // autoplay: 3000,
                // speed: 1000,
                // loop: true,
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
        },

        initMallSwiper: function() {
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
        },

        getLocalNews: function() {
            var context = this;

            Area.init(function() {
                var areaIndex = Area.id.substring(0, 2);

                if (areaIndex === '44') {
                    $('.mall-local-item').addClass('fn-hide');

                    if (context.cityListOfGuangZhou.join('').indexOf(Area.id) >= 0) {
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
        },

        setCountdown: function() {
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

    module.exports = Mall;
});
