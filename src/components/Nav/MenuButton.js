import React, { Component } from 'react';
import './MenuButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

class MenuButton extends Component {
  render() {
    return (
      <button id='roundButton' onMouseDown={this.props.handleMouseDown}>
        {' '}
        {/* <FontAwesomeIcon icon={faBars} className='navIcon board-icon' /> */}
      </button>
    );
  }
}

export default MenuButton;
