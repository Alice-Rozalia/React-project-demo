import React from 'react'
import { Row, Col, Menu, Icon } from 'antd'
import Router from 'next/router'
import '../static/styles/components/header.css'

const Header = () => {
  const handleClick = e => {
    switch (e.key) {
      case "0":
        return Router.push('/')
      case "1":
        return Router.push('/list')
      default:
        return Router.push('/project')
    }
  }

  const link = [{ icon: 'home', name: '首页' }, { icon: 'read', name: '文章' }, { icon: 'project', name: '项目' }]

  return (
    <div className="header">
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={10} lg={15} xl={12} className="header-left">
          <img src="https://kuro-blog.oss-cn-guangzhou.aliyuncs.com/blog-img/logo5.png" alt="logo"
               className="header-logo"/>
          <span className="header-logo-text">白鸟亦悲否？</span>
        </Col>
        <Col xs={0} sm={0} md={14} lg={8} xl={6}>
          <Menu mode="horizontal" onClick={handleClick}>
            {
              link.map((item, index) => {
                return (
                  <Menu.Item key={index}>
                    <Icon type={item.icon}/>{item.name}
                  </Menu.Item>
                )
              })
            }
          </Menu>
        </Col>
      </Row>
    </div>
  )
}

export default Header
