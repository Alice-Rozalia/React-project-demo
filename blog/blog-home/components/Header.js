import React from 'react'
import '../static/styles/components/header.css'
import { Row, Col, Menu, Icon } from 'antd'

const Header = () => (
  <div className="header">
    <Row type="flex" justify="center">
      <Col xs={24} sm={24} md={10} lg={15} xl={12} className="header-left">
        <img src="https://kuro-blog.oss-cn-guangzhou.aliyuncs.com/blog-img/logo5.png" alt="logo"
             className="header-logo"/>
        <span className="header-logo-text">白鸟亦悲否？</span>
      </Col>
      <Col xs={0} sm={0} md={14} lg={8} xl={6}>
        <Menu mode="horizontal">
          <Menu.Item>
            <Icon type="home"/>首页
          </Menu.Item>
          <Menu.Item>
            <Icon type="read"/>文章
          </Menu.Item>
          <Menu.Item>
            <Icon type="project"/>项目
          </Menu.Item>
        </Menu>
      </Col>
    </Row>
  </div>
)

export default Header
