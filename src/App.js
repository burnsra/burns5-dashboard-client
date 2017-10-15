import React, { Component } from 'react';
import Header from './components/Header'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <p>
          Dashboard for the Burns5 family.
        </p>
      </div>
    );
  }
}

export default App;
