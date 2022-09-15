import React, { Component } from 'react';

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

import SizePicker from '../../components/SizePicker';
import ColorPicker from '../../components/ColorPicker';
import Counter from '../../components/Counter';
import { Button, LinkButton } from '../../components/Button';

import dummy from '../../assets/images/logo.svg';
import dummy1 from '../../assets/images/empty_cart.svg';
import CloseModalOnClickOutside from '../CloseModalOnClickOutside';

class MiniCart extends Component {
  render() {
    const prodox = [dummy, dummy1];
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
              {prodox.map((item, i) => {
                return (
                  <ProductRow key={i}>
                    <ProductLeft>
                      <MiniCartP weight="300">brand</MiniCartP>
                      <MiniCartP weight="300">name</MiniCartP>
                      <MiniCartP weight="500">&#36;50</MiniCartP>
                      <SizePicker
                        inheritFont
                        fontSize="0.875em"
                        fontWeight="400"
                        fontCase="capitalize"
                        noSpan
                        boxFontSize="0.875em"
                        boxWidth="24px"
                        boxHeight="24px"
                        gap="8px"
                        mar="8px 0"
                      />
                      <ColorPicker
                        inheritFont
                        fontSize="0.875em"
                        fontWeight="400"
                        fontCase="capitalize"
                        noSpan
                        boxFontSize="0.875em"
                        boxWidth="16px"
                        boxHeight="16px"
                        gap="8px"
                        borderSize="1px"
                        mar="0"
                      />
                    </ProductLeft>
                    <ProductRight>
                      <Counter
                        width="24px"
                        height="24px"
                        mar="0 8px 0 20px"
                        fontSize="1em"
                      />
                      <ImageWrap>
                        <Image src={item} alt="" />
                      </ImageWrap>
                    </ProductRight>
                  </ProductRow>
                );
              })}
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

export default MiniCart;
