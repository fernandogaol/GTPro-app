import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import userContext from '../../context/ProjectsForUserContext';
import CardsApiService from '../../services/cards-api-service';

export default class DashboardCards extends Component {
  static contextType = userContext;

  componentDidMount() {
    this.context.clearError();
    CardsApiService.getCards()
      .then(this.context.setCard)
      .catch(this.context.setError);
  }

  // renderCards() {
  //   const { card = [] } = this.context;
  //   return card.map((card) => <DashboardCards card={card} key={card.id} />);
  // }

  render() {
    const { error } = this.context;
    return (
      <section className='DashboardCards'>
        {/* <Link to='/projects'>Go back</Link>
        <h1>Lists</h1>
        {error ? (
          <p className='red'> There was an error, please try again</p>
        ) : (
          this.renderLists()
        )}
        <div>
          <textarea></textarea>
          <button>Add List +</button>
        </div> */}
      </section>
    );
  }
}
