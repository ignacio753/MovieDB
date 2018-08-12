import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MoviesList from './components/MoviesList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Movies Db</h1>
        </header>
        <MoviesList />
      </div>
    );
  }
}

export default App;
