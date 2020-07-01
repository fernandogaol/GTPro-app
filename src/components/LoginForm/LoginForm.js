import React, { Component } from 'react';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import UserContext from '../../context/ApiContext';
import { Button } from '../Utils/Utils';

import './LoginForm.css';

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {},
  };

  static contextType = UserContext;

  state = { error: null };

  handleSubmitJwtAuth = (ev) => {
    ev.preventDefault();
    this.setState({ error: null });
    const { user_name, password } = ev.target;

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
      .then((res) => {
        user_name.value = '';
        password.value = '';
        TokenService.saveAuthToken(res.authToken);
        this.context.setUserId(res.userId);
        this.props.onLoginSuccess();
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };
  render() {
    const { error } = this.state;
    return (
      <div className='login-wrapper'>
        <form className='LoginForm' onSubmit={this.handleSubmitJwtAuth}>
          <div role='alert'>
            {error && <p className='login-error'>{error}</p>}
          </div>
          <div className='user_name'>
            <input
              required
              name='user_name'
              id='LoginForm__user_name'
              placeholder='Enter user name'
            ></input>
          </div>
          <div className='password'>
            <input
              required
              name='password'
              type='password'
              placeholder='Enter password'
              id='LoginForm__password'
            ></input>
          </div>
          <Button type='submit'>Login</Button>
        </form>
      </div>
    );
  }
}
