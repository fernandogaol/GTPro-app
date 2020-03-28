import React, { Component } from 'react';
import './DashboardProjects.css';
import ProjectListContext from '../../context/ProjectListContext';
import ProjectApiService from '../../services/projects-api-service';
import DashboardProjectList from '../DashboardProjectList/DashboardProjectList';

export default class DashboardProjects extends Component {
  static contextType = ProjectListContext;

  componentDidMount() {
    this.context.clearError();
    ProjectApiService.getProjects()
      .then(this.context.setProjectList)
      .catch(this.context.setError);
  }
  renderProjects() {
    const { projectList = [] } = this.context;
    console.log('list', projectList);
    return projectList.map(project => (
      <DashboardProjectList project={project} key={project.id} />
    ));
  }

  render() {
    const { error } = this.context;
    return (
      <section className='DashboardProjects__app'>
        <h3>projects</h3>
        {error ? (
          <p className='red'> There was an error, please try again</p>
        ) : (
          this.renderProjects()
        )}
      </section>
    );
  }
}
