import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userContext from '../../context/ProjectsForUserContext';
import ListApiService from '../../services/lists-api-service';
import Lists from '../../components/Lists/Lists';
import CardsApiService from '../../services/cards-api-service';
import DashboardCards from '../../components/DashboardCards/DashboardCards';

import './DashboardList.css';

export default class DashboardList extends Component {
  static contextType = userContext;

  static defaultProps = {
    match: { params: {} },
  };
  componentDidMount() {
    let project_id = this.props.match.params.id;
    const { list } = this.context;
    this.context.clearError();
    ListApiService.getList(project_id)
      .then(this.context.setList)
      .catch(this.context.setError);
    console.log('List:', list);
  }
  renderLists() {
    const { list = [] } = this.context;

    return list.map((list) => <Lists list={list} key={list.id} />);
  }

  // renderCards() {
  //   const { card = [] } = this.context;
  //   return card.map((card) => <DashboardCards card={card} key={card.id} />);
  // }

  render() {
    const { error } = this.context;
    return (
      <section className='List'>
        <Link to='/projects'>Go back</Link>
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
