import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Button, Modal } from 'antd'
import { dateFormat } from '../utils/format'
import '../styles/header/header.less'

class Header extends Component {

  state = {
    currentTime: dateFormat(new Date())
  }

  getTime = () => {
    this.inter = setInterval(() => {
      const time = dateFormat(new Date())
      this.setState({ currentTime: time })
    }, 1000)
  }

  logout = () => {
    Modal.confirm({
      content: "你确定要退出吗？",
      onOk: () => {
        window.sessionStorage.clear()
        this.props.history.replace("/login")
      },
      okText: "退出",
      cancelText: "取消"
    })
  }

  componentDidMount() {
    this.getTime()
  };

  componentWillUnmount() {
    clearInterval(this.inter)
  }

  render() {
    return (
      <div className="header">
        <div className="header-top">
          <span>白鸟亦悲否？</span>
          <Button type="link" onClick={this.logout}>退出</Button>
        </div>
        <div className="header-bottom">
          <div className="header-bottom-left">工作台</div>
          <div className="header-bottom-right">{this.state.currentTime}</div>
        </div>
      </div>
    )
  }
}

export default withRouter(Header)
