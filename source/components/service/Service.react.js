import React from 'react';
import './service.css';

class Service extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div id="service" className="service wrap">
                <a className="service-item-helper" target="_blank" href="http://www.diandong.com/yaohao/">
                    <i></i>
                    <em>摇</em>
                    <span>摇号结果查询</span>
                </a>
                <a className="service-item-product" target="_blank" href="http://car.diandong.com/">
                    <i></i>
                    <em>找</em>
                    <span>最全新能源车型库</span>
                </a>
                <a className="service-item-test" target="_blank" href="http://www.diandong.com/tiyandian/">
                    <i></i>
                    <em>试</em>
                    <span>多品牌试驾，一次试个够</span>
                </a>
                <a className="service-item-mall" target="_blank" href="http://www.diandong.com/mall/">
                    <i></i>
                    <em>购</em>
                    <span>电动车特惠，24H不打烊</span>
                </a>
            </div>
        );
    }
};

export default Service;
