import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import './Nav.css';


export default class Nav extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    // window.localStorage.clear();
  };

  renderLogoutLink() {
    return (
      <div className='Header__logged-in'>
        <ul>
          <li><Link to='/projects'>Board</Link></li>
          <li><Link onClick={this.handleLogoutClick} to='/login'>
            Logout
        </Link></li>
        </ul>
      </div >
    );
  }

  renderLoginLink() {
    return (
      <div className='Header__not-logged-in'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/register'>Register</Link></li>
          <li><Link to='/login'>Log in</Link></li>
        </ul>
      </div>
    );
  }
  render() {
    return (
      <>
        <nav className='nav-app'>
          <h1>
            <header><Link to='/'>GT Pro</Link></header>
          </h1>

          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </nav>
      </>
    );
  }
}
