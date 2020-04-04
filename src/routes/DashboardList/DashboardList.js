import React, { Component } from 'react';
import ListContext from '../../context/ListContext';
import ListApiService from '../../services/lists-api-service';
import Lists from '../../components/Lists/Lists';

import './DashboardList.css';

export default class DashboardList extends Component {
  static contextType = ListContext;

  componentDidMount() {
    this.context.clearError();
    ListApiService.getLists()
      .then(this.context.setList)
      .catch(this.context.setError);
  }
  renderLists() {
    const { list = [] } = this.context;
    return list.map(list => <Lists list={list} key={list.id} />);
  }

  render() {
    const { error } = this.context;
    return (
      <section className='List'>
        <h1>Lists</h1>
        {error ? (
          <p className='red'> There was an error, please try again</p>
        ) : (
          this.renderLists()
        )}
        <button>Add List +</button>
      </section>
    );
  }
}
