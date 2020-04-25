import React, { Component } from 'react';
import './Lists.css';
import ListApiService from '../../services/lists-api-service';
import Cards from '../Cards/Cards';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export default class Lists extends Component {
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
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        </div>
        {this.props.cards.map((card) => (
          <Cards cards={card} key={card.id} />
        ))}
        <form className='addCardForm'>
          <input
            type='text'
            placeholder='Add card'
            name='content'
            className='addListInput'
          ></input>
          <button className='addCardBtn' type='submit'>
            {' '}
            <FontAwesomeIcon icon={faPlus} id='plusBtn' />
          </button>
        </form>
      </section>
    );
  }
}
