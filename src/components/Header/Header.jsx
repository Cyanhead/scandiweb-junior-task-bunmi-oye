import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { graphql } from '@apollo/client/react/hoc';

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
import { FETCH_CURRENCIES } from '../../graphql/queries';
import { connect } from 'react-redux';
import { changeCurrency } from '../../redux';

class WrappedSelect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currency: null,
    };
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState && prevState.currency === null) {
      this.setState({
        currency: this.props.data.currencies[0],
      });
    }
    if (prevState.currency !== this.state.currency) {
      this.props.changeCurrency(this.state.currency);
    }
  };

  setCurrency = currency => {
    console.log('crnsy received', currency);
    // transform the currency obj to better syntax
    const newObj = {
      label: currency.selectValue,
      symbol: currency.displayValue,
    };
    this.setState({ currency: newObj });
  };

  render() {
    const { loading, error, currencies } = this.props.data;
    if (loading) return <p>Loading...</p>; // TODO beautify this
    if (error) return <p>Error :(</p>; // TODO beautify this

    const categoriesList = currencies.map(({ symbol, label }) => {
      return { displayValue: symbol, selectValue: label };
    });

    return (
      <Select
        values={categoriesList}
        setSelect={this.setCurrency}
        updateParent
        passObj
        anchor
        top="65px"
        pad="16px 8px"
        width="60px"
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeCurrency: currency => dispatch(changeCurrency(currency)),
  };
};

// connect to redux
const withWrappedSelect = connect(null, mapDispatchToProps)(WrappedSelect);

// fetch currencies list to pass to Select component
const withCategoriesQuery = graphql(FETCH_CURRENCIES);

// Enhance component.
const CategorySelect = withCategoriesQuery(withWrappedSelect);

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
              {/* <Select values={currencies} anchor top="65px" pad="16px 8px" /> */}
              <CategorySelect />
              <CartContainer onClick={this.toggleCart} ref={this.cartIconRef}>
                <CartWrap>
                  <CartIcon src={cart} alt="" />
                  {this.props.totalCount !== 0 && (
                    <CartBadge>
                      <CartCounter>{this.props.totalCount}</CartCounter>
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
