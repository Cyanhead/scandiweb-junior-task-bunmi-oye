import React, { Component } from 'react';

import { ButtonComponent, ButtonLink } from './button.style';

export class Button extends Component {
  render() {
    const {
      bg,
      bgHover,
      bgActive,
      fg,
      pad,
      border,
      fontSize,
      width,
      height,
      onClick,
      children,
    } = this.props;

    return (
      <ButtonComponent
        bg={bg}
        bgHover={bgHover}
        bgActive={bgActive}
        fg={fg}
        pad={pad}
        border={border}
        fontSize={fontSize}
        width={width}
        height={height}
        onClick={onClick}
      >
        {children}
      </ButtonComponent>
    );
  }
}

export class LinkButton extends Component {
  render() {
    return (
      <ButtonLink to={this.props.to || '/'}>
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
      </ButtonLink>
    );
  }
}
