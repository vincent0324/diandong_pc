import $ from 'jquery';

import './link.css';

class Link {

    constructor() {
        this.init();
    }

    init() {
        this.bindEvent();
    }

    bindEvent() {
        $('.link-tab-btn h4').on('click', function() {
            var index = $('.link-tab-btn h4').index(this);

            $('.link-tab-btn h4').removeClass('current').eq(index).addClass('current');
            $('.link-tab-content').addClass('fn-hide').eq(index).removeClass('fn-hide');
        });
    }
};

export default Link;
