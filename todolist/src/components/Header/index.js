import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import './index.css'

class Header extends Component {

  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  handleKeyUp = (e) => {
    const { keyCode, target } = e
    if (keyCode !== 13) return
    if (target.value.trim() === '') {
      alert('输入不能为空！')
      return
    }
    const todo = { id: nanoid(), name: target.value, done: false }
    this.props.addTodo(todo)
    target.value = ''
  }

  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
      </div>
    )
  }
}

export default Header
