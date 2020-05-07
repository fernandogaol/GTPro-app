import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faQrcode } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import TokenService from '../../services/token-service';
import './Nav.css';

export default class Nav extends Component {
  handleLogoutClick = () => {
    window.location.reload();
    TokenService.clearAuthToken();
  };

  renderLogoutLink() {
    return (
      <div className='Header__logged-in'>
        <Link to='/projects'>
          {' '}
          <FontAwesomeIcon icon={faQrcode} className='navIcon board-icon' />
          Board
        </Link>

        <Link onClick={this.handleLogoutClick} to='/login'>
          {' '}
          <FontAwesomeIcon
            icon={faSignOutAlt}
            className='navIcon logout-icon'
          />
          Logout
        </Link>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className='Header__not-logged-in'>
        <Link to='/'>
          <FontAwesomeIcon icon={faHome} className='navIcon home-icon' />
          Home
        </Link>

        <Link to='/register'>
          {' '}
          <FontAwesomeIcon icon={faUserAlt} className='navIcon register-icon' />
          Register
        </Link>

        <Link to='/login'>
          <FontAwesomeIcon icon={faSignInAlt} className='navIcon login-icon' />
          Log in
        </Link>
      </div>
    );
  }
  render() {
    return (
      <>
        <input type='checkbox' id='check'></input>
        <label htmlFor='check'>
          <FontAwesomeIcon icon={faBars} id='btn' />
          <FontAwesomeIcon icon={faTimes} id='cancel' />
        </label>
        <nav className='nav-app'>
          <header>
            <Link to='/'>GT Pro</Link>
          </header>

          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </nav>
      </>
    );
  }
}
