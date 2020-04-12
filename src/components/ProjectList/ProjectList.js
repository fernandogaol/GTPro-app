import React, { Component } from 'react';
import ProjectApiService from '../../services/projects-api-service';
import DashboardProjects from '../DashboardProjects/DashboardProjects';
import UserContext from '../../context/ProjectsForUserContext';
import './ProjectList.css';
import { Redirect } from 'react-router-dom';
// import UserContext from '../../context/UserContext';

export default class ProjectList extends Component {
  static contextType = UserContext;

  componentDidMount() {
    this.context.clearError();
    ProjectApiService.getProject(this.context.userId)
      .then(this.context.setProject)
      .catch(this.context.setError);
    console.log('userId:', this.context.userId);
  }
  renderProjects() {
    const { project = [] } = this.context;
    return project.map((project) => (
      <DashboardProjects project={project} key={project.id} />
    ));
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { title, user_id } = ev.target;

    this.setState({ error: null });

    ProjectApiService.postProject({
      title: title.value,
      user_id: this.context.userId,
    })
      .then((newProject) => {
        title.value = '';
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.context;
    return (
      <section className='ProjectList'>
        {error ? (
          <p className='red'> There was an error, please try again</p>
        ) : (
          this.renderProjects()
        )}
        <form onSubmit={this.handleSubmit}>
          <input name='title'></input>
          <button>Add project +</button>
        </form>
      </section>
    );
  }
}
