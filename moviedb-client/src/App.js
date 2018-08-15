import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import Nav from './components/Nav';
import MoviesList from './components/MoviesList';
import LoginForm from './components/LoginForm';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentUser: {
        id: 0
      }
    }
    this.login = this.login.bind(this)
  }

  login (email, password) {
    let data = {
      auth: {
        email: email,
        password: password
      }
    }    
    axios.post('/api/v1/user_token/', data)
    .then(response => {
      localStorage.setItem("jwt", response.data.jwt)
    })
    .then(()=> {
      var config = {
        headers: {}
      }
      if (localStorage.getItem("jwt") !== undefined) {
          config['headers']['Authorization'] = 'Bearer ' + localStorage.getItem("jwt")
      }
      return axios.get('api/v1/users/current', config)
      .then(response => {
          this.setState({
              currentUser: response.data
          })
      })
    })
    .catch(error => console.log(error))
  }

  render() {
    console.log('bbbbbbbbb')
    console.log(this.state.currentUser)
    return (
      <div className="App">
        <Nav currentUser={this.state.currentUser} login={this.login} />
        <MoviesList currentUser={this.state.currentUser} />
      </div>
    );
  }
}

export default App;
