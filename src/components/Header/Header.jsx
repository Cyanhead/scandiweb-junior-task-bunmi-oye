import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Wrap,
  Left,
  TabWrap,
  TabText,
  Middle,
  Logo,
  Right,
  CartContainer,
  CartWrap,
  CartIcon,
  CartBadge,
  CartCounter,
  GreyBox,
} from './header.style';

import Select from '../Select';
import MiniCart from '../MiniCart';

import logo from '../../assets/images/logo.svg';
import cart from '../../assets/images/empty_cart.svg';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showCart: false,
    };

    this.cartIconRef = React.createRef();
  }

  toggleCart = () => {
    this.setState({
      showCart: !this.state.showCart,
    });
  };

  handleClose = () => {
    this.setState({
      showCart: false,
    });
  };

  render() {
    const Tab = ({ name }) => {
      return (
        <TabWrap>
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

    const { showCart } = this.state;

    return (
      <>
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
              <Select values={currencies} anchor top="65px" pad="16px 8px" />
              <CartContainer onClick={this.toggleCart} ref={this.cartIconRef}>
                <CartWrap>
                  <CartIcon src={cart} alt="" />
                  <CartBadge>
                    <CartCounter>99</CartCounter>
                  </CartBadge>
                </CartWrap>
              </CartContainer>
            </Right>
            <MiniCart
              showCart={showCart}
              handleClose={this.handleClose}
              cartRef={this.cartIconRef}
            />
          </Wrap>
        </Container>
        <GreyBox show={showCart} />
      </>
    );
  }
}

export default Header;
