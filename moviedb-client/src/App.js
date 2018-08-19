import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import MoviesList from './components/MoviesList';
import * as constants from './utils/constants';
import { userLogin } from './utils/auth';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentUser: constants.NO_USER
    }
    this.login = this.login.bind(this)
  }

  login (email, password) {
    userLogin(email, password).then((user) => {
      this.setState({
        currentUser: user
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Nav currentUser={this.state.currentUser} login={this.login} />
        <MoviesList currentUser={this.state.currentUser} />
      </div>
    );
  }
}

export default App;
