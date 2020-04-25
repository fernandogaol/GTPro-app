import React, { Component } from 'react';
// import './Cards.css';

export default class Cards extends Component {
  render() {
    const { cards } = this.props;

    return (
      <section className='Cards'>
        <ul>
          <li>{cards.content}</li>
        </ul>
        <button>Delete</button>
      </section>
    );
  }
}
