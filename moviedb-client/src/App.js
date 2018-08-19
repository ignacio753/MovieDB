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
    /*let data = {
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
    .catch(error => console.log(error))*/
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
