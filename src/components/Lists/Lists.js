import React, { Component } from 'react';
import './Lists.css';
import ListApiService from '../../services/lists-api-service';
import Cards from '../Cards/Cards';
import userContext from '../../context/ProjectsForUserContext';
import CardsApiService from '../../services/cards-api-service';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export default class Lists extends Component {
  static contextType = userContext;

  handleSubmit = (ev) => {
    console.log('clicked');
    ev.preventDefault();
    const { content } = ev.target;
    const key = this.props;

    this.setState({ error: null });

    CardsApiService.postCard({ list_id: key, content: content.value })
      .then(this.context.addCard)
      .then(() => {
        content.value = '';
      })
      .catch(this.context.setError);
  };

  handleDelete(e) {
    const { list } = this.props;

    ListApiService.deleteListById(list.id)
      .then(this.context.deleteList(list.id))
      .catch(this.context.setError);
  }

  render() {
    const { list } = this.props;

    return (
      <section className='Lists'>
        <div className='list-title'>
          <span>{list.title}</span>
          <button
            id='deleteBtn'
            type='submit'
            onClick={() => this.handleDelete(list.id)}
          >
            <FontAwesomeIcon icon={faTrashAlt} id='dltListIcon' />
          </button>
        </div>
        {this.props.cards.map((card) => (
          <Cards cards={card} key={card.id} />
        ))}
        <form className='addCardForm' onSubmit={this.handleSubmit}>
          <input
            type='text'
            placeholder='Add card'
            name='content'
            className='addCardInput'
          ></input>
          <button className='addCardBtn' type='submit'>
            {' '}
            <FontAwesomeIcon icon={faPlus} id='cardPlusBtn' />
          </button>
        </form>
      </section>
    );
  }
}
