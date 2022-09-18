import React, { Component } from 'react';

import { Wrap, IconWrap, Icon, Text } from './counter.style';

import plus from '../../assets/images/plus.svg';
import minus from '../../assets/images/minus.svg';
import { connect } from 'react-redux';
import { changeQuantity } from '../../redux';

class Counter extends Component {
  render() {
    const {
      mar,
      width,
      height,
      fontSize,
      id,
      quantity,
      increaseCount,
      decreaseCount,
    } = this.props;

    return (
      <Wrap mar={mar}>
        <IconWrap onClick={() => increaseCount(id)}>
          <Icon src={plus} alt="" width={width} height={height} />
        </IconWrap>
        <Text fontSize={fontSize}>{quantity}</Text>
        <IconWrap onClick={() => decreaseCount(id)}>
          <Icon src={minus} alt="" width={width} height={height} />
        </IconWrap>
      </Wrap>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increaseCount: id => dispatch(changeQuantity(id, 'inc')),
    decreaseCount: id => dispatch(changeQuantity(id, 'dec')),
  };
};

export default connect(null, mapDispatchToProps)(Counter);
