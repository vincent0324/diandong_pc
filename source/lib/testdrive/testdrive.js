define(function(require, exports, module) {

    var $ = require('jquery');

    require('./testdrive.css');
    require('./pikaday.css');

    var drive,
        selectors,
        constants,
        wrapper = $('<div id="widget_testdrive_wrapper"></div>'),
        submitFlag = true,
        cSeconds,
        lSeconds,
        cNow,
        cDate,
        nowDate,
        tip = require('tip'),
        area = require('area'),
        dialog = require('dialog'),
        pikaday = require('./pikaday'),
        Carselect = require('carselect'),
        Cityselect = require('cityselect');

    constants = {
        MOBILE_REG: /^1\d{10}$/,
        OPTION_JXS: '<option value="0">选择经销商</option>',
        API_JXS: 'http://car.diandong.com/api/getJXSByCityCxid/',
        API_SUBMIT: "http://mall.diandong.com/order/pre_order/"
    };

    selectors = {
        wrapper: '#widget_testdrive_wrapper',
        drivebox: '.JS_drive_box',
        mask: '.JS_drive_mask',
        form: '.JS_drive_form',
        activityid: '.JS_activityid',
        brand: '.JS_drive_brand',
        series: '.JS_drive_series',
        model: '.JS_drive_model',
        name: '.JS_drive_name',
        mobile: '.JS_drive_mobile',
        province: '.JS_drive_province',
        city: '.JS_drive_city',
        jxs: '.JS_drive_jxs',
        date: '.JS_drive_date',
        hour: '.JS_drive_hour',
        car: '.JS_drive_car',
        shuttle: '.JS_drive_shuttle',
        carwords: '.JS_drive_carwords',
        addrbox: '.JS_drive_addrbox',
        addr: '.JS_drive_addr',
        submitbtn: '.JS_drive_submitbtn',
        close: '.JS_drive_close',
        reapply: '.widget-testdrive-reapply',
        errorbox: '.con-sale-remind'
    };

    var driveHtml = [
        '<div class="widget-testdrive-mask JS_drive_mask"></div>',
        '<div class="widget-testdrive JS_drive_box">',
        '<header>',
        '<h3>预约免费试驾</h3>',
        '</header>',
        '<form class="widget-testdrive-form JS_drive_form">',
        '<input type="hidden" name="pid" value=0>',
        '<input class="JS_activityid" type="hidden" name="prid" value=0>',
        '<dl class="widget-testdrive-selectcar">',
        '<dt>',
        '<span class="widget-testdrive-required">*</span>',
        '<span>请先选择车型：</span>',
        '</dt>',
        '<dd>',
        '<select class="JS_drive_brand" name="brand"><option value=0>选择品牌</option></select>',
        '<select class="JS_drive_series" name="cxid"><option value=0>选择车系</option></select>',
        '<select class="JS_drive_model" name="pzid"><option value=0>选择车型</option></select>',
        '</dd>',
        '</dl>',
        '<table class="widget-testdrive-table">',
        '<tbody>',
        '<tr>',
        '<td class="widget-testdrive-ltd">',
        '<span class="widget-testdrive-required">*</span>',
        '<label>姓名：</label>',
        '</td>',
        '<td class="widget-testdrive-rtd">',
        '<input class="widget-testdrive-text JS_drive_name" type="text" name="name" maxlength=30>',
        '</td>',
        '</tr>',
        '<tr>',
        '<td class="widget-testdrive-ltd">',
        '<span class="widget-testdrive-required">*</span>',
        '<label>手机：</label>',
        '</td>',
        '<td class="widget-testdrive-rtd ">',
        '<input class="widget-testdrive-text JS_drive_mobile" type="text" name="mobile" maxlength=11>',
        '</td>',
        '</tr>',
        '<tr>',
        '<td class="widget-testdrive-ltd">',
        '<span class="widget-testdrive-required">*</span>',
        '<label>城市：</label>',
        '</td>',
        '<td class="widget-testdrive-rtd widget-testdrive-citybox">',
        '<select class="JS_drive_province" name="province"><option value=0>选择省份</option></select>',
        '<select class="JS_drive_city" name="city"><option value=0>选择城市</option></select>',
        '</td>',
        '</tr>',
        '<tr>',
        '<td class="widget-testdrive-ltd">',
        '<span class="widget-testdrive-required">*</span>',
        '<label>经销商：</label>',
        '</td>',
        '<td class="widget-testdrive-rtd ">',
        '<select name="jxsid" class="widget-testdrive-select-jxs JS_drive_jxs"><option value=0>选择经销商</option></select>',
        '</td>',
        '</tr>',
        '<tr>',
        '<td class="widget-testdrive-ltd">',
        '<span class="widget-testdrive-required">*</span>',
        '<label>试驾时间：</label>',
        '</td>',
        '<td class="widget-testdrive-rtd">',
        '<span class="widget-testdrive-datebox">',
        '<input class="JS_drive_date" type="text" name="drive_date" readonly placeholder="时间">',
        '<i class="widget-testdrive-date-icon"></i>',
        '</span>',
        '<select class="widget-testdrive-hour JS_drive_hour" name="drive_time">',
        '<option value="09">09</option>',
        '<option value="10">10</option>',
        '<option value="11">11</option>',
        '<option value="12">12</option>',
        '<option value="13">13</option>',
        '<option value="14">14</option>',
        '<option value="15">15</option>',
        '<option value="16">16</option>',
        '<option value="17">17</option>',
        '</select>',
        '<span>时</span>',
        // '<span class="JS_drive_car">',
        // '<input id="testdrive_shuttle" class="JS_drive_shuttle" type="checkbox" name="pick_up" value=1>',
        // '<label for="testdrive_shuttle">免费专车接驾</label>',
        // '</span>',
        // '<span class="testdrive_car_words JS_drive_carwords fn-hide">【6月5日】之后可为您提供免费专车服务</span>',
        '</td>',
        '</tr>',
        '<tr class="JS_drive_addrbox fn-hide">',
        '<td class="widget-testdrive-ltd">',
        '<label for="testdrive_addr">出发地点：</label>',
        '</td>',
        '<td class="widget-testdrive-rtd">',
        '<input class="widget-testdrive-text JS_drive_addr" type="text" name="addr" maxlength=30>',
        '</td>',
        '</tr>',
        '</tbody>',
        '</table>',
        '<div class="widget-testdrive-submit">',
        '<button class="widget-testdrive-submitbtn JS_drive_submitbtn">提交</button>',
        '</div>',
        '</form>',
        '<button class="widget-testdrive-close JS_drive_close"></button>',
        '</div>'
    ].join('');

    var successHtml = [
        '<button class="con-remind-close j-close-dialog"></button>',
        '<div class="widget-testdrive-success-center clearfix">',
        '<div class="widget-testdrive-successicon"></div>',
        '<div class="widget-testdrive-successwords">',
        '<p class="widget-testdrive-congratulations">恭喜您！预约试驾成功</p>',
        '<p>电动邦客服人员会尽快与您取得联系，</p>',
        '<p>您也可以致电咨询：<span>4000-990-666</span></p>',
        '</div>',
        '</div>',
        '<div class="con-remind-ensurebox"><button class="con-remind-ensure j-close-dialog">确认</button></div>'
    ].join('');

    var errorHtml = [
        '<button class="con-remind-close j-close-dialog"></button>',
        '<div class="widget-testdrive-error-center clearfix">',
        '<div class="widget-testdrive-erroricon"></div>',
        '<div class="widget-testdrive-errorwords">',
        '<p class="widget-testdrive-fail">抱歉！提交失败</p>',
        '<p>详情可致电：<span>4000-990-666</span></p>',
        '</div>',
        '</div>',
        '<div class="con-remind-ensurebox"><button class="con-remind-ensure widget-testdrive-reapply">重新申请</button></div>'
    ].join('');

    drive = {
        init: function(parent) {
            var carselect,
                cityselect,
                picker;

            picker = this.createCalendar(parent);
            carselect = this.createCarselect(parent);
            cityselect = this.createCityselect(parent);
            this.initCity(cityselect);
            this.initJXS(parent);
            carselect.initCar(0, 0, 0);
            this.bindEvent(parent, picker);
        },
        show: function(brand, series, model, activityId) {
            var cityselect,
                picker;

            this.brand = brand
                ? parseInt(brand)
                : 0;
            this.series = series
                ? parseInt(series)
                : 0;
            this.model = model
                ? parseInt(model)
                : 0;
            this.activityId = activityId
                ? parseInt(activityId)
                : 0

            if ($(selectors.wrapper).length > 0) {
                wrapper.show();
            } else {
                this.createElements();
                picker = this.createCalendar(wrapper);
                this.carselect = this.createCarselect(wrapper);
                cityselect = this.createCityselect(wrapper);
                this.initCity(cityselect);
                this.bindEvent(wrapper, picker);
            }

            this.carselect.initCar(this.brand, this.series, this.model);
            this.initJXS(wrapper);
            this.setWrapperLocation();
            this.setActivityId();
            this.focusNameInput();
        },

        bindEvent: function(parent, picker) {
            var self = this,
                s = selectors;

            this.setPickerDate();

            $(s.shuttle, parent).on('change', function() {
                self.changeAddrDisplay.call(this, parent, picker);
            });
            $(s.date, parent).on('change', function() {
                self.checkDriveDate.call(this, parent);
            });

            $(s.close, parent).on('click', function() {
                parent.hide();
            });

            $(s.submitbtn, parent).on('click', function(e) {
                e.preventDefault();

                self.submitInfo(parent);
            });

            $(document.body).on('click', s.reapply, function() {
                self.reApplyTestdrive.call(this, parent);
            });

            $(s.series, parent).change(function() {
                self.setJXS(parent);
            });
            $(s.city, parent).change(function() {
                self.setJXS(parent);
            });
        },
        //jsonp请求
        request: function(url, callback) {
            $.ajax({url: url, type: 'get', dataType: 'jsonp', success: callback});
        },
        // 弹出试驾框时，姓名输入框自动获取焦点
        focusNameInput: function() {
            $(selectors.name, wrapper).focus();
        },
        // 设置活动id
        setActivityId: function() {
            $(selectors.activityid, wrapper).val(this.activityId);
        },
        // 设置试驾弹出框的位置
        setWrapperLocation: function() {
            var top = $(window).scrollTop() + ($(window).height() - $(selectors.drivebox, wrapper).height()) / 2;

            $(selectors.drivebox, wrapper).css({top: top});
        },
        // 设置经销商
        setJXS: function(parent) {
            var cityId = $(selectors.city, parent).val(),
                seriesId = $(selectors.series, parent).val();

            if (cityId == 0 || seriesId == 0) {
                $(selectors.jxs, parent).html(constants.OPTION_JXS);
                return;
            }

            this.getJXSData(parent, cityId, seriesId, true);
        },
        // 设置日历验证相关事件变量的值
        setPickerDate: function() {
            nowDate = new Date();

            nowDate.setHours(0);
            nowDate.setMinutes(0);
            nowDate.setSeconds(0);

            cSeconds = 24 * 60 * 60 * 1000;
            lSeconds = 3 * cSeconds;

            cNow = new Date().getTime();
            cDate = new Date().getTime() + lSeconds;
        },
        // 显示隐藏接驾地址
        changeAddrDisplay: function(parent, picker) {
            if (this.checked) {
                picker.setMinDate(cDate)
                $(selectors.addrbox, parent).show();
            } else {
                picker.setMinDate(cNow)
                $(selectors.addrbox, parent).hide();
            }
        },
        // 检查试驾时间
        checkDriveDate: function(parent) {
            var value = $(this).val(),
                date = new Date(value),
                dDate = new Date(cDate + cSeconds),
                month = dDate.getMonth() + 1,
                day = dDate.getDate();

            if (date.getTime() < cDate) {
                $(selectors.carwords, parent).html('【' + month + '月' + day + '日】之后可为您提供免费专车服务').show();
                $(selectors.car, parent).hide();
            } else {
                $(selectors.carwords, parent).hide();
                $(selectors.car, parent).show();
            }
        },
        // 提交试驾信息
        submitInfo: function(parent) {
            var s = selectors;

            if (!submitFlag) {
                submitFlag = false;
                return;
            }

            if ($(s.model, parent).val() == 0) {
                tip.info('请选择车型');
                return;
            }

            if ($(s.name, parent).val() == '') {
                tip.info('请填写姓名');
                return;
            }

            if (!constants.MOBILE_REG.test($(s.mobile, parent).val())) {
                tip.info('请输入正确的手机号码');
                return;
            }

            if ($(s.city, parent).val() == 0) {
                tip.info('请选择城市');
                return;
            }

            if ($(s.jxs, parent).val() == 0) {
                tip.info('请选择经销商');
                return;
            }

            if ($(s.date, parent).val() == 0) {
                tip.info('请选择试驾日期');
                return;
            }

            var value = $(s.date, parent).val(),
                date = new Date(value.substring(0, 4), parseInt(value.substring(5, 7)) - 1, value.substring(8, 10)),
                dDate = new Date(cDate + cSeconds),
                month = dDate.getMonth() + 1,
                day = dDate.getDate();

            if (date.getTime() < cDate && $(s.shuttle, parent)[0].checked) {
                tip.info('【' + month + '月' + day + '日】之后可为您提供免费专车服务');
                return;
            }

            $.ajax({
                url: constants.API_SUBMIT,
                dataType: 'jsonp',
                data: $(s.form, parent).serialize(),
                success: function(res) {
                    if (parent == wrapper) {
                        parent.hide();
                    }
                    if (res.state.err === false) {
                        dialog.show(successHtml, {
                            className: 'con-sale-remind',
                            hasCloseBtn: false
                        });
                    } else {
                        dialog.show(errorHtml, {
                            className: 'con-sale-remind',
                            hasCloseBtn: false
                        });
                    }
                    submitFlag = true;
                }
            });
        },
        // 创建预约试驾弹层
        createElements: function() {
            $(document.body).append(wrapper);
            wrapper.html($(driveHtml));
        },
        // 获取经销商数据
        getJXSData: function(parent, cityId, seriesId, isShowTips) {
            var self = this,
                url = constants.API_JXS + cityId + '/' + seriesId;
            if (!cityId || !seriesId) {
                return;
            }
            this.request(url, function(res) {
                var data = res.data;

                if (!data && isShowTips) {
                    tip.info('该城市暂无经销商');
                }

                self.createJXSElements(data, parent);
            })
        },
        // 创建经销商
        createJXSElements: function(data, parent) {
            var html = constants.OPTION_JXS;

            for (var i = 0; i < data.length; i++) {
                var obj = data[i],
                    option = '<option value="' + obj.jxsid + '">' + obj.addr + '</option>';
                html += option;
            }

            $(selectors.jxs, parent).html(html);
        },
        // 初始化经销商
        initJXS: function(parent) {
            var self = this,
                time;

            time = setTimeout(function() {
                var cityId = $(selectors.city, parent).val(),
                    seriesId = $(selectors.series, parent).val();

                if (cityId == 0 || seriesId == 0) {
                    clearTimeout(time);
                    self.initJXS(parent);
                    return;
                }
                self.getJXSData(parent, cityId, seriesId, false);
            }, 200);
        },
        // 重新预约试驾
        reApplyTestdrive: function(parent) {
            $(this).parents(selectors.errorbox).find(selectors.close).trigger('click');
            if (parent == wrapper) {
                parent.show();
            }
        },

        // 创建日历
        createCalendar: function(parent) {
            var date = new Date(),
                time = date.getTime(),
                picker;
            // 当天不能预约
            date.setTime(time + 24 * 60 * 60 * 1000);

            picker = new Pikaday({
                field: $(selectors.date, parent)[0],
                firstDay: 1,
                minDate: date,
                maxDate: new Date('2020-12-31'),
                yearRange: [2015, 2020]
            });

            return picker;
        },
        // 创建carselect
        createCarselect: function(parent) {
            var carselect = new Carselect({
                elements: {
                    brand: $(selectors.brand, parent),
                    series: $(selectors.series, parent),
                    model: $(selectors.model, parent)
                },
                status: 'onSale'
            });

            return carselect;

        },
        // 创建cityselect
        createCityselect: function(parent) {
            var cityselect = new Cityselect({
                elements: {
                    province: $(selectors.province, parent),
                    city: $(selectors.city, parent)
                }
            });

            return cityselect;
        },
        // 初始化城市
        initCity: function(cityselect) {
            area.init(function() {
                cityselect.initCity(area.id.substring(0, 2), area.id);
            });
        }
    }

    module.exports = drive;
});
