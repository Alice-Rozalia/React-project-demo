import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
import { PieChartOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons'
import { Redirect, Route, Switch, Link } from 'react-router-dom'
import Publish from './article/Publish'
import Header from '../components/Header'
import ArticleList from './article/List'
import '../styles/admin.less'

const { Content, Footer, Sider } = Layout
const { SubMenu } = Menu

function Admin() {
  const [collapsed, setCollapsed] = useState(false)

  const onCollapse = collapsed => {
    setCollapsed(collapsed)
  }

  const user = window.sessionStorage.getItem('kuro')

  return user ? (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo"/>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined/>}>
            <Link to="/">工作台</Link>
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined/>} title="文章管理">
            <Menu.Item key="1"><Link to="/article">文章列表</Link></Menu.Item>
            <Menu.Item key="20"><Link to="/tag">标签列表</Link></Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined/>} title="项目管理">
            <Menu.Item key="3"><Link to="/project">项目列表</Link></Menu.Item>
            <Menu.Item key="4"><Link to="/project">添加项目</Link></Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<TeamOutlined/>} title="留言管理">
            <Menu.Item key="5"><Link to="/project">留言列表</Link></Menu.Item>
          </SubMenu>
          <Menu.Item key="60" icon={<PieChartOutlined/>}>
            <Link to="/project">日志管理</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header/>
        <Content style={{ backgroundColor: '#fff', margin: '20px 20px 0' }}>
          <div style={{ padding: 24, minHeight: 360 }}>
            <Switch>
              <Route exact={true} path="/" component={Publish}/>
              <Route exact={true} path="/article" component={ArticleList}/>
              <Redirect to="/"/>
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center', color: '#ccc' }}>博客管理系统 ©2021 白鸟亦悲否？</Footer>
      </Layout>
    </Layout>
  ) : <Redirect to="/login"/>
}

export default Admin
