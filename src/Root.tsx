import React from 'react'
import {HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import App from './App'


const Root = () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path='/' component={App} />
                {/* <Redirect to='/' /> */}
            </Switch>
        </HashRouter>
    )
}
export default Root