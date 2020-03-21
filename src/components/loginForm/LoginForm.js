import React, { Component } from 'react';
import './LoginForm.css';
import store from '../../store';

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  };

  state = {
    error: null,
    user_name: store.user_name,
    password: store.password
  };

  handleSubmit = event => {
    event.preventDefault();
    const { user_name, password } = event.target;
    user_name.value = '';
    password.value = '';
    this.props.onLoginSuccess();
  };

  render() {
    const { error } = this.state;
    return (
      <form className='LoginForm' onSubmit={this.handleSubmit}>
        <div role='alert'>{error && <p className='red'>{error}</p>}</div>
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
