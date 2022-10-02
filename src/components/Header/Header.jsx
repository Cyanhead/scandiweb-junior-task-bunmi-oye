import React, { Component } from 'react';
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
import { FETCH_CATEGORIES, FETCH_CURRENCIES } from '../../graphql/queries';
import { connect } from 'react-redux';
import { changeCurrency } from '../../redux';
import { changeCategory } from '../../redux/category/categoryActions';

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
    // transform the currency obj to better syntax
    const newObj = {
      label: currency.selectValue,
      symbol: currency.displayValue,
    };
    this.setState({ currency: newObj });
  };

  render() {
    const { loading, error, currencies } = this.props.data;
    if (loading)
      return (
        <Container>
          <Wrap>
            <p>Loading...</p>
          </Wrap>
        </Container>
      );
    if (error)
      return (
        <Container>
          <Wrap>
            <p>Error:(</p>
          </Wrap>
        </Container>
      );

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
const withCurrenciesQuery = graphql(FETCH_CURRENCIES);

// Enhance component.
const CurrencySelect = withCurrenciesQuery(withWrappedSelect);

// * CATEGORIES TAB SELECTOR
class Tabs extends Component {
  setActiveTab = name => {
    this.props.changeCategory(name);
  };

  render() {
    const { loading, error, categories } = this.props.data;

    if (loading)
      return (
        <Container>
          <Wrap>
            <p>Loading...</p>
          </Wrap>
        </Container>
      );
    if (error)
      return (
        <Container>
          <Wrap>
            <p>Error:(</p>
          </Wrap>
        </Container>
      );

    return (
      <>
        {categories.map(({ name }) => {
          return (
            <TabWrap
              key={name}
              onClick={() => this.setActiveTab(name)}
              active={name === this.props.category}
            >
              <TabText active={name === this.props.category}>{name}</TabText>
            </TabWrap>
          );
        })}
      </>
    );
  }
}

const mapCategoryStateToProps = state => {
  return {
    category: state.category.listingCategory,
  };
};

const mapCategoryDispatchToProps = dispatch => {
  return {
    changeCategory: category => dispatch(changeCategory(category)),
  };
};

// connect to redux
const withTabs = connect(
  mapCategoryStateToProps,
  mapCategoryDispatchToProps
)(Tabs);

// fetch categories list to pass to Select component
const withCategoriesQuery = graphql(FETCH_CATEGORIES);

// Enhance component.
const CategoryTabs = withCategoriesQuery(withTabs);

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
    const { showCart } = this.state;
    const { totalCount } = this.props;

    return (
      <>
        <Container>
          <Wrap>
            <Left>
              <CategoryTabs />
            </Left>
            <Middle>
              <Logo src={logo} alt="logo" />
            </Middle>
            <Right>
              <CurrencySelect />
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
