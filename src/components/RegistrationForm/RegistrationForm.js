import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service';
import { Input, Button } from '../Utils/Utils';
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
          <Input
            name='full_name'
            placeholder='Enter full name'
            type='text'
            id='RegistrationForm__full_name'
          ></Input>
        </div>
        <div className='user_name'>
          <Input
            name='user_name'
            placeholder='Enter user name'
            type='text'
            id='RegistrationForm__user_name'
          ></Input>
        </div>
        {/* <div className='email'>
          <label htmlFor='RegistrationForm__email'>Email</label>
          <Input
            name='nick_name'
            type='text'
            id='RegistrationForm__nick_name'
          ></Input>
        </div> */}
        <div className='password'>
          <Input
            name='password'
            placeholder='Enter password'
            type='password'
            id='RegistrationForm__password'
          ></Input>
        </div>
        <Button className='register-button' type='submit'>
          Register
        </Button>
      </form>
    );
  }
}
