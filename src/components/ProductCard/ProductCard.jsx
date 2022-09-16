import React, { Component } from 'react';
import HoverCartButton from '../HoverCartButton';

import {
  Container,
  ProductLink,
  Wrap,
  Top,
  ImageWrap,
  Image,
  OutOfStock,
  Bottom,
  Title,
  ProductBrand,
  ProductName,
  Price,
} from './product-card.style';
import fallback from '../../assets/images/logo.svg';

class ProductCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      enlarge: false,
      cartBtnover: false,
    };
  }

  showCartBtn = () => {
    this.setState({
      show: true,
    });
  };

  hideCartBtn = () => {
    this.setState({
      show: false,
    });
  };

  handleOpenAttrSelect = () => {
    this.setState({
      enlarge: true,
    });
  };

  handleCloseAttrSelect = () => {
    this.setState({
      enlarge: false,
    });
  };

  enableCartBtnClick = () => {
    this.setState({
      cartBtnover: true,
    });
  };

  disableCartBtnClick = () => {
    this.setState({
      cartBtnover: false,
    });
  };

  render() {
    const { id, gallery, inStock, brand, name, prices } = this.props.data;
    const { show, enlarge, cartBtnover } = this.state;

    console.log(this.props.data);

    return (
      <Container available={inStock}>
        <ProductLink to={cartBtnover ? '' : `/product/${id}`}>
          <Wrap onMouseEnter={this.showCartBtn} onMouseLeave={this.hideCartBtn}>
            <Top>
              <ImageWrap available={inStock}>
                <Image src={gallery[0] || fallback} alt="" />
                <HoverCartButton
                  visible={show}
                  enlarge={enlarge}
                  cartBtnover={cartBtnover}
                  handleOpenAttrSelect={this.handleOpenAttrSelect}
                  handleCloseAttrSelect={this.handleCloseAttrSelect}
                  enableCartBtnClick={this.enableCartBtnClick}
                  disableCartBtnClick={this.disableCartBtnClick}
                />
              </ImageWrap>
              <OutOfStock show={inStock}>out of stock</OutOfStock>
            </Top>
            <Bottom available={inStock}>
              <Title>
                <ProductBrand>{brand}</ProductBrand>
                <ProductName>{name}</ProductName>
              </Title>
              <Price>
                {prices[0].currency.symbol}
                {prices[0].amount}
              </Price>
            </Bottom>
          </Wrap>
        </ProductLink>
      </Container>
    );
  }
}

export default ProductCard;
