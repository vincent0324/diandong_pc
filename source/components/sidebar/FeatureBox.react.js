// 为特殊活动预留的组件
import React from 'react';

// 特殊活动样式表
import './FeatureBox.css';

class FeatureBox extends React.Component {

    constructor() {
        super();

        this.state = {
            hasFeature: false
        }
    }

    render() {

        if (this.state.hasFeature) {
            return (
                <div>
                    // 这里填入临时加入的内容
                </div>
            );
        }

        return null;
    }
};

export default FeatureBox;
