import React, { useState } from 'react'
import { Form, Input, Button, Spin, Card, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { loginApi } from '../api/login'
import '../styles/login.less'

function Login(props) {
  const [isLoading, setIsLoading] = useState(false)

  const login = async value => {
    setIsLoading(true)
    const { data } = await loginApi(value)
    if (data.success) {
      window.sessionStorage.setItem('token', data.data.token)
      window.sessionStorage.setItem('kuro', 'kuro')
      setTimeout(() => {
        setIsLoading(false)
        message.success(data.message)
        props.history.replace("/")
      }, 500)
    }
    setIsLoading(false)
  }

  return (
    <div className="login-div">
      <Spin tip="加载中..." spinning={isLoading}>
        <Card title="白鸟亦悲否？—— 博客后台" bordered={true} style={{ width: 400 }}>
          <Form onFinish={login}>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: '用户名不能为空！'
                },
                {
                  min: 2,
                  max: 20,
                  message: '长度在2-20位之间！'
                }
              ]}
            >
              <Input prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }}/>} autoComplete="off"
                     placeholder="用户名"/>
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: '密码不能为空！'
                },
                {
                  min: 6,
                  max: 20,
                  message: '长度在6-20位之间！'
                }
              ]}
            >
              <Input.Password prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }}/>} placeholder="密码"/>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                登录
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Spin>
    </div>
  )
}


export default Login
