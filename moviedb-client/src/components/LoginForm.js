import React, { Component } from 'react';
import LogoutForm from './LogoutForm';

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
        email: '',
        password: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleLogin(e){
      e.preventDefault();
      const { email, password } = this.state;
      this.props.onLogin(email, password);
      this.setState({
        email: '',
        password: ''
      });
  }

  render(){
    let user = this.props.currentUser
      if(user.id !== 0) {
        return <LogoutForm currentUser={user} />
      }
      return (
      <div className="login-form">
        <form onSubmit={this.handleLogin}>
          <label htmlFor="email">Email: </label>
          <br />
          <input  name="email"
                  id="email"
                  type="email"
                  placeholder="Email..."
                  value={this.state.email}
                  onChange={this.handleChange} />
          <br /><br />
          <label htmlFor="password">Password:</label>
          <br />
          <input  name="password"
                  id="password"
                  type="password"
                  placeholder="Password..."
                  value={this.state.password}
                  onChange={this.handleChange} />
          <br />
          <button>
            Login
          </button>                  
        </form>
      </div>
    )
  }
}
export default LoginForm;


    