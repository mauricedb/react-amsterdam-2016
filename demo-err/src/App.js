import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = React.createClass({
  getInitialState() {
    return {
      now: new Date()
    };
  },

  updateTime() {
    this.setState({
      now: new Date() //.toLocaleTimeString()
    });
  },

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          The render time is: {new Date().toLocaleTimeString()}
        </p>
        <p>
          The setState time is: {this.state.now.toLocaleTimeString()}
        </p>
        <button onClick={this.updateTime}>
          Update
        </button>
        
      </div>
    );
  }
});

export default App;
