var React = require('react');

var FreeCallBox = React.createClass({

    render: function() {
        return (
            <div>
                <a className="sidebar-item-btn sidebar-btn-tel">
                    <span className="sidebar-btn-icon">
                        <i className="icon">&#xe612;</i>
                        <em>免费电话</em>
                    </span>
                </a>
                <div className="sidebar-tel-box">
                    <input type="text" className="tel-box-phone" placeholder="填写手机号，座机加区号"/>
                    <a className="tel-box-submit" href="javascript:;">免费咨询</a>
                    <i className="tel-box-corner"></i>
                    <a className="tel-box-close" href="javascript:;">
                        <i className="icon">&#xe601;</i>
                    </a>
                </div>
            </div>
        );
    }
});

module.exports = FreeCallBox;
