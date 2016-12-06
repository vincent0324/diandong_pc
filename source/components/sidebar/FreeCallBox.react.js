var React = require('react');
var $ = require('jquery');
var Tip = require('tip');

var FreeCallBox = React.createClass({

    getInitialState: function() {
        return {showBox: false, defaultPhoneValue: ''};
    },

    toggleBox: function() {
        this.setState({
            showBox: !this.state.showBox
        });
    },

    handleChange: function(event) {
        this.setState({defaultPhoneValue: event.target.value});
    },

    handleSubmit: function() {
        if (this.phoneInput.value === '') {
            Tip.info('请输入手机号码或座机号码');
        } else {
            this.sendFreeCallRequest = $.ajax({
                url: 'http://mall.diandong.com/api/autoCall/',
                data: {
                    mobile: this.phoneInput.value
                },
                type: 'GET',
                dataType: 'jsonp',
                success: function(result) {
                    Tip.success('客服稍后将电话联系您');
                    this.setState({showBox: false});
                }.bind(this)
            });
        }
    },

    componentWillUnmount: function() {
        this.sendFreeCallRequest.abort();
    },

    render: function() {

        if (this.state.showBox) {
            return (
                <div>
                    <a className="sidebar-item-btn sidebar-btn-tel open" onClick={this.toggleBox}>
                        <span className="sidebar-btn-icon">
                            <i className="icon">&#xe612;</i>
                            <em>免费电话</em>
                        </span>
                    </a>
                    <div className="sidebar-tel-box">
                        <input type="text" className="tel-box-phone" placeholder="填写手机号，座机加区号" ref={(ref) => this.phoneInput = ref} value={this.state.defaultPhoneValue} onChange={this.handleChange}/>
                        <a className="tel-box-submit" href="javascript:;" onClick={this.handleSubmit}>免费咨询</a>
                        <i className="tel-box-corner"></i>
                        <a className="tel-box-close" href="javascript:;" onClick={this.toggleBox}>
                            <i className="icon">&#xe601;</i>
                        </a>
                    </div>
                </div>
            );
        }

        return (
            <div>
                <a className="sidebar-item-btn sidebar-btn-tel" onClick={this.toggleBox}>
                    <span className="sidebar-btn-icon">
                        <i className="icon">&#xe612;</i>
                        <em>免费电话</em>
                    </span>
                </a>
            </div>
        );
    }
});

module.exports = FreeCallBox;
