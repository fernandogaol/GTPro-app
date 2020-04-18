import React, { Component } from 'react';
import './Lists.css';

export default class Lists extends Component {
  render() {
    const { list } = this.props;

    return (
      <section className='Lists'>
        <span>{list.title}</span>
        <button>Delete</button>
      </section>
    );
  }
}
