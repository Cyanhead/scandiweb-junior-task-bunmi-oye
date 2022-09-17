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
import ColorSelector from '../ColorSelector';
import { handleAttributes } from '../../helpers/handleAttributes';

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
    } = this.props;

    const attrValues = handleAttributes(attributes);
    const colorValues = handleAttributes(attributes, 'swatch');

    return (
      <Wrap
        show={visible}
        enlarge={enlarge}
        onClick={enlarge ? () => {} : handleOpenAttrSelect}
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
                  {attrValues.length
                    ? attrValues.map(({ id, items, name }) => {
                        return (
                          <AttributeSelector
                            key={id}
                            values={items}
                            text={name}
                            inheritFont
                            fontSize="0.875em"
                            fontWeight="400"
                            fontCase="capitalize"
                            noSpan
                            boxFontSize="0.875em"
                            boxWidth="32px"
                            boxHeight="32px"
                            gap="8px"
                            mar="4px 0"
                          />
                        );
                      })
                    : ''}
                  {colorValues.length ? (
                    <ColorSelector
                      values={colorValues[0].items}
                      inheritFont
                      fontSize="0.875em"
                      fontWeight="400"
                      fontCase="capitalize"
                      noSpan
                      boxFontSize="0.875em"
                      boxWidth="32px"
                      boxHeight="32px"
                      gap="8px"
                      mar="4px 0"
                    />
                  ) : (
                    ''
                  )}
                </Top>
                <Button>add to cart</Button>
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

export default HoverCartButton;
