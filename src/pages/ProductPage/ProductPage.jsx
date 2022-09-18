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

import AttributeSelector from '../../components/AttributeSelector';
import ColorSelector from '../../components/ColorSelector';
import { Button } from '../../components/Button';
import withParams from '../../hocs';
import { Query } from '@apollo/client/react/components';
import { FETCH_PRODUCT } from '../../graphql/queries';
import { handleAttributes } from '../../helpers/handleAttributes';
import { connect } from 'react-redux';
import { addProduct } from '../../redux';

class ProductPage extends Component {
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
          <Query
            query={FETCH_PRODUCT}
            variables={{ productId: this.props.params.productId }}
          >
            {({ loading, error, data }) => {
              if (loading) return <h1>Loading...</h1>; // TODO beautify this
              if (error) return <h1>Error :(</h1>; // TODO beautify this
              const {
                product: {
                  name,
                  gallery,
                  description,
                  brand,
                  attributes,
                  prices,
                },
              } = data;

              // JSON parsed product data to be ...
              // ... passed to cart state on add to cart
              const jsonParsedProduct = JSON.parse(
                JSON.stringify(data.product)
              );

              // extracted attributes passed to selector components
              const attrValues = handleAttributes(attributes);
              const colorValues = handleAttributes(attributes, 'swatch');

              return (
                <>
                  <Left>
                    <ImageColumn>
                      {gallery.map((image, i) => {
                        return (
                          <ImageWrap
                            key={i}
                            onMouseEnter={() => this.setPreviewImage(i)}
                            active={i === previewImage ? 'active' : ''}
                          >
                            <Image src={image} alt="" />
                          </ImageWrap>
                        );
                      })}
                    </ImageColumn>
                    <ImagePreviewWrap>
                      <ImagePreview src={gallery[previewImage]} alt="" />
                    </ImagePreviewWrap>
                  </Left>
                  <Right>
                    <Title>
                      <Brand>{brand}</Brand>
                      <Name>{name}</Name>
                    </Title>
                    {attrValues.length
                      ? attrValues.map(({ id, items, name }) => {
                          return (
                            <AttributeSelector
                              key={id}
                              values={items}
                              text={name}
                              noSpan
                              gap="12px"
                            />
                          );
                        })
                      : ''}
                    {colorValues.length ? (
                      <ColorSelector values={colorValues[0].items} noSpan />
                    ) : (
                      ''
                    )}
                    <Price>
                      <PriceText>price:</PriceText>
                      <PriceValue>
                        {prices[0].currency.symbol}
                        {prices[0].amount}
                      </PriceValue>
                    </Price>
                    <Button
                      pad="16px"
                      onClick={() => this.props.addProduct(jsonParsedProduct)}
                    >
                      add to cart
                    </Button>
                    <Description>{description}</Description>
                  </Right>
                </>
              );
            }}
          </Query>
        </Wrap>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addProduct: product => dispatch(addProduct(product)),
  };
};

export default connect(null, mapDispatchToProps)(withParams(ProductPage));
