var React = require('react');

// 为特殊活动预留的组件
require('./FeatureBox.css');

var FeatureBox = React.createClass({

    getInitialState: function() {
        return {hasFeature: false};
    },

    render: function() {

        if (this.state.hasFeature) {
            return (
                <div>
                    // 这里填入临时加入的内容
                </div>
            );
        }

        return null;
    }
});

module.exports = FeatureBox;
