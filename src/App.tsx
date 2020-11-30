import React from 'react';
import './generated/tailwind.css'
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar'
import Order from './Order'
import FAQ from './Faq'
const App = () => {
    return (
      <div> 
        
        <NavBar />
        <Order />
        <Switch>
          <Route exact path='/app/faq' component={FAQ} />
          <Redirect to='/' />
        </Switch>
      
      </div>
    )
}
export default App;
