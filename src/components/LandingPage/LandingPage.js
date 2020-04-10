import React, { Component } from 'react';
import './landingPage.css';

export default class LandingPage extends Component {
  render() {
    return (
      <div className='landing__page'>
        <section className='section-app section-one'>Section 1</section>
        <section className='section-app section-two'>Section 2</section>
        <section className='section-app section-three'>Section 3</section>
      </div>
    );
  }
}
