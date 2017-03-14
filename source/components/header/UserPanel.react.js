import React from 'react';
import User from 'user';

import './UserPanel.css';

let user = new User();

class UserPanel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userId: null,
            userName: null,
            userAvatar: null,
            redirectUrl: null
        };
    }

    componentWillMount() {
        let currentRedirectUrl = 'http://passport.diandong.com/ark/login?redirect=' + location.href;

        this.setState({redirectUrl: currentRedirectUrl});

        if (user.id !== '') {
            this.setState({userId: user.id, userName: user.name, userAvatar: user.avatar});
        }
    }

    render() {

        if (this.state.userId) {
            return (
                <div className="user-panel">
                    <div className="user-panel-avatar no-background">
                        <img src={this.state.userAvatar}/>
                    </div>
                    <a href="http://passport.diandong.com/ark/baseinfo">{this.state.userName}</a>
                    <a href="http://passport.diandong.com/ark/logout">退出</a>
                </div>
            );
        }

        return (
            <div className="user-panel">
                <div className="user-panel-avatar"></div>
                <a href="http://passport.diandong.com/ark/login">登录</a>
                <a href="http://passport.diandong.com/ark/register/">注册</a>
            </div>
        );
    }
};

export default UserPanel;
