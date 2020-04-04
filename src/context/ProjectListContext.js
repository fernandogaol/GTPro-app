import React, { Component } from 'react';

const ProjectListContext = React.createContext({
  projectList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setProjectList: () => {},
});
export default ProjectListContext;

export class ProjectListProvider extends Component {
  state = {
    projectList: [],
    error: null,
  };

  setProjectList = (projectList) => {
    this.setState({ projectList });
  };
  // setUserId = user_id => {
  //   this.setState({ user_id });
  // };
  // setUserName = user_name => {
  //   this.setState({ user_name });
  // };
  setError = (error) => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  render() {
    const value = {
      projectList: this.state.projectList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setProjectList: this.setProjectList,
    };
    return (
      <ProjectListContext.Provider value={value}>
        {this.props.children}
      </ProjectListContext.Provider>
    );
  }
}
