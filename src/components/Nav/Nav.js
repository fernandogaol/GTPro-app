import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  return (
    <nav className='nav-app'>
      <h1>
        {' '}
        <Link to='/'>GT Pro</Link>
      </h1>
      <span>
        {' '}
        <Link to='/register'>Register</Link> <Link to='/login'>Log in</Link>
      </span>
    </nav>
  );
}
