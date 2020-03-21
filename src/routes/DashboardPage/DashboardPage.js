import React, { Component } from 'react';
import Dashboard from '../../components/Dashboard/Dashboard';
import './DashboardPage.css';

export default class DashboardPage extends Component {
  render() {
    return (
      <section className='DashboardPage'>
        <h2>Dashboard </h2>
        <Dashboard />
      </section>
    );
  }
}
