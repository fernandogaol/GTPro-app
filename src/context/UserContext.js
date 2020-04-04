import React, { Component } from 'react';

const UserContext = React.createContext({
  users: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setUser: () => {},
});
export default UserContext;

export class UserProvider extends Component {
  state = {
    users: [],
    error: null,
  };

  setUser = (user) => {
    this.setState({ user });
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
      users: this.state.users,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setUser: this.setUser,
    };
    return (
      <UserContext.Provider value={value}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
