import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './DashboardProjects.css';

export default class DashboardProjects extends Component {
  render() {
    const { project } = this.props;

    return (
      <section className='DashboardProjects'>
        <Link to={'/lists'}>{project.title}</Link>
        <span>Date created: {project.date_created}</span>
      </section>
    );
  }
}
