import React, { Component } from 'react';

import {
  Container,
  Wrap,
  Left,
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

import MiniCart from '../MiniCart';
import CategoryTabs from '../Tabs';
import CurrencySelector from '../CurrencySelector';

import logo from '../../assets/images/logo.svg';
import cart from '../../assets/images/empty_cart.svg';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showCart: false,
      tabIndex: 0,
    };

    this.cartIconRef = React.createRef();
  }

  setTabIndex = index => {
    this.setState({
      tabIndex: index,
    });
  };

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
    const { showCart } = this.state;
    const { totalCount } = this.props;

    return (
      <>
        <Container>
          <Wrap>
            <Left>
              <CategoryTabs
                setTabIndex={this.setTabIndex}
                tabIndex={this.state.tabIndex}
              />
            </Left>
            <Middle>
              <Link to="/" onClick={() => this.setTabIndex(0)}>
                <Logo src={logo} alt="logo" />
              </Link>
            </Middle>
            <Right>
              <CurrencySelector />
              <CartContainer onClick={this.toggleCart} ref={this.cartIconRef}>
                <CartWrap>
                  <CartIcon src={cart} alt="" />
                  {totalCount !== 0 && (
                    <CartBadge>
                      <CartCounter>{totalCount}</CartCounter>
                    </CartBadge>
                  )}
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

const mapStateToProps = state => {
  return {
    totalCount: state.cart.totalProductCount,
  };
};

export default connect(mapStateToProps)(Header);
