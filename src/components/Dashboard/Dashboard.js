import React, { Component } from 'react';
import './Dashboard.css';
import DashboardProjects from '../DashboardProjects/DashboardProjects';
import DashboardItems from '../DashboardItems/DashboardItems';

export default class Dashboard extends Component {
  render() {
    return (
      <section className='Dashboard__app'>
        <DashboardProjects />
        <DashboardItems />
      </section>
    );
  }
}
