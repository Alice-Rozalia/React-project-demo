import React, {Component} from 'react';
import {Form, Input, Button, message} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import {Redirect} from 'react-router-dom'

import './login.less'
import logo from '@/assets/images/login.jpg'

import {loginApi} from "@/api/login";

export default class Login extends Component {

    onFinish = async value => {
        const {data} = await loginApi(value);
        if (data.success) {
            message.success("登录成功！");
            window.sessionStorage.setItem("user_key", JSON.stringify(data.data.user));
            window.sessionStorage.setItem("token", data.data.token);
            this.props.history.replace("/admin");
        }
    };

    render() {
        const user = JSON.parse(window.sessionStorage.getItem("user_key"));
        if (user && user.id) {
            return <Redirect to="/admin" />
        }

        return (
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt="logo"/>
                    <h1>React期末实训：新闻发布</h1>
                </header>
                <section className="login-content">
                    <h2>后台登录</h2>
                    <Form
                        name="normal_login"
                        className="login-form"
                        onFinish={this.onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: '用户名不能为空！'
                                },
                                {
                                    min: 2,
                                    max: 15,
                                    message: '长度在2-15位之间！'
                                },
                                {
                                    pattern: /^[a-zA-Z0-9_]+$/,
                                    message: '用户名只能由数字、字母和下划线组成！'
                                }
                            ]}
                        >
                            <Input autoComplete="off" prefix={<UserOutlined style={{color: 'rgba(0,0,0,.25)'}}/>}
                                   placeholder="用户名"/>
                        </Form.Item>
                        <Form.Item
                            name="pwd"
                            rules={[
                                {
                                    required: true,
                                    message: '密码不能为空！'
                                },
                                {
                                    min: 4,
                                    max: 20,
                                    message: '长度在4-20位之间！'
                                },
                                {
                                    pattern: /^[a-zA-Z0-9_]+$/,
                                    message: '密码只能由数字、字母和下划线组成！'
                                }
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined style={{color: 'rgba(0,0,0,.25)'}}/>}
                                type="password"
                                placeholder="密码"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        );
    }
}
