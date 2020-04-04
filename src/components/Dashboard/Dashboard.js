import React, { Component } from 'react';
import './Dashboard.css';
// import DashboardProjects from '../DashboardProjects/DashboardProjects';
// import DashboardCards from '../DashboardCards/DashboardCards';
import ProjectList from '../ProjectList/ProjectList';
// import ProjectApiService from '../../services/projects-api-service';
// import DashboardProjectList from '../DashboardProjectList/DashboardProjectList';

export default class Dashboard extends Component {
  render() {
    return (
      <section className='Dashboard__app'>
        <ProjectList />
        {/* <DashboardCards /> */}
        {/* <DashboardProjectList /> */}
      </section>
    );
  }
}
