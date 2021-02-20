import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

class App extends Component {
  state = {
    todos: [
      { id: 1, name: '吃饭', done: true },
      { id: 2, name: '睡觉', done: true },
      { id: 3, name: '打代码', done: true },
      { id: 4, name: '摸鱼', done: false }
    ]
  }

  addTodo = data => {
    const { todos } = this.state
    const newTodos = [data, ...todos]
    this.setState({
      todos: newTodos
    })
  }

  updateTodo = (id, done) => {
    const { todos } = this.state
    const newTodos = todos.map(item => {
      if (item.id === id) return { ...item, done }
      else return item
    })
    this.setState({ todos: newTodos })
  }

  deleteTodo = id => {
    const { todos } = this.state
    const newTodos = todos.filter(todoObj => {
      return todoObj.id !== id
    })
    this.setState({
      todos: newTodos
    })
  }

  checkAllTodo = done => {
    const { todos } = this.state
    const newTodos = todos.map(item => {
      return { ...item, done }
    })
    this.setState({ todos: newTodos })
  }

  clearAllDone = () => {
    const { todos } = this.state
    const newTodos = todos.filter(item => {
      return !item.done
    })
    this.setState({ todos: newTodos })
  }

  render() {
    const { todos } = this.state

    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
          <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
        </div>
      </div>
    )
  }
}

export default App
