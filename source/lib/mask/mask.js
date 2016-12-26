define(function(require, exports, module) {

    var $ = require('jquery');

    require('./mask.css');

    var mask = {
        options: {
            className: ''
        },
        element: $('<div></div>'),
        status: false,
        render: function(className) {
            this.element.removeClass().addClass('widget-mask');
            className && this.element.addClass(className);
            this.element.appendTo(document.body);
        },
        show: function(options) {
            var opt = options ? $.extend({}, this.options, options) : this.options;

            this.render(opt.className);
            this.element.show();
            this.status = true;
        },
        hide: function() {
            this.element.remove();
            this.status = false;
        }
    };

    module.exports = mask;
});
