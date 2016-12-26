define(function(require, exports, module) {

    var $ = require('jquery');

    var api = {
        onSale: {
            CARBRAND: "http://mall.diandong.com/api/listData/saleBrand",
            CARSERIES: "http://mall.diandong.com/api/listData/saleSeries/",
            CARTYPE: "http://mall.diandong.com/api/listData/saleModel/"
        },
        onProduct: {
            CARBRAND: "http://car.diandong.com/api/listData/brand",
            CARSERIES: "http://car.diandong.com/api/listData/series_product_status/",
            CARTYPE: "http://car.diandong.com/api/listData/model/"
        },
        all: {
            CARBRAND: "http://car.diandong.com/api/listData/brand",
            CARSERIES: "http://car.diandong.com/api/listData/series/",
            CARTYPE: "http://car.diandong.com/api/listData/model/"
        }
    };

    var constants = {
        BRAND_OPTION: '<option value="0">品牌</option>',
        SEIRES_OPTION: '<option value="0">车型</option>',
        MODEL_OPTION: '<option value="0">配置</option>'
    };

    var Carselect = function(options) {
        this.options = $.extend({
            status: 'all'
        }, options);

        this.api = api[this.options.status];

        this.initSelect();
        this.bindEvent();
    };

    Carselect.prototype = {
        bindEvent: function() {
            var self = this,
                brandEle = this.options.elements.brand,
                seriesEle = this.options.elements.series,
                modelEle = this.options.elements.model;

            brandEle.on('change', function() {
                var id = this.value;

                modelEle.html(constants.MODEL_OPTION);
                self.getSeries(id);
            });

            seriesEle.on('change', function(event) {
                var id = this.value;

                modelEle.html(constants.MODEL_OPTION);
                self.getModel(id);
            });

            modelEle.on('change', function() {
                var id = this.value;

                self.options.complete && self.options.complete(id);
            });
        },
        initSelect: function() {
            var brandEle = this.options.elements.brand,
                seriesEle = this.options.elements.series,
                modelEle = this.options.elements.model;

            brandEle.html(constants.BRAND_OPTION);
            seriesEle.html(constants.SEIRES_OPTION);
            modelEle.html(constants.MODEL_OPTION);
        },
        //jsonp请求
        request: function(url, callback) {
            $.ajax({url: url, type: 'get', dataType: 'jsonp', success: callback});
        },
        // 初始化赋值
        initCar: function(brand, series, model, result) {
            var brandEle = this.options.elements.brand || 0,
                seriesEle = this.options.elements.series || 0,
                modelEle = this.options.elements.model || 0,
                self = this;

            if (brandEle.children().length > 1) {
                setInitValue();
            } else {
                this.getBrands(setInitValue);
            }

            function setInitValue() {
                brandEle.val(brand);
                self.getSeries(brand, function() {
                    seriesEle.val(series);
                    self.getModel(series, function() {
                        modelEle.val(model);
                        result && result(model);
                    });
                });
            }

        },
        //获取品牌数据
        getBrands: function(result) {
            var self = this,
                brand = this.options.elements.brand;

            this.request(this.api.CARBRAND, function(res) {

                if (res.state.err === false) {
                    var data = res.data;
                    var html = self.createBrandsElements(data);

                    brand.html(html);
                    result && result();
                }
            });
        },
        //生成品牌元素 return {string}
        createBrandsElements: function(obj) {
            var array = [],
                html = constants.BRAND_OPTION;

            for (var p in obj) {
                var arr = obj[p];
                for (var i = 0; i < arr.length; i++) {
                    var data = arr[i],
                        id = data.ppid,
                        name = data.name,
                        option = '<option value=' + id + '>' + p + '-' + name + '</option>';

                    html += option;
                }
            }

            return html;
        },
        //获取车系数据
        getSeries: function(id, result) {

            var self = this,
                url = this.api.CARSERIES + id,
                series = this.options.elements.series;

            this.request(url, function(res) {
                if (res.state.err === false) {
                    var data = res.data;
                    var html = self.createSeriesElements(data);

                    series.html(html);
                    result && result();
                }
            });
        },
        // 生成车系元素 return {string}
        createSeriesElements: function(arr) {
            var html = constants.SEIRES_OPTION;

            for (var i = 0, len = arr.length; i < len; i++) {
                var data = arr[i],
                    id = data.cxid,
                    name = data.name,
                    text = '<option value=' + id + '>' + name + '</option>';
                html += text;
            }
            return html;
        },
        // 获取车型数据
        getModel: function(id, result) {
            var self = this,
                url = this.api.CARTYPE + id,
                model = this.options.elements.model;

            if (id == 0) {
                self.createTypeElements([]);
                return;
            }

            this.request(url, function(res) {
                if (res.state.err === false) {
                    var data = res.data;
                    var html = self.createTypeElements(data);
                    model.html(html);
                    result && result();
                }
            });
        },
        // 生成车型元素 return {string}
        createTypeElements: function(arr) {
            var html = constants.MODEL_OPTION;

            for (var i = 0, len = arr.length; i < len; i++) {
                var data = arr[i],
                    id = data.pzid,
                    name = data.name,
                    nk = data.niankuan
                        ? data.niankuan + '款 '
                        : '',
                    text = '<option value=' + id + '>' + nk + name + '</option>';
                html += text;
            }
            return html;
        }
    };

    module.exports = Carselect;
});
