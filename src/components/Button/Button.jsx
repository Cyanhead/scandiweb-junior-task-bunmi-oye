import React, { Component } from 'react';

import { ButtonComponent } from './button.style';

export class Button extends Component {
  render() {
    return (
      <ButtonComponent
        bg={this.props.bg}
        fg={this.props.fg}
        pad={this.props.pad}
        border={this.props.border}
        fontSize={this.props.fontSize}
        width={this.props.width}
        height={this.props.height}
      >
        {this.props.children}
      </ButtonComponent>
    );
  }
}

export default Button;
