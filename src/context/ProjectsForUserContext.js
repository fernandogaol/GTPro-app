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
  setUserId: () => {},
  setList: () => {},
  setProject: () => {},
  addProject: () => {},
  changeState: () => {},
  addList: () => {},
  deleteProjects: () => {},
  deleteList: () => {},
  addCard: () => {},
  deleteCard: () => {},
});
export default userContext;

export class UserProvider extends Component {
  state = {
    project: [],
    userId: [],
    projectId: [],
    list: [],
    card: [],
    error: null,
  };

  setUserId = (userId) => {
    this.setState({ userId: localStorage.setItem('user_id', userId) });
    // console.log('userid:', this.state.userId);
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
    this.setProject([...this.state.project, newProject]);
  };
  addList = (newList) => {
    this.setList([...this.state.list, newList]);
  };
  addCard = (newCard) => {
    this.setCard([...this.state.card, newCard]);
  };
  deleteProjects = (projectId) => {
    this.setState({
      project: this.state.project.filter((project) => project.id !== projectId),
    });
  };
  deleteList = (listId) => {
    this.setState({
      list: this.state.list.filter((list) => list.id !== listId),
    });
  };
  deleteCard = (cardId) => {
    this.setState({
      card: this.state.card.filter((card) => card.id !== cardId),
    });
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
      addProject: this.addProject,
      addList: this.addList,
      deleteProjects: this.deleteProjects,
      deleteList: this.deleteList,
      addCard: this.addCard,
      deleteCard: this.deleteCard,
    };
    return (
      <userContext.Provider value={value}>
        {this.props.children}
      </userContext.Provider>
    );
  }
}
