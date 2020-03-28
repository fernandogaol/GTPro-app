import React, { Component } from 'react';
import './DashboardCards.css';

export default class DashboardCards extends Component {
  render() {
    return (
      <section className='DashboardItems__app'>
        <h3>Lists</h3>
        <ul>
          <li>To do</li>
        </ul>
      </section>
    );
  }
}
