import React, { Component } from 'react';
class LogoutForm extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <div className="logout-form">
        <form>
          <h3>Welcome back: </h3>
          <p>{this.props.currentUser.email}</p>
          <button>
            Logout
          </button>                  
        </form>
      </div>
    )
  }
}
export default LogoutForm;


    