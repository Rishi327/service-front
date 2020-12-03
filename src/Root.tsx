import React from 'react'
import {HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import App from './App'
import FAQ from './Faq'
import About from './About'

const Root = () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path='/' component={App} />
                <Route exact path='/app/faq' component={FAQ} />
                <Route exact path='/app/about-us' component={About} />
                <Redirect to='/' />
            </Switch>
        </HashRouter>
    )
}
export default Root