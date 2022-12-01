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

import { formatPrice } from '../../helper/formatPrice';
import CartImage from '../../components/CartImage';

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
                {formatPrice(totalPrice * 0.21)}
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
                {formatPrice(totalPrice)}
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
