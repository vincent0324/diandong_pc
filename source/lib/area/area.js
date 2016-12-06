define(function(require, exports, module) {

    'use strict';

    var Cookie, area;

    Cookie = require('Cookie');

    area = {
        id: '',
        name: '',
        init: function(callback) {
            this.getCityId();
            this.getCityName();
            callback && callback();
        },
        getCityId: function() {
            if (Cookie.get('cityId')) {
                this.id = Cookie.get('cityId');
            }
        },
        getCityName: function() {
            if (Cookie.get('cityName')) {
                this.name = Cookie.get('cityName');
            }
        }
    };

    module.exports = area;
});
