import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './landingPage.css';

export default class LandingPage extends Component {
  render() {
    return (
      <div className='landing__page'>
        <h1>GT Pro</h1>
        <section className='section-app section-one'>
          Welcome to GT Pro, your most efficient and practical project manager.
          Start managing your projects now!{' '}
          <Link to='/register'>Register now for free!</Link>
        </section>
      </div>
    );
  }
}
