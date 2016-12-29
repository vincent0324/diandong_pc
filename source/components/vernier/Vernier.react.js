var React = require('react');
var $ = require('jquery');

require('./vernier.css');

var Vernier = React.createClass({

    componentDidMount: function() {
        var modules = [$('.news-holder'), $('.guide-holder'), $('.mall-holder'), $('.social-holder')];

        if (modules.length < 0) {
            return;
        }

        $(window).on('scroll', function() {
            var top = $(document).scrollTop(),
                i;

            if (top >= $(document).height() - $(window).height()) {
                i = modules.length - 1;
            } else {
                for (i = 0; i < modules.length; i++) {
                    if (top < (modules[i].offset().top - 50)) {
                        break;
                    }
                }
                i--;
                i = (i < 0)
                    ? 0
                    : i;
            }

            $('.vernier a.current').removeClass('current');
            $('.vernier a').eq(i).addClass('current');
        });

        $(document).on('click', '.vernier a', function(e) {

            if ($('.vernier').hasClass('disabled')) {
                return;
            }

            var elementClass = $(e.currentTarget).data('vernier');
            var elementTop = $('.' + elementClass).offset().top;

            $('html,body').stop().animate({
                "scrollTop": (elementTop - 0) + "px"
            }, 400);
        });

        $(window).on('scroll', function() {
            var top = $(document).scrollTop();

            if (top > $('.news-holder').offset().top - 0) {
                $('.vernier').removeClass('disabled');
                $('.vernier').css({"opacity": "1", "transform": "scale(1)"});
            } else {
                $('.vernier').addClass('disabled');
                $('.vernier').css({"opacity": "0", "transform": "scale(1.2)"});
            }
        });
    },

    render: function() {
        return (
            <div id="vernier" className="vernier">
                <a href="javascript:;" className="vernier-news" data-vernier="news-holder"></a>
                <a href="javascript:;" className="vernier-guide" data-vernier="guide-holder"></a>
                <a href="javascript:;" className="vernier-mall" data-vernier="mall-holder"></a>
                <a href="javascript:;" className="vernier-social" data-vernier="social-holder"></a>
            </div>
        );
    }
});

module.exports = Vernier;
