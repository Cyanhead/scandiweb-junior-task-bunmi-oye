import React, { Component } from 'react';
import {
  Container,
  Wrap,
  Left,
  ImagePreviewWrap,
  ImagePreview,
  ImageColumn,
  ImageWrap,
  Image,
  Right,
  Title,
  Brand,
  Name,
  Price,
  PriceText,
  PriceValue,
  Description,
} from './product-page.style';

import dummy from '../../assets/images/logo.svg';
import dummy1 from '../../assets/images/empty_cart.svg';
import SizePicker from '../../components/SizePicker';
import ColorPicker from '../../components/ColorPicker';
import Button from '../../components/Button';

const dummyImages = [
  dummy,
  dummy1,
  dummy,
  dummy1,
  dummy,
  dummy1,
  dummy,
  dummy1,
];

export class ProductPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      previewImage: 0,
    };
  }

  setPreviewImage = index => {
    this.setState({
      previewImage: index,
    });
  };

  render() {
    const { previewImage } = this.state;
    return (
      <Container>
        <Wrap>
          <Left>
            <ImageColumn>
              {
                // TODO consider the max amount of product photos uploadable
                dummyImages.slice(0, 4).map((image, i) => {
                  return (
                    <ImageWrap
                      key={i}
                      onMouseEnter={() => this.setPreviewImage(i)}
                      active={i === previewImage ? 'active' : ''}
                    >
                      <Image src={image} alt="" />
                    </ImageWrap>
                  );
                })
              }
            </ImageColumn>
            <ImagePreviewWrap>
              <ImagePreview
                // src={currentProduct?.images[previewImage] || ''}
                src={dummyImages[previewImage] || dummy}
                alt=""
              />
            </ImagePreviewWrap>
          </Left>
          <Right>
            <Title>
              <Brand>Brand</Brand>
              <Name>name</Name>
            </Title>
            <SizePicker />
            {/* <SizePicker
              inheritFont
              fontSize="0.875em"
              fontWeight="400"
              fontCase="capitalize"
              noSpan
              boxFontSize="0.875em"
              boxWidth="24px"
              boxHeight="24px"
              gap="8px"
            /> */}
            <ColorPicker noSpan />
            {/* <ColorPicker
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
            /> */}
            <Price>
              <PriceText>price:</PriceText>
              <PriceValue>&#36;50.00</PriceValue>
            </Price>
            <Button pad="16px">add to cart</Button>
            {/* <Button
              bg="inherit"
              fg="inherit"
              border="1px solid #1D1F22"
              fontSize="0.875em"
            >
              add to cart
            </Button> */}
            <Description>product description</Description>
          </Right>
        </Wrap>
      </Container>
    );
  }
}

export default ProductPage;