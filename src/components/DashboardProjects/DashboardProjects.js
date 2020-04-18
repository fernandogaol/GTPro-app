import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './DashboardProjects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export default class DashboardProjects extends Component {
  render() {
    const { project } = this.props;

    return (
      <section className='DashboardProjects'>
        
        <Link to={`/projects/${project.id}/lists`}>{project.title}</Link>
        <FontAwesomeIcon icon={faTrashAlt} id='deleteBtn' />
      </section>
    );
  }
}
