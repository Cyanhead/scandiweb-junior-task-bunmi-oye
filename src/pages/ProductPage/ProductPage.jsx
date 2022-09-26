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
import { Button } from '../../components/Button';
import withParams from '../../hocs';
import { FETCH_PRODUCT } from '../../graphql/queries';
import { connect } from 'react-redux';
import { addProduct } from '../../redux';
import { graphql } from '@apollo/client/react/hoc';

class ProductPageComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      previewImage: 0,
      selectedAttributes: null,
    };
  }

  componentDidMount() {
    const id = this.props.params.productId;
    this.props.data.refetch({ productId: id });
  }

  componentDidUpdate = (prevProps, prevState) => {
    // * if selected attribute state has not been updated ...
    // * ... set the first indices of all attributes as default
    if (prevState && prevState.selectedAttributes === null) {
      const initialAttributes = this.props.data.product.attributes;

      // convert array from read-only to mutable
      const jsonParsedAttributeArray = JSON.parse(
        JSON.stringify(initialAttributes)
      );

      const handleDefaultAttributes = attributesList => {
        const newList = structuredClone(attributesList);
        // map through the attributes
        newList.forEach(attr => {
          // add a "selected: false" key-value pair to all items
          attr.items.map(item => (item.selected = false));
          // set the "select" key of the item on the first ...
          // ... index to true as a default value
          attr.items[0].selected = true;
        });

        return newList;
      };

      const modifiedAttributes = handleDefaultAttributes(
        jsonParsedAttributeArray
      );

      this.setState({
        selectedAttributes: modifiedAttributes,
      });
    }
  };

  // * change the index of the large (preview) image
  setPreviewImage = index => {
    this.setState({
      previewImage: index,
    });
  };

  // * update the product attributes state
  updateAttributes = attrObj => {
    // clone the received attribute object
    const attributesList = structuredClone(this.state.selectedAttributes);
    // check if the attribute already exists in product attributes state
    const foundAttrInList = attributesList.find(attr => attr.id === attrObj.id);

    if (foundAttrInList) {
      // if attribute exists, find the index and update ...
      // ... default value to new value(from selector)
      const foundAttrInListIndex = attributesList.findIndex(
        attr => attr.id === attrObj.id
      );
      attributesList[foundAttrInListIndex].items = attrObj.items;
    } else {
      // if attribute doesn't exist, add a new entry
      attributesList.push(attrObj);
    }

    // update the state with the new values
    this.setState({
      selectedAttributes: attributesList,
    });
  };

  render() {
    const { loading, error, product } = this.props.data;
    if (loading)
      return (
        <Container>
          <Wrap>
            <h1>Loading...</h1>
          </Wrap>
        </Container>
      );
    if (error)
      return (
        <Container>
          <Wrap>
            <h1>Error:(</h1>
          </Wrap>
        </Container>
      );
    // JSON parsed product data to be ...
    // ... passed to cart state on add to cart
    const jsonParsedProduct = JSON.parse(JSON.stringify(product));

    const { name, gallery, description, brand, attributes, prices } =
      jsonParsedProduct;

    const { previewImage } = this.state;

    // on add-to-cart btn click, update the attributes from state
    const handleSelectedAttributes = product => {
      product.attributes = this.state.selectedAttributes;
      return product;
    };

    const { addProduct, globalCurrency } = this.props;

    return (
      <Container>
        <Wrap>
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
            {attributes.length
              ? attributes.map(attribute => {
                  return (
                    <AttributeSelector
                      key={attribute.id}
                      attribute={attribute}
                      setDefaults
                      allowUpdate
                      updateAttributes={this.updateAttributes}
                      noSpan
                      gap="12px"
                    />
                  );
                })
              : ''}

            <Price>
              <PriceText>price:</PriceText>
              <PriceValue>
                {globalCurrency && globalCurrency.symbol}
                {globalCurrency.label !== undefined &&
                  prices.find(
                    price => price.currency.label === globalCurrency.label
                  ).amount}
              </PriceValue>
            </Price>
            <Button
              pad="16px"
              onClick={() =>
                addProduct(handleSelectedAttributes(jsonParsedProduct))
              }
            >
              add to cart
            </Button>
            <Description
              // i use this for lack of finding a better solution
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </Right>
        </Wrap>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    globalCurrency: state.currency.globalCurrency,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addProduct: product => dispatch(addProduct(product)),
  };
};

// connect to redux
const withProductPageComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(withParams(ProductPageComponent));

// Create enhancer function for apollo HOC
const withProductQuery = graphql(FETCH_PRODUCT, {
  options: () => ({ variables: { productId: '' } }),
});

// Enhance component.
const ProductPage = withProductQuery(withProductPageComponent);

// Export the enhanced component.
export default ProductPage;
