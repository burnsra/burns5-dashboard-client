import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home'

class Router extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route path='/' component={Home}/>
          <Route path='/grades' component={Home}/>
          <Route path='/schedules' component={Home}/>
          <Route path='/wireless' component={Home}/>
        </Switch>
      </div>
    );
  }
}

export default Router;
