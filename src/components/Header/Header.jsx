import React, { Component } from 'react';
import {
  Container,
  Wrap,
  Left,
  TabWrap,
  TabText,
  Middle,
  Logo,
  Right,
  CartWrap,
  CartIcon,
  CartBadge,
  CartCounter,
} from './header.style';

import logo from '../../assets/images/logo.svg';
import cart from '../../assets/images/empty_cart.svg';
import Select from '../Select';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    const Tab = ({ name }) => {
      return (
        <TabWrap onMouseEnter={() => console.log('ok')}>
          <TabText>{name}</TabText>
        </TabWrap>
      );
    };

    let currencies = [
      {
        selectValue: 'usd',
        displayValue: <p>&#36;</p>,
      },
      {
        selectValue: 'eur',
        displayValue: <p>&#8364;</p>,
      },
      {
        selectValue: 'jpy',
        displayValue: <p>&#165;</p>,
      },
    ];

    return (
      <Container>
        <Wrap>
          <Left>
            <Tab name="women" />
            <Tab name="men" />
            <Tab name="kids" />
          </Left>
          <Middle>
            <Link to="/">
              <Logo src={logo} alt="logo" />
            </Link>
          </Middle>
          <Right>
            <Select values={currencies} />
            <CartWrap>
              <CartIcon src={cart} alt="" />
              <CartBadge>
                <CartCounter>99</CartCounter>
              </CartBadge>
            </CartWrap>
          </Right>
        </Wrap>
      </Container>
    );
  }
}

export default Header;
