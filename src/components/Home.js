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
                <h3 className="card-title">Home</h3>
                <p className="card-text text-muted">View Home Page</p>
                <NavLink className="btn btn-primary" to='/home'>View Home Page</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
