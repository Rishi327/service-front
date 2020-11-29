import React from 'react';
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
// import NavBar from './NavBar'
import Order from './Order'
const App = () => {
    return (
      <div> 
        {/* <NavBar /> */}
        <HashRouter> 
        <Switch>
          <Route exact path='/app/placeOrder' component={Order}/>
          <Redirect to='/app' />
        </Switch>
        </HashRouter>
      </div>
    )
}
export default App;
