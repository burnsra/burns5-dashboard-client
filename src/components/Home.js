import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="row">
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Grades</h3>
                <p className="card-text text-muted">View Grades</p>
                <NavLink className="btn btn-primary" to='/grades'>View Grades</NavLink>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Schedules</h3>
                <p className="card-text text-muted">View work schedules</p>
                <NavLink className="btn btn-primary" to='/schedules'>View Schedules</NavLink>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Wireless</h3>
                <p className="card-text text-muted">View wireless data usage</p>
                <NavLink className="btn btn-primary" to='/wireless'>View Wireless</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
