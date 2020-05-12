import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service';
import './RegistrationForm.css';

export default class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {},
  };

  state = { error: null };

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { full_name, user_name, password } = ev.target;

    this.setState({ error: null });

    AuthApiService.postUser({
      full_name: full_name.value,
      user_name: user_name.value,
      password: password.value,
    })
      .then((user) => {
        full_name.value = '';
        user_name.value = '';
        password.value = '';
        this.props.onRegistrationSuccess();
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <form className='RegistrationForm' onSubmit={this.handleSubmit}>
        <div role='alert'>{error && <p className='red'>{error}</p>}</div>
        <div className='full_name'>
          <label htmlFor='RegistrationForm__full_name'>Full name</label>
          <input
            name='full_name'
            placeholder='joe doe'
            type='text'
            id='RegistrationForm__full_name'
          ></input>
        </div>
        <div className='user_name'>
          <label htmlFor='RegistrationForm__user_name'>User name</label>
          <input
            name='user_name'
            placeholder='joedoe'
            type='text'
            id='RegistrationForm__user_name'
          ></input>
        </div>
        {/* <div className='email'>
          <label htmlFor='RegistrationForm__email'>Email</label>
          <input
            name='nick_name'
            type='text'
            id='RegistrationForm__nick_name'
          ></input>
        </div> */}
        <div className='password'>
          <label htmlFor='RegistrationForm__password'>Password</label>
          <input
            name='password'
            placeholder='Password123'
            type='password'
            id='RegistrationForm__password'
          ></input>
        </div>
        <button type='submit'>Register</button>
      </form>
    );
  }
}
