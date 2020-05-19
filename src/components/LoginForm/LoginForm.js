import React, { Component } from 'react';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import UserContext from '../../context/ProjectsForUserContext';

import './LoginForm.css';

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {},
  };

  static contextType = UserContext;

  state = { error: null };

  // handleSubmitBasicAuth = (ev) => {
  //   ev.preventDefault();
  //   const { user_name, password } = ev.target;
  //   TokenService.saveAuthToken(
  //     TokenService.makeBasicAuthToken(user_name.value, password.value)
  //   );

  //   user_name.value = '';
  //   password.value = '';
  //   this.props.onLoginSuccess();
  // };

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
      <form className='LoginForm' onSubmit={this.handleSubmitJwtAuth}>
        <div role='alert'>
          {error && <p className='login-error'>{error}</p>}
        </div>
        <div className='user_name'>
          <label htmlFor='LoginForm__user_name'>User name:</label>
          <input required name='user_name' id='LoginForm__user_name'></input>
        </div>
        <div className='password'>
          <label htmlFor='LoginForm__password'>Password:</label>
          <input
            required
            name='password'
            type='password'
            id='LoginForm__password'
          ></input>
        </div>
        <button type='submit'>Login</button>
      </form>
    );
  }
}
