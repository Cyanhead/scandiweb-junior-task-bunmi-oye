import React, { Component } from 'react';

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

import SizePicker from '../../components/SizePicker';
import ColorPicker from '../../components/ColorPicker';
import Counter from '../../components/Counter';
import Button from '../../components/Button';

import dummy from '../../assets/images/logo.svg';
import dummy1 from '../../assets/images/empty_cart.svg';
import arrow from '../../assets/images/arrow.svg';

class Cart extends Component {
  render() {
    const prodox = [dummy, dummy1, dummy, dummy1];
    return (
      <Container>
        <Wrap>
          <Heading>Cart</Heading>
          <RowGroup>
            {prodox.map((item, i) => {
              return (
                <ProductRow key={i}>
                  <ProductLeft>
                    <Brand>brand</Brand>
                    <Name>name</Name>
                    <Price>&#36;50</Price>
                    <SizePicker noSpan gap="8px" mar="16px 0" />
                    <ColorPicker noSpan gap="8px" mar="16px 0 0 0" />
                  </ProductLeft>
                  <ProductRight>
                    <Counter />
                    <ImageWrap>
                      <Image src={item} alt="" />
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
            })}
          </RowGroup>
          <TotalSection>
            <Tax>
              <CartP>Tax 21&#37;:</CartP>
              <Number> &#36;calc</Number>
            </Tax>
            <Quantity>
              <CartP>qunatity:</CartP>
              <Number>50</Number>
            </Quantity>
            <TotalPrice>
              <CartP>total:</CartP>
              <Number>50</Number>
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

export default Cart;
