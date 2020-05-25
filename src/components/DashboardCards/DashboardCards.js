import React, { Component } from 'react';
import userContext from '../../context/ApiContext';
import CardsApiService from '../../services/cards-api-service';

export default class DashboardCards extends Component {
  static contextType = userContext;

  componentDidMount() {
    this.context.clearError();
    CardsApiService.getCards()
      .then(this.context.setCard)
      .catch(this.context.setError);
  }

  renderCards() {
    const { cards = [] } = this.context;
    return cards.map((card) => <DashboardCards card={card} key={card.id} />);
  }

  render() {
    const { error } = this.context;
    return (
      <section className='DashboardCards'>
        {error ? (
          <p className='red'> There was an error, please try again</p>
        ) : (
          this.renderCards()
        )}
        <div>
          <textarea></textarea>
          <button>Add List +</button>
        </div>
      </section>
    );
  }
}
