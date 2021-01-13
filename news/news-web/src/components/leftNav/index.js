import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";
import {Menu} from 'antd';
import {HomeOutlined, FormOutlined,} from '@ant-design/icons';

import './index.less';
import logo from '@/assets/images/login.jpg'

class LeftNav extends Component {
    render() {
        // 获取当前请求的路由路径
        const path = this.props.location.pathname;

        return (
            <div className="left-nav">
                <Link to="/admin" className="left-nav-header">
                    <img src={logo} alt="logo"/>
                    <h1>新闻发布</h1>
                </Link>
                <Menu
                    defaultSelectedKeys={[path]}
                    mode="inline"
                    theme="dark"
                >
                    <Menu.Item key="/admin/home" icon={<HomeOutlined/>}>
                        <Link to="/admin/home">首页</Link>
                    </Menu.Item>
                    <Menu.Item key="/admin/news" icon={<FormOutlined/>}>
                        <Link to="/admin/news">新闻管理</Link>
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}

export default withRouter(LeftNav);
