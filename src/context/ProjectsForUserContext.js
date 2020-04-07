import React, { Component } from 'react';

const userContext = React.createContext({
  userId: [],
  projectList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setuserId: () => {},
});
export default userContext;

export class UserProvider extends Component {
  state = {
    projectList: [],
    userId: [],
    error: null,
  };

  setUserId = (userId) => {
    this.setState({ userId });
    // console.log('userid:', this.state.userId);
  };

  setProjectList = (projectList) => {
    this.setState({ projectList });
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
      projectList: this.state.projectList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setUserId: this.setUserId,
      setProjectList: this.setProjectList,
    };
    return (
      <userContext.Provider value={value}>
        {this.props.children}
      </userContext.Provider>
    );
  }
}
