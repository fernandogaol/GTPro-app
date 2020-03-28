import React, { Component } from 'react';
import './Dashboard.css';
// import DashboardProjects from '../DashboardProjects/DashboardProjects';
import DashboardCards from '../DashboardCards/DashboardCards';
import DashboardProjects from '../DashboardProjects/DashboardProjects';
// import ProjectApiService from '../../services/projects-api-service';
// import DashboardProjectList from '../DashboardProjectList/DashboardProjectList';

export default class Dashboard extends Component {
  render() {

    const contextValue = {
      notes: this.state.notes
    }

    return (
      <section className='Dashboard__app'>
        <DashboardProjects />
        <DashboardCards />
        {/* <DashboardProjectList /> */}
      </section>
    );
  }
}
