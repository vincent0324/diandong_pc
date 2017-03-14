import $ from 'jquery';

import './filter.css';

class Filter {

    constructor() {
        this.init();
    }

    init() {
        this.bindEvent();
    }

    bindEvent() {
        $('.filter-tab-list a').on('mouseenter', function() {
            var index = $('.filter-tab-list a').index(this);

            $('.filter-tab-list a').removeClass('current').eq(index).addClass('current');
            $('.filter-box-tabcon').addClass('fn-hide').eq(index).removeClass('fn-hide');
        });
    }
};

export default Filter;
