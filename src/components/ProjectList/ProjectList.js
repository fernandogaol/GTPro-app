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
    const { title } = ev.target;

    this.setState({ error: null });

    ProjectApiService.postProject({
      title: title.value,
      user_id: this.context.userId,
    })
      .then((newProject) => {
        title.value = '';

        const { project } = this.context;
        this.setState({
          project: [...this.state.projectss, project],
        });
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.context;
    return (
      <section className='ProjectList'>
        <div className='renderProjects'>
          <h1>Projects</h1>
          {error ? (
            <p className='red'> There was an error, please try again</p>
          ) : (
            this.renderProjects()
          )}
        </div>
        <form onSubmit={this.handleSubmit}>
          <input
            name='title'
            placeholder='Add new project'
            id='titleInput'
          ></input>
          <button type='submit' id='addBtn'>
            <FontAwesomeIcon icon={faPlus} id='plusBtn' />
          </button>
        </form>
      </section>
    );
  }
}
