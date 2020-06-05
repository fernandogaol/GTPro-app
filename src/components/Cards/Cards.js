import React, { Component } from 'react';
import CardsApiService from '../../services/cards-api-service';
import userContext from '../../context/ApiContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import './Cards.css';

export default class Cards extends Component {
  static contextType = userContext;

  handleDelete(e) {
    const { cards } = this.props;

    CardsApiService.deleteCardById(cards.id)
      .then(this.context.deleteCard(cards.id))
      .catch(this.context.setError);
  }

  render() {
    const { cards } = this.props;
    return (
      <section className='Cards'>
        <ul>
          <li>{cards.content}</li>
        </ul>
        <button
          id='cardDltBtn'
          type='submit'
          onClick={() => this.handleDelete(cards.id)}
        >
          <FontAwesomeIcon icon={faTrashAlt} id='dltCardIcon' />
        </button>
      </section>
    );
  }
}
Cards.propTypes = {
  cards: PropTypes.object,
};
