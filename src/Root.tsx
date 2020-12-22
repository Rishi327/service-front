import React from 'react'
import {HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import App from './App'
import FAQ from './Faq'
import About from './About'
import AdminLogin from '../src/admin/AdminLogin'
import AdminRoute from  '../src/admin/AdminRoute'
import AdminApp from '../src/admin/AdminApp'


const Root = () => {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/app/faq" component={FAQ} />
          <Route exact path="/app/about-us" component={About} />
          <Route exact path="/app/admin/login" component={AdminLogin} />
          <AdminRoute path='/app/admin' component={AdminApp} />
          <Redirect to="/" />
        </Switch>
      </HashRouter>
    );
}
export default Root