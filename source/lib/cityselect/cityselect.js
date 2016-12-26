define(function(require, exports, module) {

    var $ = require('jquery');

    var Cityselect,
        location = require('location'),
        PROVINCE_OPTION = '<option value="0">选择省份</option>',
        CITY_OPTION = '<option value="0">选择城市</option>';

    Cityselect = function(options) {
        this.options = $.extend({}, options);
        this.setProvince();
        this.bindEvent();
    };

    Cityselect.prototype = {
        bindEvent: function() {
            var provinceEle = this.options.elements.province,
                cityEle = this.options.elements.city,
                self = this;

            provinceEle.on('change', function() {
                var id = this.value;

                self.setCity(id);
            });

            cityEle.on('change', function() {
                var id = this.value;

                self.options.complete && this.options.complete(id);
            });
        },
        // 设置省
        setProvince: function() {
            var html = PROVINCE_OPTION;
            for (var p in location) {
                var option = '<option value=' + p + '>' + location[p].name + '</option>';
                html += option;
            }

            this.options.elements.province.html(html);
        },
        // 设置市
        setCity: function(pid) {
            var cities,
                html = CITY_OPTION;

            if (pid != 0) {
                cities = location[pid].cities;
                for (var p in cities) {
                    var option = '<option value=' + p + '>' + cities[p] + '</option>';
                    html += option;
                }
            }

            this.options.elements.city.html(html);
        },
        // 初始化城市
        initCity: function(provinceId, cityId) {
            this.options.elements.province.val(provinceId);
            this.setCity(provinceId);
            this.options.elements.city.val(cityId);
            this.options.complete && this.options.complete(cityId);
        }
    };

    module.exports = Cityselect;
});
