import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

class Item extends Component {

  static propTypes = {
    deleteTodo: PropTypes.func.isRequired,
    updateTodo: PropTypes.func.isRequired
  }

  handleCheck = id => {
    return e => {
      this.props.updateTodo(id, e.target.checked)
    }
  }

  handleDelete = id => {
    this.props.deleteTodo(id)
  }

  render() {
    const { id, name, done } = this.props

    return (
      <li>
        <label>
          <input type="checkbox" onChange={this.handleCheck(id)} checked={done}/>
          <span>{name}</span>
        </label>
        <button onClick={() => this.handleDelete(id)} className="btn btn-danger" style={{ display: 'none' }}>删除</button>
      </li>
    )
  }
}

export default Item
