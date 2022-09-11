import React, { Component } from 'react';
import cart from '../../assets/images/empty_cart_white.svg';

import { Wrap, CartIcon } from './hover-cart-button.style';

class HoverCartButton extends Component {
  render() {
    return (
      <Wrap show={this.props.visible}>
        <CartIcon src={cart} alt="" />
      </Wrap>
    );
  }
}

export default HoverCartButton;
