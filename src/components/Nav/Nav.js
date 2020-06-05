import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faQrcode } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import TokenService from '../../services/token-service';

import './Nav.css';

class Nav extends Component {
  handleLogoutClick = () => {
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
    let visibility = 'hide';

    if (this.props.menuVisibility) {
      visibility = 'show';
    }
    return (
      <>
        <div
          className='nav-app'
          id='flyoutMenu'
          onMouseDown={this.props.handleMouseDown}
          className={visibility}
        >
          <header id='nav-header'>
            <Link to='/'>GT Pro</Link>
          </header>

          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </div>
      </>
    );
  }
}

export default withRouter(Nav);
