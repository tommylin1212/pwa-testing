import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Changed stuff.</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            This should push an update to the app.
          </a>
        </header>
      </div>
    );
  }
}

export default App;
