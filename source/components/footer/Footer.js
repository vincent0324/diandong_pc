import $ from 'jquery';
import './footer.css';

class Footer {

    constructor() {
        this.init();
    }

    init() {
        this.bindEvent();
    }

    bindEvent() {
        $('.footer-hotline i').on('mouseenter', function() {
            $('.code-overlay').removeClass('fn-hide');
        }).on('mouseleave', function() {
            $('.code-overlay').addClass('fn-hide');
        });
    }
};

export default Footer;
