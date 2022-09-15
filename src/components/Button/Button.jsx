import React, { Component } from 'react';

import { ButtonComponent, ButtonLink } from './button.style';

export class Button extends Component {
  render() {
    return (
      <ButtonComponent
        bg={this.props.bg}
        bgHover={this.props.bgHover}
        bgActive={this.props.bgActive}
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
