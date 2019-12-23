import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Dashboard from './Dashboard';
import Register from './Register';
import {BrowserRouter as Router,Route,Switch,Link,Redirect } from 'react-router-dom'


function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/Register" component={Register}/>
      <Route exact path="/Dashboard" component={Dashboard}/>
      
    </Switch>
  </Router>
  )
}

export default App;
