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
import ColorPicker from '../ColorPicker';
import SizePicker from '../SizePicker';

class HoverCartButton extends Component {
  render() {
    const { visible, enlarge, handleOpenAttrSelect, handleCloseAttrSelect } =
      this.props;
    return (
      <Wrap
        show={visible}
        enlarge={enlarge}
        onClick={enlarge ? () => {} : handleOpenAttrSelect}
      >
        {enlarge && (
          <AttrSelect enlarge={enlarge}>
            {enlarge && (
              <>
                <Top>
                  <IconWrap>
                    <ArrowWrap onClick={handleCloseAttrSelect}>
                      <Icon src={arrow} alt="" />
                    </ArrowWrap>
                  </IconWrap>
                  <SizePicker mar="10px 0" />
                  <ColorPicker mar="10px 0" />
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
