import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home'

class Router extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/home' component={Home}/>
        </Switch>
      </div>
    );
  }
}

export default Router;
