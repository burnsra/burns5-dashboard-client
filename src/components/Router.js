import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Grades from './Grades'
import Schedule from './Schedule'
import Wireless from './Wireless'

class Router extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/grades' component={Grades}/>
          <Route path='/schedules' component={Schedule}/>
          <Route path='/wireless' component={Wireless}/>
        </Switch>
      </div>
    );
  }
}

export default Router;
