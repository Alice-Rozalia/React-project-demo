import React, { Component } from 'react'
import './index.css'

class Footer extends Component {

  handleCheckAll = e => {
    this.props.checkAllTodo(e.target.checked)
  }

  handleClearAll = () => {
    this.props.clearAllDone()
  }

  render() {
    const { todos } = this.props
    const doneCount = todos.reduce((pre, todo) => {
      return pre + (todo.done ? 1 : 0)
    }, 0)
    const total = todos.length

    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" onChange={this.handleCheckAll}
                 checked={doneCount === total && total !== 0 ? true : false}/>
        </label>
        <span><span>已完成{doneCount}</span> / 全部{total}</span>
        <button onClick={this.handleClearAll} className="btn btn-danger">清除已完成任务</button>
      </div>
    )
  }
}

export default Footer