import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class LandingPage extends Component {
  render() {
    let settings = {
      dots: true,
      dotsClass: 'slick-dots slick-thumb',
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
    };
    return (
      <div className='landing__page'>
        <div className='logo'></div>
        <section className='section-app section-1'>
          <h3>
            <span className='gtpro-welcome'>Welcome to GT Pro</span>, your most
            efficient and practical project management application. Keep track
            of your to do list, vacation plans, and more. Start managing your
            projects now!{' '}
          </h3>
          <Link to='/register'>Register now for free!</Link>
          <div className='managing-projects'></div>
        </section>
        <div className='learn-more'>
          <h2 className='learn-tricks'>
            Learn all the tricks before you get started. GTPro makes it easy to
            manage
          </h2>
          <ul>
            <li>Work tasks and duties</li>
            <li>Team projects</li>
            <li>Homework</li>
            <li>School projects</li>
            <li>Kanban systems</li>
            <li>and more</li>
          </ul>
        </div>
        <Slider {...settings}>
          <section className='dashboard section-2'>
            <p>As soon as you login, start being creative</p>
          </section>
          <section className='first-project section-3'>
            <p>Create your first project in seconds</p>
          </section>
          <section className='create-lists section-4'>
            <p>Create lists to start keeping track of tasks</p>
          </section>
          <section className='create-cards section-5'>
            <p>Add cards to keep track of ideas and progress</p>
          </section>
        </Slider>

        <section className='sell-out'>
          <h3 className='sell-out-h3'>
            Make sure to sign up and invite your friends and family members. We
            are counting on you!<br></br>
            <br></br>
            GTPro is a platform that offers productivity with simplicity. Team
            up, or use it alone. GTPro - be productive and creative your way!
          </h3>
        </section>
      </div>
    );
  }
}
