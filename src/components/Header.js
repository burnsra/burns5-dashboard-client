import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from 'reactstrap';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    };
  }

  _toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  _closeNav() {
    document.querySelector('.navbar-collapse').classList.remove('show');
    this.setState({
      collapsed: true
    });
  }

  render() {
    return (
      <header>
        <Navbar color="dark" className="navbar-dark navbar-expand-sm" expand="false" fixed="top">
          <NavbarBrand href="/">Burns5 Dashboard</NavbarBrand>
          <NavbarToggler onClick={this._toggleNavbar.bind(this)} />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav className="mr-auto" navbar>
              <li className="nav-item">
                <NavLink exact className="nav-link" to='/grades' onClick={this._closeNav.bind(this)}>Grades</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact className="nav-link" to='/schedules' onClick={this._closeNav.bind(this)}>Schedules</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact className="nav-link" to='/wireless' onClick={this._closeNav.bind(this)}>Wireless</NavLink>
              </li>
            </Nav>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}

export default Header;
