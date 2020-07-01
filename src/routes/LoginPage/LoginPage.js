import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import './LoginPage.css';

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };
  handleLoginSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || '/projects';
    history.push(destination);
  };

  render() {
    return (
      <section className='LoginPage'>
        <div className='login-demo'>
          <span className='slide-tolearn'>
            {' '}
            Try it out with our demo user. <b></b>Username: demouser<br></br>
            Password: Demouser123
          </span>
        </div>
        <h2>Log In </h2>
        <LoginForm onLoginSuccess={this.handleLoginSuccess} />
      </section>
    );
  }
}
