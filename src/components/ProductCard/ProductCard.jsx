import React, { Component } from 'react';
import HoverCartButton from '../HoverCartButton';

import {
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

  render() {
    const {
      //  id,
      gallery,
      inStock,
      brand,
      name,
      prices,
    } = this.props.data;

    return (
      <Wrap
        available={inStock}
        onMouseEnter={this.showCartBtn}
        onMouseLeave={this.hideCartBtn}
      >
        <Top>
          <ImageWrap available={inStock}>
            <Image src={gallery[0] || fallback} alt="" />
            <HoverCartButton visible={this.state.show} />
          </ImageWrap>
          <OutOfStock show={inStock}>out of stock</OutOfStock>
        </Top>
        <Bottom available={inStock}>
          <Title>
            <ProductBrand>{brand}</ProductBrand>
            <ProductName>{name}</ProductName>
          </Title>
          <Price>{prices[0].currency.symbol}50</Price>
        </Bottom>
      </Wrap>
    );
  }
}

export default ProductCard;
