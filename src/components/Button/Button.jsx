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
    const {
      to,
      bg,
      bgHover,
      bgActive,
      fg,
      pad,
      border,
      fontSize,
      width,
      height,
      children,
    } = this.props;
    return (
      <ButtonLink to={to || '/'}>
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
        >
          {children}
        </ButtonComponent>
      </ButtonLink>
    );
  }
}
