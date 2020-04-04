import React, { Component } from 'react';
import Dashboard from '../../components/Dashboard/Dashboard';
import './DashboardPage.css';
import ProjectListContext from '../../context/ProjectListContext';

export default class DashboardPage extends Component {
  static contextType = ProjectListContext;
  render() {
    return (
      <section className='DashboardPage'>
        <h2>Boards</h2>
        <Dashboard />
      </section>
    );
  }
}
