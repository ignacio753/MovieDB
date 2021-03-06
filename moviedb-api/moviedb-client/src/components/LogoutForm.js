import React, { Component } from 'react';
class LogoutForm extends Component {
  render(){
    return(
      <form className="form-inline my-2 my-lg-0">
        <li class="nav-item inline log"><p className="navbar-text">Welcome back: {this.props.currentUser.email}</p></li>
        <li class="nav-item inline log"><button className="btn btn-link log my-2 my-sm-0">Log out </button></li>
      </form>
    )
  }
}
export default LogoutForm;


    