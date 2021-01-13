import React, {Component} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom'
import {Layout} from 'antd';

import LeftNav from "@/components/leftNav";
import Header from "@/components/header";
import Home from "../home/home";
import News from "../news/news";

const {Footer, Sider, Content} = Layout;

export default class Admin extends Component {
    render() {
        const user = JSON.parse(window.sessionStorage.getItem("user_key"));
        if (!user || !user.id) {
            return <Redirect to="/login"/>
        }

        return (
            <Layout style={{height: '100%'}}>
                <Sider>
                    <LeftNav/>
                </Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content style={{backgroundColor: '#fff', margin: '20px 20px 0'}}>
                        <Switch>
                            <Route exact={true} path="/admin/home" component={Home}/>
                            <Route exact={true} path="/admin/news" component={News}/>
                            <Redirect to="/admin/home"/>
                        </Switch>
                    </Content>
                    <Footer style={{textAlign: 'center', color: '#ccc'}}>
                        推荐使用谷歌浏览器，可以获得更佳的页面操作！
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}