import React, { PureComponent } from 'react';

import { Wrapper, ButtonComponent, ButtonLink } from './button.style';

export class Button extends PureComponent {
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
      disable,
    } = this.props;

    return (
      <Wrapper disable={disable} onClick={onClick}>
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
      </Wrapper>
    );
  }
}

export class LinkButton extends PureComponent {
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
