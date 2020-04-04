import React, { Component } from 'react';
import './Lists.css';

export default class Lists extends Component {
  render() {
    const { list } = this.props;

    return (
      <section className='Lists'>
        <h3>{list.title}</h3>
      </section>
    );
  }
}
