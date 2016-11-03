import React, { Component } from 'react';
import polly from 'polly-js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.doRequest = this.doRequest.bind(this);

    this.state = {
      now: new Date().toLocaleTimeString()
    };
  }
  
  doRequest() {
    this.setState({
      now: 'Fetching...'
    });

    polly()
      .waitAndRetry([1000, 2000])
      .executeForPromise(() =>
        fetch('api/time')
          .then(rsp => {
            console.log(rsp)
            if (rsp.ok) {
                return rsp;
            } else {
              return Promise.reject(rsp);
            }
          })
      )

    // fetch('api/time')
    //   .then(rsp => {
    //     if (rsp.ok) {
    //         return rsp;
    //     } else {
    //       return Promise.reject(rsp);
    //     }
    //   })

      .then(rsp => rsp.json())
      .then(state => this.setState(state))
  }

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
          The time is: {this.state.now}
        </p>

        <p>
          <button onClick={this.doRequest}>
            Ajax
          </button>
        </p>
      </div>
    );
  }
}

export default App;
