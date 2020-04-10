import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import './Nav.css';

export default class Nav extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
  };

  renderLogoutLink() {
    return (
      <div className='Header__logged-in'>
        <Link to='/dashboard'>Dashboard</Link>
        <Link onClick={this.handleLogoutClick} to='/login'>
          Logout
        </Link>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className='Header__not-logged-in'>
        <Link to='/'>Home</Link>
        <Link to='/register'>Register</Link>
        <Link to='/login'>Log in</Link>
      </div>
    );
  }
  render() {
    return (
      <>
        <nav className='nav-app'>
          <h1>
            <Link to='/'>GT Pro</Link>
          </h1>
          <span className='Header__tagline--wide'>Rate all the things.</span>
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </nav>
      </>
    );
  }
}
