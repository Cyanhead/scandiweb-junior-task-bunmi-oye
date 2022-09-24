import React, { Component } from 'react';
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

class Cart extends Component {
  render() {
    const { cartItems } = this.props;

    return (
      <Container>
        <Wrap>
          <Heading>Cart</Heading>
          <RowGroup>
            {cartItems.length === 0 && (
              <Heading fontWeight="300">Your bag is empty ;(</Heading>
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
                        {this.props.globalCurrency &&
                          this.props.globalCurrency.symbol}
                        {this.props.globalCurrency !== undefined &&
                          prices.find(
                            price =>
                              price.currency.label ===
                              this.props.globalCurrency.label
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
                              />
                            );
                          })
                        : ''}
                    </ProductLeft>
                    <ProductRight>
                      <Counter id={newId} quantity={quantity} />
                      <ImageWrap>
                        <Image src={gallery[0]} alt="" />
                        <Arrows>
                          <ArrowWrap>
                            <ArrowLeft src={arrow} alt="" />
                          </ArrowWrap>
                          <ArrowWrap>
                            <ArrowRight src={arrow} alt="" />
                          </ArrowWrap>
                        </Arrows>
                      </ImageWrap>
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
                {this.props.globalCurrency && this.props.globalCurrency.symbol}{' '}
                calc
              </Number>
            </Tax>
            <Quantity>
              <CartP>qunatity: </CartP>
              <Number>{this.props.totalCount}</Number>
            </Quantity>
            <TotalPrice>
              <CartP fontWeight="500">total: </CartP>
              <Number>
                {this.props.globalCurrency && this.props.globalCurrency.symbol}{' '}
                50
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
  };
};

export default connect(mapStateToProps)(Cart);
