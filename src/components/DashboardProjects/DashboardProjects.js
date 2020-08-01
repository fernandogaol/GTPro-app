import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './DashboardProjects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import ProjectApiService from '../../services/projects-api-service';
import UserContext from '../../context/ApiContext';

export default class DashboardProjects extends Component {
  static contextType = UserContext;

  handleDelete(e) {
    const { project } = this.props;

    ProjectApiService.deleteProject(project.id)
      .then(this.context.deleteProjects(project.id))
      .catch(this.context.setError);
  }
  render() {
    const { project } = this.props;

    return (
      <div className='DashboardProjects'>
        <Link to={`/projects/${project.id}/${project.title}`}>
          {project.title}
        </Link>
        <button onClick={() => this.handleDelete(project.id)} type='submit'>
          {' '}
          <FontAwesomeIcon icon={faTrashAlt} id='deleteBtn' />
        </button>
      </div>
    );
  }
}
