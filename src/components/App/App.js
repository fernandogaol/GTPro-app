import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../LandingPage/landingPage';
import LoginPage from '../../routes/loginPage/LoginPage';
import './App.css';
import RegistrationPage from '../../routes/registrationPage/RegistrationPage';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App__header'>
          <Nav />
        </header>
        <main className='App__main'>
          <Switch>
            <Route exact path={'/'} component={LandingPage} />
            <Route path={'/register'} component={RegistrationPage} />
            <Route path={'/login'} component={LoginPage} />
          </Switch>
        </main>
        <footer>Footer</footer>
      </div>
    );
  }
}
