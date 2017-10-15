import React, { Component } from 'react';
import Header from './components/Header'
import Router from './components/Router'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router className="container" />
      </div>
    );
  }
}

export default App;
