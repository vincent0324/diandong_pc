import $ from 'jquery';
import './news.css';

class News {

    constructor() {
        this.init();
    }

    init() {
        this.bindEvent();
    }

    bindEvent() {
        $('.news-tab a').on('click', function() {
            var index = $('.news-tab a').index(this);

            $('.news-tab a').removeClass('current').eq(index).addClass('current');
            $('.news-tab-content').addClass('fn-hide').eq(index).removeClass('fn-hide');
        });

        $('.news-hot-tab a').on('mouseenter', function() {
            var index = $('.news-hot-tab a').index(this);

            $('.news-hot-tab a').removeClass('current').eq(index).addClass('current');
            $('.news-hot-tab-content').addClass('fn-hide').eq(index).removeClass('fn-hide');
        });
    }
};

export default News;
