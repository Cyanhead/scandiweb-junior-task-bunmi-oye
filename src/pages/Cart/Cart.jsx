import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import {
  Container,
  Wrap,
  Heading,
  RowGroup,
  ProductRow,
  ProductLeft,
  Brand,
  Name,
  Price,
  ProductRight,
  ImageWrap,
  Image,
  Arrows,
  ArrowWrap,
  ArrowLeft,
  ArrowRight,
  CartP,
  Number,
  TotalSection,
  Tax,
  Quantity,
  TotalPrice,
} from './cart.style';

import AttributeSelector from '../../components/AttributeSelector';
import Counter from '../../components/Counter';
import { Button } from '../../components/Button';

import arrow from '../../assets/images/arrow.svg';

class CartImage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentImage: 0,
    };
  }

  setNextImage = length => {
    if (this.state.currentImage === length - 1) {
      this.setState({
        currentImage: 0,
      });
    } else {
      this.setState({
        currentImage: this.state.currentImage + 1,
      });
    }
  };

  setPrevImage = length => {
    if (this.state.currentImage === 0) {
      this.setState({
        currentImage: length - 1,
      });
    } else {
      this.setState({
        currentImage: this.state.currentImage - 1,
      });
    }
  };

  render() {
    const { images } = this.props;
    return (
      <ImageWrap>
        <Image src={images[this.state.currentImage]} alt="" />
        {images.length > 1 && (
          <Arrows>
            <ArrowWrap onClick={() => this.setPrevImage(images.length)}>
              <ArrowLeft src={arrow} alt="" />
            </ArrowWrap>
            <ArrowWrap onClick={() => this.setNextImage(images.length)}>
              <ArrowRight src={arrow} alt="" />
            </ArrowWrap>
          </Arrows>
        )}
      </ImageWrap>
    );
  }
}

class Cart extends PureComponent {
  render() {
    const { cartItems, totalPrice, totalCount, globalCurrency } = this.props;

    return (
      <Container>
        <Wrap>
          <Heading>Cart</Heading>
          <RowGroup>
            {cartItems.length === 0 && (
              <Heading fontWeight="300">Your cart is empty ;(</Heading>
            )}
            {cartItems.map(
              ({
                newId,
                brand,
                name,
                prices,
                gallery,
                quantity,
                attributes,
              }) => {
                return (
                  <ProductRow key={newId}>
                    <ProductLeft>
                      <Brand>{brand}</Brand>
                      <Name>{name}</Name>
                      <Price>
                        {globalCurrency && globalCurrency.symbol}
                        {globalCurrency !== undefined &&
                          prices.find(
                            price =>
                              price.currency.label === globalCurrency.label
                          ).amount}
                      </Price>
                      {attributes.length
                        ? attributes.map(attribute => {
                            return (
                              <AttributeSelector
                                key={attribute.id}
                                setDefaults={false}
                                attribute={attribute}
                                noSpan
                                gap="12px"
                                allowUpdate={false}
                                disableSelect
                              />
                            );
                          })
                        : ''}
                    </ProductLeft>
                    <ProductRight>
                      <Counter id={newId} quantity={quantity} />
                      <CartImage images={gallery} />
                    </ProductRight>
                  </ProductRow>
                );
              }
            )}
          </RowGroup>
          <TotalSection>
            <Tax>
              <CartP>tax 21&#37;: </CartP>
              <Number>
                {globalCurrency && globalCurrency.symbol}
                {(totalPrice * 0.21)
                  .toFixed(2)
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </Number>
            </Tax>
            <Quantity>
              <CartP>qunatity: </CartP>
              <Number>{totalCount}</Number>
            </Quantity>
            <TotalPrice>
              <CartP fontWeight="500">total: </CartP>
              <Number>
                {globalCurrency && globalCurrency.symbol}
                {totalPrice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </Number>
            </TotalPrice>
            <Button width="280px" height="44px">
              order
            </Button>
          </TotalSection>
        </Wrap>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    cartItems: state.cart.cartItems,
    totalCount: state.cart.totalProductCount,
    globalCurrency: state.currency.globalCurrency,
    totalPrice: state.cart.totalPrice,
  };
};

export default connect(mapStateToProps)(Cart);
