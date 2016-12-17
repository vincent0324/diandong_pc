/**
 * @desc 通用倒计时组件
 * @author sunyg <1169771179@qq.com>
 * @date 2015/11/02
 * @param options{ now: @number(倒计时开始时间,10位或13位时间戳), end: @number(倒计时结束时间,10位或13位时间戳),
 * @param millSecond: @boolean(是否开启毫秒倒计时<false>), complete: @function(倒计时结束回调) }
 */
define(function(require, exports, module) {

    var $ = require('jquery');

    var Countdown = function(options) {
        // 默认参数
        var defaults = {
            // 开始时间
            now: new Date().getTime(),
            // 结束时间
            end: new Date().getTime(),
            // 是否开启毫秒计时
            millSecond: false,
            // 回调
            complete: null
        };

        this.defaults = $.extend(true, defaults, options);
        // 将13位时间戳(毫秒)转化为10位(秒)
        if (this.defaults.now.toString().length == 13) {
            this.defaults.now = this.defaults.now / 1000;
        }

        if (this.defaults.end.toString().length == 13) {
            this.defaults.end = this.defaults.end / 1000;
        }
        // this.mseconds: 计时器时间间隔
        if (this.defaults.millSecond) {
            this.time = this.defaults.end * 10 - this.defaults.now * 10;
            this.mseconds = 100;
        } else {
            this.time = this.defaults.end - this.defaults.now;
            this.mseconds = 1000;
        }

        // 时间差<=0,倒计时结束
        if (this.time <= 0) {
            this.defaults.elements.day.html('00');
            this.defaults.elements.hour.html('00');
            this.defaults.elements.minute.html('00');
            this.defaults.elements.second.html('00');
            this.complete && this.complete();
            return;
        }

        this.init();
    }

    Countdown.prototype = {

        init: function() {
            this.beginCountDown();
        },

        countTime: function() {
            var days,
                hours,
                minutes,
                seconds;

            if (this.defaults.millSecond) {
                days = parseInt(this.time / 3600 / 10 / 24);
                hours = parseInt((this.time / 3600 / 10) % 24);
                minutes = parseInt((this.time / 60 / 10) % 60);
                seconds = parseFloat(this.time / 10 % 60 + '.' + this.time % 10).toFixed(1);
            } else {
                days = parseInt(this.time / 3600 / 24);
                hours = parseInt((this.time / 3600) % 24);
                minutes = parseInt((this.time / 60) % 60);
                seconds = parseInt(this.time % 60);
            }

            this.defaults.elements.day.html(this.format(days));
            this.defaults.elements.hour.html(this.format(hours));
            this.defaults.elements.minute.html(this.format(minutes));
            this.defaults.millSecond
                ? this.defaults.elements.second.html(seconds)
                : this.defaults.elements.second.html(this.format(seconds));

            if (this.time <= 0) {
                clearInterval(this.autoC);
                this.complete && this.complete();
            }

            this.time -= 1;
        },

        beginCountDown: function() {
            this.countTime();

            this.autoC = setInterval(this.bind(this, this.countTime), this.mseconds);
        },

        format: function(num) {
            return num < 10
                ? '0' + num
                : num;
        },

        bind: function(obj, handler) {
            return function() {
                return handler.apply(obj, arguments);
            }
        }
    }

    module.exports = Countdown;
});
