define(function(require, exports, module) {

    var $ = require('jquery');
    var mask = require('mask');

    require('./dialog.css');

    var dialog = {
        options: {
            width: '',
            height: '',
            className: '',
            title: '',
            hasMask: true,
            hasCloseBtn: true,
            onShow: null
        },
        elements: {
            dialog: $('<div class="widget-dialog"></div>'),
            title: $('<header class="widget-dialog-title"></header>'),
            closeBtn: $('<a href="javascript:;" class="widget-dialog-close-btn j-close-dialog"><i class="icon">&#xe601;</i></a>'),
            content: $('<div class="widget-dialog-content"></div>')
        },
        status: false,
        bindEvent: function() {
            var context = this;

            $(document).on('click', '.j-close-dialog', function() {
                context.hide();
            });
        },
        render: function(content, options) {
            var dialog = this.elements.dialog;

            this.hide();
            options.hasMask && mask.show({className: 'j-close-dialog'});
            options.title && this.elements.title.html(options.title).appendTo(dialog);
            options.hasCloseBtn && this.elements.closeBtn.appendTo(dialog);
            options.className && this.elements.dialog.addClass(options.className);
            this.elements.content.html(content).appendTo(dialog);
            dialog.appendTo(document.body);
        },
        show: function(content, options) {
            var cnt = content
                ? content
                : '';
            var opt = options
                ? $.extend({}, this.options, options)
                : this.options;

            this.render(cnt, opt);
            opt.width && this.elements.dialog.css('width', opt.width);
            opt.height && this.elements.dialog.css('height', opt.height);
            this.status = true;
            this.bindEvent();

            opt.onShow && opt.onShow();
        },
        hide: function(callback) {

            if (!this.status) {
                return;
            }
            this.elements.dialog.removeAttr('style').removeClass().addClass('widget-dialog').remove();
            mask.hide();
            this.status = false;
            callback && callback();
        }
    };

    module.exports = dialog;
});
