import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {Button, Modal} from "antd";
import {dateFormat} from "@/utils/format"
import './index.less';

class Header extends Component {

    state = {
        currentTime: dateFormat(new Date())
    };

    getTime = () => {
        this.inter = setInterval(() => {
            const time = dateFormat(new Date());
            this.setState({currentTime: time})
        }, 1000)
    };

    getTitle = () => {
        const path = this.props.location.pathname;
        if (path === "/admin/home") {
            return "首页"
        } else if (path === "/admin/news") {
            return "新闻管理"
        }
    };

    logout = () => {
        Modal.confirm({
            content: "你确定要退出吗？",
            onOk: () => {
                window.sessionStorage.clear();
                this.props.history.replace("/login");
            },
            okText: "退出",
            cancelText: "取消"
        })
    };

    componentDidMount() {
        this.getTime();
    };

    componentWillUnmount() {
        clearInterval(this.inter);
    }

    render() {
        const user = JSON.parse(window.sessionStorage.getItem("user_key"));
        const title = this.getTitle();

        return (
            <div className="header">
                <div className="header-top">
                    <span>欢迎，{user.username}</span>
                    <Button type="link" onClick={this.logout}>退出</Button>
                </div>
                <div className="header-bottom">
                    <div className="header-bottom-left">{title}</div>
                    <div className="header-bottom-right">{this.state.currentTime}</div>
                </div>
            </div>
        );
    }
}

export default withRouter(Header);