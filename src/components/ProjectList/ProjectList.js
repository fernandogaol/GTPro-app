import React, { Component } from 'react';
import ProjectListContext from '../../context/ProjectListContext';
import ProjectApiService from '../../services/projects-api-service';
import DashboardProjects from '../DashboardProjects/DashboardProjects';
import './ProjectList.css';

export default class ProjectList extends Component {
  static contextType = ProjectListContext;

  componentDidMount(userId) {
    this.context.clearError();
    ProjectApiService.getProject(userId)
      .then(this.context.setProjectList)
      .catch(this.context.setError);
  }
  renderProjects() {
    const { projectList = [] } = this.context;
    return projectList.map((project) => (
      <DashboardProjects project={project} key={project.id} />
    ));
  }

  render() {
    const { error } = this.context;
    return (
      <section className='ProjectList'>
        {error ? (
          <p className='red'> There was an error, please try again</p>
        ) : (
          this.renderProjects()
        )}
        <button>Add project +</button>
      </section>
    );
  }
}
