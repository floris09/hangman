import React, { Component } from 'react';
import Hangman from './hangman/hangman'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <h1>Hangman</h1>
      <Hangman />
      </div>
    );
  }
}

export default App;
