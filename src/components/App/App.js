import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import DashboardPage from '../../routes/DashboardPage/DashboardPage';
import './App.css';
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage';
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
            <Route path={'/dashboard'} component={DashboardPage} />
          </Switch>
        </main>
        <footer>Footer</footer>
      </div>
    );
  }
}
