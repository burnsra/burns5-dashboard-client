import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Schedule from './Schedule'

class Router extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/grades' component={Home}/>
          <Route path='/schedules' component={Schedule}/>
          <Route path='/wireless' component={Home}/>
        </Switch>
      </div>
    );
  }
}

export default Router;
