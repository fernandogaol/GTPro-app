import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import DashboardPage from '../../routes/DashboardPage/DashboardPage';
import './App.css';
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage';
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage';
import config from '../../config';
import DashboardList from '../../routes/DashboardList/DashboardList';

export default class App extends Component {
  componentDidMount() {
    return fetch(`${config.API_ENDPOINT}/cards`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
        // authorization: `basic ${TokenService.getAuthToken()}`
      }
    }).then(res => res.json());
    // .then(data => console.log(data));
  }
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
            <Route exat path={'/lists'} component={DashboardList} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
        <footer>Footer</footer>
      </div>
    );
  }
}