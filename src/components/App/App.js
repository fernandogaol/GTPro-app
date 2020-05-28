import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import './App.css';
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage';
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage';
import DashboardList from '../../routes/DashboardList/DashboardList';
import ProjectList from '../../components/ProjectList/ProjectList';
import PublicOnlyRoute from '../../components/Utils/PublicOnlyRoute';
import PrivateRoute from '../../components/Utils/PrivateRoute';

export default class App extends Component {
  render() {
    // let sideDrawer;
    // if (this.context.sideDrawerOpen) {
    //   sideDrawer = <Nav />;
    // }
    return (
      <div className='App'>
        <header className='App__header'>
          <Nav />
        </header>
        <main className='App__main'>
          <Switch>
            <Route exact path={'/'} component={LandingPage} />
            <PublicOnlyRoute path={'/register'} component={RegistrationPage} />

            <PublicOnlyRoute path={'/login'} component={LoginPage} />

            <PrivateRoute exact path={'/projects'} component={ProjectList} />

            <PrivateRoute
              path={'/projects/:id/lists'}
              component={DashboardList}
            />

            <Route component={NotFoundPage} />
          </Switch>
        </main>
        <footer></footer>
      </div>
    );
  }
}
