import React, {Component} from 'react';
import {HashRouter, Route, Switch} from "react-router-dom";

import Login from "./pages/login/login";
import Admin from "./pages/admin/admin";
import Index from "./pages/index";
import Detail from "./pages/detail/detail";
import SearchPage from "./pages/search/search";

export default class App extends Component {
    render() {
        return (
            <HashRouter>
                {/*只匹配一个路由*/}
                <Switch>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/admin" component={Admin}></Route>
                    <Route exact={true} path="/" component={Index}></Route>
                    <Route exact={true} path="/detail/:id" component={Detail}></Route>
                    <Route exact={true} path="/search" component={SearchPage}></Route>
                </Switch>
            </HashRouter>
        );
    }
}