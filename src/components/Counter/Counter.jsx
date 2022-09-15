import React, { Component } from 'react';

import { Wrap, IconWrap, Icon, Text } from './counter.style';

import plus from '../../assets/images/plus.svg';
import minus from '../../assets/images/minus.svg';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <Wrap mar={this.props.mar}>
        <IconWrap onClick={this.increment}>
          <Icon
            src={plus}
            alt=""
            width={this.props.width}
            height={this.props.height}
          />
        </IconWrap>
        <Text fontSize={this.props.fontSize}>{this.state.count}</Text>
        <IconWrap onClick={this.decrement}>
          <Icon
            src={minus}
            alt=""
            width={this.props.width}
            height={this.props.height}
          />
        </IconWrap>
      </Wrap>
    );
  }
}

export default Counter;
