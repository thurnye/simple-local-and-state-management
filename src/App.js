import React, { Component } from 'react';

import Persons from './containers/Persons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ol>
          <li>THIS IS A COMBINATION OF LOCAL STATE MANAGEMENT AND REDUX STATEM MANAGEMENT IN REACT</li>
        </ol>
        <Persons />
      </div>
    );
  }
}

export default App;
