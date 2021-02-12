import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Login from './pages/Login'
import Admin from './pages/Admin'
import 'antd/dist/antd.less'

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/" component={Admin}/>
      </Switch>
    </HashRouter>
  )
}

export default App
