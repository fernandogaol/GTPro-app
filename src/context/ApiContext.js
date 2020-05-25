import React, { Component } from 'react';

const userContext = React.createContext({
  projects: [],
  userId: [],
  lists: [],
  cards: [],
  newProject: [],
  error: null,
  setError: () => {},
  setUserId: () => {},
  setList: () => {},
  setCard: () => {},
  setProject: () => {},
  addProject: () => {},
  addList: () => {},
  addCard: () => {},
  deleteProjects: () => {},
  deleteList: () => {},
  deleteCard: () => {},
  clearError: () => {},
});
export default userContext;

export class UserProvider extends Component {
  state = {
    projects: [],
    userId: [],
    lists: [],
    cards: [],
    error: null,
  };

  setUserId = (userId) => {
    this.setState({ userId: localStorage.setItem('user_id', userId) });
  };

  setProject = (projects) => {
    this.setState({ projects });
  };
  setList = (lists) => {
    this.setState({ lists });
  };
  setCard = (cards) => {
    this.setState({ cards });
  };
  addProject = (newProject) => {
    this.setProject([...this.state.projects, newProject]);
  };
  addList = (newList) => {
    this.setList([...this.state.lists, newList]);
  };
  addCard = (newCard) => {
    this.setCard([...this.state.cards, newCard]);
  };
  deleteProjects = (projectId) => {
    this.setState({
      projects: this.state.projects.filter(
        (project) => project.id !== projectId
      ),
    });
  };
  deleteList = (listId) => {
    this.setState({
      lists: this.state.lists.filter((list) => list.id !== listId),
    });
  };
  deleteCard = (cardId) => {
    this.setState({
      cards: this.state.cards.filter((card) => card.id !== cardId),
    });
  };
  clearError = () => {
    this.setState({ error: null });
  };

  render() {
    const value = {
      userId: localStorage.getItem('user_id'),
      lists: this.state.lists,
      cards: this.state.cards,
      projects: this.state.projects,
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
