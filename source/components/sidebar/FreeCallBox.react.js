import React from 'react';
import $ from 'jquery';
import Tip from 'tip';

class FreeCallBox extends React.Component {

    constructor() {
        super();

        this.state = {
            showBox: false,
            defaultPhoneValue: ''
        };
    }

    toggleBox() {
        this.setState({
            showBox: !this.state.showBox
        });
    }

    handleChange(event) {
        this.setState({defaultPhoneValue: event.target.value});
    }

    handleSubmit() {
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
    }

    componentWillUnmount() {
        this.sendFreeCallRequest.abort();
    }

    render() {

        if (this.state.showBox) {
            return (
                <div>
                    <a className="sidebar-item-btn sidebar-btn-tel open" onClick={this.toggleBox.bind(this)}>
                        <span className="sidebar-btn-icon">
                            <i className="icon">&#xe612;</i>
                            <em>免费电话</em>
                        </span>
                    </a>
                    <div className="sidebar-tel-box">
                        <input type="text" className="tel-box-phone" placeholder="填写手机号，座机加区号" ref={(ref) => this.phoneInput = ref} value={this.state.defaultPhoneValue} onChange={this.handleChange.bind(this)}/>
                        <a className="tel-box-submit" href="javascript:;" onClick={this.handleSubmit.bind(this)}>免费咨询</a>
                        <i className="tel-box-corner"></i>
                        <a className="tel-box-close" href="javascript:;" onClick={this.toggleBox.bind(this)}>
                            <i className="icon">&#xe601;</i>
                        </a>
                    </div>
                </div>
            );
        }

        return (
            <div>
                <a className="sidebar-item-btn sidebar-btn-tel" onClick={this.toggleBox.bind(this)}>
                    <span className="sidebar-btn-icon">
                        <i className="icon">&#xe612;</i>
                        <em>免费电话</em>
                    </span>
                </a>
            </div>
        );
    }
};

export default FreeCallBox;
