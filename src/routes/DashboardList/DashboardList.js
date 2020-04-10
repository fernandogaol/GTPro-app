import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userContext from '../../context/ProjectsForUserContext';
import ListApiService from '../../services/lists-api-service';
import Lists from '../../components/Lists/Lists';
import ProjectApiService from '../../services/projects-api-service';
// import ProjectApiService from '../../services/projects-api-service';

import './DashboardList.css';

export default class DashboardList extends Component {
  static contextType = userContext;

  componentDidMount() {
    this.context.clearError();
    // ListApiService.getList(this.context.userId)
      .then(this.context.setList)
      .catch(this.context.setError);
    ///hello
  }
  renderLists() {
    const { list = [] } = this.context;
    return list.map((list) => <Lists list={list} key={list.id} />);
  }

  render() {
    const { error } = this.context;
    return (
      <section className='List'>
        <Link to='/dashboard'>Go back</Link>
        <h1>Lists</h1>
        {error ? (
          <p className='red'> There was an error, please try again</p>
        ) : (
          this.renderLists()
        )}
        <div>
          <textarea></textarea>
          <button>Add List +</button>
        </div>
      </section>
    );
  }
}
