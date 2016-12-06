var React = require('react');
var $ = require('jquery');
var FreeCallBox = require('./FreeCallBox.react');
var FeatureBox = require('./FeatureBox.react');

require('./sidebar.css');

var Sidebar = React.createClass({

    showTip: function(event) {
        var self = $(event.currentTarget);
        var tips = self.find('.sidebar-btn-tip');

        this.timeId = setTimeout(function() {
            self.addClass('current');
            tips.removeClass('fn-hide').animate({
                "opacity": "1",
                "right": "35px"
            }, 300);
        }, 200);
    },

    hideTip: function(event) {
        var self = $(event.currentTarget);
        var tips = self.find('.sidebar-btn-tip');

        clearTimeout(this.timeId);
        self.removeClass('current');
        tips.animate({
            "opacity": "0",
            "right": "60px"
        }, 300, function() {
            tips.addClass('fn-hide');
        });
    },

    render: function() {
        return (
            <aside className="sidebar">

                <div className="sidebar-list">
                    <div className="sidebar-item"></div>
                    <div className="sidebar-item">
                        <FreeCallBox/>
                    </div>
                    <div className="sidebar-item">
                        <a className="sidebar-item-btn sidebar-btn-qq" onMouseEnter={this.showTip} onMouseLeave={this.hideTip} href="tencent://message/?Menu=yes&uin=938019143&Service=58&SigT=A7F6FEA02730C98868EC87757405B3FEF7655FBDDA3827926D5FC22562019102A7E9D695F530488CD97E33BB8E5F0C4D0659D2B15C7DD2F1A5517545E4EE6BFEA2D7AB4474840F44719CEA51A425F0843EBFF2B89F74384492B7DB116445090A57BD3CABE112A9BD173EA19CBD1B7D264F36825042EA793C&SigU=30E5D5233A443AB2762EDC5C8895C6A09E304824AE0379333725659FC7A908A773DDE60D3455EC2F5606D316E280230BF4D6DC8C7D72C51288789C689C72ABEC9974505AF04CF398">
                            <span className="sidebar-btn-icon">
                                <i className="icon">&#xe627;</i>
                            </span>
                            <span className="sidebar-btn-tip fn-hide">在线咨询</span>
                        </a>
                    </div>
                    <div className="sidebar-item">
                        <a className="sidebar-item-btn sidebar-btn-hotline" onMouseEnter={this.showTip} onMouseLeave={this.hideTip} href="javascript:;">
                            <span className="sidebar-btn-icon">
                                <i className="icon">&#xe634;</i>
                            </span>
                            <span className="sidebar-btn-tip fn-hide">4000-990-666</span>
                        </a>
                    </div>
                    <div className="sidebar-item">
                        <a className="sidebar-item-btn sidebar-btn-feedback" onMouseEnter={this.showTip} onMouseLeave={this.hideTip} href="http://app.diandong.com/?app=guestbook&controller=index">
                            <span className="sidebar-btn-icon">
                                <i className="icon">&#xe632;</i>
                            </span>
                            <span className="sidebar-btn-tip fn-hide">意见反馈</span>
                        </a>
                    </div>
                </div>

                <div className="sidebar-footer">
                    <div className="sidebar-item">
                        <a className="sidebar-item-btn sidebar-btn-code" onMouseEnter={this.showTip} onMouseLeave={this.hideTip} href="javascript:;">
                            <span className="sidebar-btn-icon">
                                <i className="icon">&#xe628;</i>
                            </span>
                            <span className="sidebar-btn-tip fn-hide">
                                <span className="sidebar-code-image"></span>
                                <em>关注电动邦官方微信</em>
                            </span>
                        </a>
                    </div>
                    <div className="sidebar-item">
                        <a className="sidebar-item-btn sidebar-btn-top" onMouseEnter={this.showTip} onMouseLeave={this.hideTip} href="javascript:;">
                            <span className="sidebar-btn-icon">
                                <i className="icon">&#xe605;</i>
                            </span>
                            <span className="sidebar-btn-tip fn-hide">返回顶部</span>
                        </a>
                    </div>
                </div>

            </aside>
        );
    }
});

module.exports = Sidebar;
