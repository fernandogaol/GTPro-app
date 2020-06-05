import React, { Component } from 'react';
import MenuButton from './MenuButton';
import Nav from './Nav';

class MenuContainer extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      visible: false,
    };

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  handleMouseDown(e) {
    this.toggleMenu();

  }

  toggleMenu() {
    this.setState({
      visible: !this.state.visible,
    });
  }
  render() {
    return (
      <div>
        <MenuButton handleMouseDown={this.handleMouseDown} />
        <Nav
          handleMouseDown={this.handleMouseDown}
          menuVisibility={this.state.visible}
        />
      </div>
    );
  }
}

export default MenuContainer;
