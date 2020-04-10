import React, { Component } from 'react';

const ListContext = React.createContext({
  list: [],
  projectId: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setList: () => {},
  setProjects: () => {},
});
export default ListContext;

export class ListProvider extends Component {
  state = {
    List: [],
    projectId: [],
    error: null,
  };

  setList = (list) => {
    this.setState({ list });
  };
  setProjects = (projectId) => {
    this.setState({ projectId });
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
      list: this.state.list,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setList: this.setList,
      setProjects: this.setProjects,
    };
    return (
      <ListContext.Provider value={value}>
        {this.props.children}
      </ListContext.Provider>
    );
  }
}
