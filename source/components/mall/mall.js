define(function(require, exports, module) {

    var $ = require('jquery');
    var Swiper = require('swiper');
    var Countdown = require('countdown');

    var Mall = function() {
        this.init();
    };

    Mall.prototype = {
        init: function() {
            this.initEventSwiper();
            this.setCountdown();
            this.bindEvent();
        },
        bindEvent: function() {

            $('.event-slide-item').on('click', function() {
                var index = $('.event-slide-item').index(this);

                $('.event-slide-item').removeClass('current').eq(index).addClass('current');
                $('.event-box-item').addClass('fn-hide').eq(index).removeClass('fn-hide');
            });
        },
        initEventSwiper: function() {
            var eventSwiper = new Swiper('.event-container', {
                wrapperClass: 'event-wrapper',
                slideClass: 'event-slide',
                slidesPerView: 3,
                // autoplay: 3000,
                speed: 1000,
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
        }
    };

    module.exports = Mall;
});
