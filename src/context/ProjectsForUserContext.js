import React, { Component } from 'react';

const userContext = React.createContext({
  project: [],
  userId: [],
  projectId: [],
  list: [],
  newProject: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setuserId: () => {},
  setList: () => {},
  setProject: () => {},
  setProjectId: () => {},
  addProject: () => {},
});
export default userContext;

export class UserProvider extends Component {
  state = {
    project: [],
    userId: [],
    projectId: [],
    newProject: [],
    list: [],
    error: null,
  };

  setUserId = (userId) => {
    this.setState({ userId });
    // console.log('userid:', this.state.userId);
  };
  setProjectId = (projectId) => {
    this.setState({ projectId });
    console.log(projectId);
  };

  setProject = (project) => {
    this.setState({ project });
    console.log(project);
  };
  addProject = (newProject) => {
    this.setProject([...this.state.newProject, newProject]);
  };

  setList = (list) => {
    this.setState({ list });
  };

  setError = (error) => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  render() {
    const value = {
      userId: this.state.userId,
      list: this.state.list,
      projectId: this.state.projectId,
      project: this.state.project,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setUserId: this.setUserId,
      setProject: this.setProject,
      setList: this.setList,
      setProjectId: this.setProjectId,
      addProject: this.addProject,
    };
    return (
      <userContext.Provider value={value}>
        {this.props.children}
      </userContext.Provider>
    );
  }
}
