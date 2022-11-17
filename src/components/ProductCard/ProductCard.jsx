import React, { PureComponent } from 'react';
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
import { connect } from 'react-redux';
import { addProduct } from '../../redux';

class ProductCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      enlarge: false,
      cartBtnover: false,
      selectedAttributes: null,
    };
  }

  componentDidUpdate = (_, prevState) => {
    // * if selected attribute state has not been updated ...
    // * ... set the first indices of all attributes as default
    if (prevState && prevState.selectedAttributes === null) {
      const initialAttributes = this.props.product.attributes;

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
    const { product, addProduct, globalCurrency } = this.props;
    const { id, gallery, inStock, brand, name, prices } = product;
    const { show, enlarge, cartBtnover, selectedAttributes } = this.state;

    const handleSelectedAttributes = product => {
      const jsonParsedProduct = JSON.parse(JSON.stringify(product));

      jsonParsedProduct.attributes = this.state.selectedAttributes;
      return jsonParsedProduct;
    };

    return (
      <Container>
        <ProductLink to={cartBtnover ? '' : `/product/${id}`}>
          <Wrap onMouseEnter={this.showCartBtn} onMouseLeave={this.hideCartBtn}>
            <Top>
              <ImageWrap available={inStock}>
                <Image src={gallery[0] || fallback} alt="" />
                {inStock && (
                  <HoverCartButton
                    onClick={() => addProduct(product)}
                    visible={show}
                    enlarge={enlarge}
                    cartBtnover={cartBtnover}
                    handleOpenAttrSelect={this.handleOpenAttrSelect}
                    handleCloseAttrSelect={this.handleCloseAttrSelect}
                    enableCartBtnClick={this.enableCartBtnClick}
                    disableCartBtnClick={this.disableCartBtnClick}
                    attributes={selectedAttributes}
                    product={product}
                    handleSelectedAttributes={handleSelectedAttributes}
                    updateAttributes={this.updateAttributes}
                  />
                )}
              </ImageWrap>
              <OutOfStock show={inStock}>out of stock</OutOfStock>
            </Top>
            <Bottom available={inStock}>
              <Title>
                <ProductBrand>{brand}</ProductBrand>
                <ProductName>{name}</ProductName>
              </Title>
              <Price>
                {globalCurrency && globalCurrency.symbol}
                {globalCurrency !== undefined &&
                  prices.find(
                    price => price.currency.label === globalCurrency.label
                  ).amount}
              </Price>
            </Bottom>
          </Wrap>
        </ProductLink>
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
export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
