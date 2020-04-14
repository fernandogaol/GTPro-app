import React, { Component } from 'react';

const userContext = React.createContext({
  project: [],
  userId: [],
  projectId: [],
  list: [],
  card: [],
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
    card: [],
    error: null,
  };

  setUserId = (userId) => {
    this.setState({ userId: localStorage.setItem('user_id', userId) });
    // console.log('userid:', this.state.userId);
  };
  setProjectId = (projectId) => {
    this.setState({ projectId });
    console.log(projectId);
  };

  setProject = (project) => {
    this.setState({ project });
    // console.log(project);
  };
  setList = (list) => {
    this.setState({ list });
  };
  setCard = (card) => {
    this.setState({ card });
  };
  addProject = (newProject) => {
    this.setProject([...this.state.newProject, newProject]);
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
      userId: localStorage.getItem('user_id'),
      list: this.state.list,
      card: this.state.card,
      projectId: this.state.projectId,
      project: this.state.project,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setUserId: this.setUserId,
      setProject: this.setProject,
      setList: this.setList,
      setCard: this.setCard,
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
