import React, { Component } from 'react';

import {
  Wrap,
  AttrSelect,
  Top,
  IconWrap,
  Icon,
  ArrowWrap,
} from './hover-cart-button.style';

import cart from '../../assets/images/empty_cart_white.svg';
import arrow from '../../assets/images/arrow_black.svg';

import { Button } from '../Button';
import AttributeSelector from '../AttributeSelector';
import { connect } from 'react-redux';
import { addProduct } from '../../redux';

class HoverCartButton extends Component {
  render() {
    const {
      visible,
      enlarge,
      handleOpenAttrSelect,
      handleCloseAttrSelect,
      enableCartBtnClick,
      disableCartBtnClick,
      attributes,
      onClick,
      product,
      handleSelectedAttributes,
      updateAttributes,
    } = this.props;

    return (
      <Wrap
        show={visible}
        enlarge={enlarge}
        // if the product has attributes, allow attribute ...
        // ... selection. But if no attributes, add to cart
        onClick={
          attributes && attributes.length
            ? enlarge
              ? () => {}
              : handleOpenAttrSelect
            : onClick
        }
        onMouseEnter={enableCartBtnClick}
        onMouseLeave={disableCartBtnClick}
      >
        {enlarge && (
          <AttrSelect enlarge={enlarge}>
            {enlarge && (
              <>
                <Top>
                  <IconWrap>
                    <ArrowWrap onClick={handleCloseAttrSelect}>
                      <Icon src={arrow} alt="" width="20px" height="20px" />
                    </ArrowWrap>
                  </IconWrap>
                  {attributes.length
                    ? attributes.map(attribute => {
                        return (
                          <AttributeSelector
                            key={attribute.id}
                            setDefaults={false}
                            attribute={attribute}
                            allowUpdate
                            updateAttributes={updateAttributes}
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
                </Top>
                <Button
                  onClick={() =>
                    this.props.addProduct(handleSelectedAttributes(product))
                  }
                >
                  add to cart
                </Button>
              </>
            )}
          </AttrSelect>
        )}
        {!enlarge && (
          <IconWrap>
            <Icon src={cart} alt="" />
          </IconWrap>
        )}
      </Wrap>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addProduct: product => dispatch(addProduct(product)),
  };
};

// connect to redux
export default connect(null, mapDispatchToProps)(HoverCartButton);
