import React, { Component } from 'react';
import '../App.css';
import LoginForm from '../components/LoginForm';

class Nav extends Component {
    render() {
        return (
        <nav className="navbar navbar-default">
            <div className="navbar-header col-8">
                <div className="navbar-brand">Movies Db</div>
            </div>
            <div className="col-4">
                <ul className="nav navbar-nav navbar-right mr-auto">
                    <LoginForm currentUser={this.props.currentUser} onLogin={this.props.login} />
                </ul>
            </div>
        </nav>
        );
    }
}
export default Nav;