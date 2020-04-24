import React, { Component } from 'react';
import ProjectApiService from '../../services/projects-api-service';
import DashboardProjects from '../DashboardProjects/DashboardProjects';
import UserContext from '../../context/ProjectsForUserContext';
import './ProjectList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default class ProjectList extends Component {
  static contextType = UserContext;

  componentDidMount() {
    this.context.clearError();
    ProjectApiService.getProject(this.context.userId)
      .then(this.context.setProject)
      .catch(this.context.setError);
  }
  renderProjects() {
    const { project = [] } = this.context;
    return project.map((project) => (
      <DashboardProjects project={project} key={project.id} />
    ));
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { title } = ev.target;
    const { userId } = this.context;

    this.setState({ error: null });

    ProjectApiService.postProject({ user_id: userId, title: title.value })
      .then(this.context.addProject)
      .then(() => {
        title.value = '';
      })
      .catch(this.context.setError);
  };

  render() {
    const { error } = this.context;
    return (
      <section className='ProjectList'>
        <h1>Projects</h1>
        <div className='renderProjects'>
          {error ? (
            <p className='red'> There was an error, please try again</p>
          ) : (
            this.renderProjects()
          )}
        </div>
        <form className='AddProjectForm' onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='title'
            placeholder='Add new project'
            id='titleInput'
            // onChange={this.changeState}
          ></input>
          <button type='submit' id='addBtn'>
            <FontAwesomeIcon icon={faPlus} id='plusBtn' />
          </button>
        </form>
      </section>
    );
  }
}
