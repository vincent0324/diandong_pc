var React = require('react');

require('./feature.css');

var Feature = React.createClass({

    render: function() {
        return (
            <div id="feature" className="feature">
                <div className="wrap">
                    <ul className="feature-list clearfix">
                        <li className="feature-base-price">
                            <i></i>
                            <dl className="feature-text">
                                <dt>底价承诺</dt>
                                <dd>全国最具竞争力价格承诺</dd>
                            </dl>
                        </li>
                        <li className="feature-new">
                            <i></i>
                            <dl className="feature-text">
                                <dt>正品新车</dt>
                                <dd>所有车源均为当地4S店新车</dd>
                            </dl>
                        </li>
                        <li className="feature-special">
                            <i></i>
                            <dl className="feature-text">
                                <dt>多品牌试驾</dt>
                                <dd>多品牌车型一次试个够</dd>
                            </dl>
                        </li>
                        <li className="feature-manager">
                            <i></i>
                            <dl className="feature-text">
                                <dt>购车管家</dt>
                                <dd>全程陪同，避开消费陷阱</dd>
                            </dl>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
});

module.exports = Feature;
