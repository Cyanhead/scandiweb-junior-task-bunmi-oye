import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  Container,
  Wrap,
  Heading,
  RowGroup,
  ProductRow,
  ProductLeft,
  ProductRight,
  ImageWrap,
  Image,
  TotalSection,
  TotalPrice,
  MiniCartP,
  ButtonGroup,
} from './mini-cart.style';

import AttributeSelector from '../../components/AttributeSelector';
import Counter from '../../components/Counter';
import { Button, LinkButton } from '../../components/Button';

import CloseModalOnClickOutside from '../CloseModalOnClickOutside';

class MiniCart extends Component {
  render() {
    const { cartItems } = this.props;
    return (
      <Container show={this.props.showCart}>
        <CloseModalOnClickOutside
          trigger={this.props.handleClose}
          extraRef={this.props.cartRef}
        >
          <Wrap>
            <Heading>
              <MiniCartP weight="700">My bag</MiniCartP>,{' '}
              <MiniCartP weight="500" mar="0 0 0 6px">
                3 items
              </MiniCartP>
            </Heading>
            <RowGroup>
              {cartItems.length === 0 && (
                <MiniCartP fontWeight="300">Your bag is empty ;(</MiniCartP>
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
                        <MiniCartP weight="300">{brand}</MiniCartP>
                        <MiniCartP weight="300">{name}</MiniCartP>
                        <MiniCartP weight="500">
                          {prices[0].currency.symbol}
                          {prices[0].amount}
                        </MiniCartP>
                        {attributes.length
                          ? attributes.map(attribute => {
                              return (
                                <AttributeSelector
                                  key={attribute.id}
                                  setDefaults={false}
                                  attribute={attribute}
                                  allowUpdate={false}
                                  inheritFont
                                  fontSize="0.875em"
                                  fontWeight="400"
                                  fontCase="capitalize"
                                  noSpan
                                  boxFontSize="0.875em"
                                  boxWidth="24px"
                                  boxHeight="24px"
                                  colorBoxWidth="16px"
                                  colorBoxHeight="16px"
                                  gap="8px"
                                  mar="8px 0"
                                />
                              );
                            })
                          : ''}
                      </ProductLeft>
                      <ProductRight>
                        <Counter
                          id={newId}
                          quantity={quantity}
                          width="24px"
                          height="24px"
                          mar="0 8px 0 20px"
                          fontSize="1em"
                        />
                        <ImageWrap>
                          <Image src={gallery[0]} alt="" />
                        </ImageWrap>
                      </ProductRight>
                    </ProductRow>
                  );
                }
              )}
            </RowGroup>
            <TotalSection>
              <TotalPrice>
                <MiniCartP weight="700">Total</MiniCartP>
                <MiniCartP weight="700">&#36;50</MiniCartP>
              </TotalPrice>
              <ButtonGroup>
                <LinkButton
                  to="/cart"
                  bg="inherit"
                  bgHover={props => props.theme.color.blackAlphaHover}
                  bgActive={props => props.theme.color.blackAlphaActive}
                  fg="inherit"
                  border="1px solid #1D1F22"
                  fontSize="0.875em"
                  width="140px"
                  height="44px"
                >
                  view bag
                </LinkButton>

                <Button width="140px" height="44px">
                  checkout
                </Button>
              </ButtonGroup>
            </TotalSection>
          </Wrap>
        </CloseModalOnClickOutside>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    cartItems: state.cart.cartItems,
  };
};

export default connect(mapStateToProps)(MiniCart);
