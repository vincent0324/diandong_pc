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
            focus2.init();
        }
    };

    var focus2 = {
        elements: {
            focusPage: $('.focus-pages span'),
            focusSlideItem: $('.focus-display-item'),
            focusPrev: $('.focus-ctrl-prev'),
            focusNext: $('.focus-ctrl-next'),
            focusDisplayBox: $('.focus-display'),
            focusImg: $('.focus-display-item img')
        },
        focusLength: 0,
        focusIndex: 0,
        focusTime: null,
        init: function() {
            this.initSlide();
            this.bindEvent();
        },
        bindEvent: function() {
            var context = this;

            $(document).on('click', '.focus-pages span', function(e) {
                var index = $('.focus-pages span').index(this);

                context.focusIndex = index;
                context.selectPage(index);
                context.selectItem(index);
            });

            this.elements.focusNext.on('click', function() {
                context.slideNext();
            });

            this.elements.focusPrev.on('click', function() {
                context.slidePrev();
            });

            this.elements.focusDisplayBox.on('mouseover', function() {
                clearInterval(context.focusTime);
            }).on('mouseout', function() {
                context.focusTime = setInterval(function() {
                    context.slideNext();
                }, 6000);
            });
        },
        initSlide: function() {
            var context = this;

            this.getFocusNum();
            this.focusTime = setInterval(function() {
                context.slideNext();
            }, 6000);
        },
        getFocusNum: function() {
            var length = this.elements.focusSlideItem.length;

            this.focusLength = length;
        },
        selectPage: function(index) {
            this.elements.focusPage.removeClass('current');
            this.elements.focusPage.eq(index).addClass('current');
        },
        selectItem: function(index) {
            this.elements.focusSlideItem.hide();
            this.elements.focusSlideItem.eq(index).fadeIn(900);
        },
        slidePrev: function() {
            var currentIndex = this.focusIndex;
            var currentLength = this.focusLength;

            if (currentIndex === 0) {
                this.onSlide(currentLength - 1);
                this.focusIndex = currentLength - 1;
            } else {
                this.onSlide(currentIndex - 1);
                this.focusIndex -= 1;
            }
        },
        slideNext: function() {
            var currentIndex = this.focusIndex;
            var currentLength = this.focusLength;

            if (currentIndex === (currentLength - 1)) {
                this.onSlide(0);
                this.focusIndex = 0;
            } else {
                this.onSlide(currentIndex + 1)
                this.focusIndex += 1;
            }
        },
        onSlide: function(index, callback) {
            this.selectPage(arguments[0]);
            this.selectItem(arguments[0]);
            !(arguments.length < 2) && arguments[1]();
        }
    };

    module.exports = Focus;
});
