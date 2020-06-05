import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userContext from '../../context/ApiContext';
import ListApiService from '../../services/lists-api-service';
import CardsApiService from '../../services/cards-api-service';
import Lists from '../../components/Lists/Lists';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import './DashboardList.css';

export default class DashboardList extends Component {
  static contextType = userContext;

  static defaultProps = {
    match: { params: {} },
  };
  componentDidMount() {
    let project_id = this.props.match.params.id;
    this.context.clearError();
    ListApiService.getList(project_id)
      .then(this.context.setList)
      .catch(this.context.setError);
    CardsApiService.getCards()
      .then(this.context.setCard)
      .catch(this.context.setError);
  }
  renderLists() {
    const { lists = [] } = this.context;
    const { cards = [] } = this.context;

    return lists.map((list) => {
      return (
        <Lists
          list={list}
          key={list.id}
          cards={cards.filter((card) => card.list_id === list.id)}
        />
      );
    });
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { title } = ev.target;
    let projectId = this.props.match.params.id;

    this.setState({ error: null });

    ListApiService.postList({ project_id: projectId, title: title.value })
      .then(this.context.addList)
      .then(() => {
        title.value = '';
      })
      .catch(this.context.setError);
  };
  render() {
    const { error } = this.context;

    return (
      <section className='List'>
        <header>
          {' '}
          <h1>Lists</h1>
        </header>

        <div className='goBackLink'>
          <Link to='/projects'>
            <FontAwesomeIcon icon={faChevronLeft} id='backBtn' />
            Board
          </Link>
        </div>
        <form className='addListForm' onSubmit={this.handleSubmit}>
          <input
            type='text'
            placeholder='Add list'
            name='title'
            className='addListInput'
          ></input>
          <button className='addListBtn' type='submit'>
            {' '}
            <FontAwesomeIcon icon={faPlus} id='plusBtn' />
          </button>
        </form>
        <div className='renderLists'>
          {' '}
          {error ? (
            <p className='red'> There was an error, please try again</p>
          ) : (
            this.renderLists()
          )}
        </div>
      </section>
    );
  }
}
