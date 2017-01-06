define(function(require, exports, module) {

    var testdrive = require('testdrive');
    var tip = require('tip');

    var F = function() {
        this.init();
    };

    F.prototype = {

        brand: '',
        series: '',

        init: function() {
            this.renderDOM();
            this.render();
            this.bindEvent();
        },

        bindEvent: function() {

            var context = this;

            // 显示品牌列表
            $('#filter-brand-button').on('click', function(e) {
                $('#filter-brand-button').toggleClass('focus');
                $('.brand-list-holder').toggleClass('fn-hide');
            });

            // 点击字母
            $(document).on('click', '.brand-list-key a', function(e) {

                if ($(this).hasClass('current')) {
                    return;
                } else {
                    var key = $(this).data('key');
                    var top = $('.brand-element-' + key).position().top;
                    $(this).addClass('current').siblings('a').removeClass('current');
                    $('.brand-list-value').scrollTop(top);
                }
            });

            // 点击品牌
            $(document).on('click', '.brand-list-element', function(e) {
                var brandName = $(this).html();
                var ppid = $(this).data('brand');
                var seriesHtml = '';

                $('.filter-brand-list .filter-select-button span').html(brandName);
                $('.filter-select-button').removeClass('focus');
                $('.brand-list-holder').addClass('fn-hide');

                context.brand = ppid;

                $.ajax({
                    url: 'http://car.diandong.com/api/get_chexi_list/' + ppid,
                    data: {},
                    dataType: 'jsonp',
                    type: 'GET',
                    success: function(result) {
                        for (var k = 0; k < result.data.length; k++) {
                            seriesHtml += '<a href="javascript:;" data-series="' + result.data[k].cxid + '">' + result.data[k].name + '</a>';
                        }

                        $('.series-list-holder').removeClass('fn-hide').html(seriesHtml);
                        $('#filter-series-button').addClass('focus');
                    }
                });
            });

            // 点击series
            $(document).on('click', '.series-list-holder a', function() {
                var cxid = $(this).data('series');
                var name = $(this).html();

                $('.series-list-holder').addClass('fn-hide');
                $('#filter-series-button').removeClass('focus');
                $('#filter-series-button span').html(name);

                context.series = cxid;
            });

            // 找车
            $(document).on('click', '.filter-tool-search', function() {
                if (context.series !== '') {
                    window.open('http://car.diandong.com/chexi/index/' + context.series);
                } else {
                    tip.info('请选择车系');
                }
            });

            // 试驾
            $(document).on('click', '.filter-tool-test', function() {
                if (context.series !== '') {
                    testdrive.show(context.brand, context.series, 0, 0);
                } else {
                    tip.info('请选择车系');
                }
            });

            //
            $(document).on('click', '#filter-series-button', function() {
                if (context.series !== '') {
                    $('.series-list-holder').toggleClass('fn-hide');
                    $('#filter-series-button').toggleClass('focus');
                } else {
                    tip.info('请选择品牌');
                }
            });
        },

        renderDOM: function() {
            var filterHtml = [
                '<div id="filter-select" class="filter-select">',
                '<div class="filter-select-bar">',
                '<div class="filter-brand-list fn-left" id="filter-brand-list">',
                '<a id="filter-brand-button" class="filter-select-button" href="javascript:;">',
                '<span>选择品牌</span>',
                '<i class="icon close-state">&#xe60d;</i>',
                '<i class="icon open-state">&#xe60c;</i>',
                '</a>',
                '<div class="brand-list-holder fn-hide">',
                '<div class="brand-list-key"></div>',
                '<div class="brand-list-value"></div>',
                '</div>',
                '</div>',
                '<div class="filter-series-list fn-right">',
                '<a id="filter-series-button" class="filter-select-button" href="javascript:;">',
                '<span>选择车系</span>',
                '<i class="icon close-state">&#xe60d;</i>',
                '<i class="icon open-state">&#xe60c;</i>',
                '</a>',
                '<div class="series-list-holder fn-hide"></div>',
                '</div>',
                '</div>',
                '<div class="filter-select-tool clearfix">',
                '<div class="filter-button-list">',
                '<a class="filter-tool-button filter-tool-search" href="javascript:;">找车</a>',
                '<a class="filter-tool-button filter-tool-price" href="http://www.diandong.com/tiyandian/" target="_blank">询价</a>',
                '<a class="filter-tool-button filter-tool-test" href="javascript:;">试驾</a>',
                '</div>',
                '</div>',
                '</div>'
            ].join('');

            $('.filter-select-holder').html(filterHtml);
        },

        render: function() {
            var keyHtml = '';
            var brandHtml = '';

            $.ajax({
                url: 'http://car.diandong.com/api/get_pinpai_list',
                data: {},
                dataType: 'jsonp',
                type: 'GET',
                success: function(result) {
                    for (var i in result.data) {
                        keyHtml += '<a href="javascript:;" data-key="' + i + '">' + i + '</a>';
                        brandHtml += '<div class="brand-list-box brand-element-' + i + '">';

                        for (var j in result.data[i]) {
                            brandHtml += '<a href="javascript:;" class="brand-list-element" data-brand="' + result.data[i][j].ppid + '">' + result.data[i][j].name + '</a>';
                        }

                        brandHtml += '</div>';
                    }

                    $('.brand-list-key').html(keyHtml);
                    $('.brand-list-value').html(brandHtml);

                    var keyLength = $('.brand-list-key a').length;
                    $('.brand-list-value').css('height', keyLength * 18);
                }
            });
        }
    };

    module.exports = F;
});
