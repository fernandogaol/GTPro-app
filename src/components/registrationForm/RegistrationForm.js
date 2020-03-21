import React, { Component } from 'react';

export default class RegistrationForm extends Component {
  render() {
    return (
      <form className='RegistrationForm'>
        {/* <div role='alert'>{error && <p className='red'>{error}</p>}</div> */}
        <div className='full_name'>
          <label htmlFor='RegistrationForm__full_name'>
            Full name <required />
          </label>
          <input
            name='full_name'
            type='text'
            requinput
            id='RegistrationForm__full_name'
          ></input>
        </div>
        <div className='user_name'>
          <label htmlFor='RegistrationForm__user_name'>
            User name <required />
          </label>
          <input
            name='user_name'
            type='text'
            required
            id='RegistrationForm__user_name'
          ></input>
        </div>
        <div className='password'>
          <label htmlFor='RegistrationForm__password'>
            Password <required />
          </label>
          <input
            name='password'
            type='password'
            required
            id='RegistrationForm__password'
          ></input>
        </div>
        <div className='nick_name'>
          <label htmlFor='RegistrationForm__nick_name'>Nickname</label>
          <input
            name='nick_name'
            type='text'
            id='RegistrationForm__nick_name'
          ></input>
        </div>
        <button type='submit'>Register</button>
      </form>
    );
  }
}
