import React, { Component } from 'react';

import { Wrap, Text, Picker, Box, Value } from './size-picker.style';

export class SizePicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedSize: 1,
    };
  }

  selectSize = index => {
    this.setState({
      selectedSize: index,
    });
  };

  render() {
    const sizes = ['xs', 's', 'm', 'l'];
    return (
      <Wrap>
        <Text
          inheritFont={this.props.inheritFont}
          fontSize={this.props.fontSize}
          fontWeight={this.props.fontWeight}
          fontCase={this.props.fontCase}
        >
          size:
        </Text>
        <Picker noSpan={this.props.noSpan}>
          {sizes.map((size, i) => {
            return (
              <Box
                key={i}
                boxWidth={this.props.boxWidth}
                boxHeight={this.props.boxHeight}
                gap={this.props.gap}
                selected={i === this.state.selectedSize}
                onClick={() => this.selectSize(i)}
              >
                <Value boxFontSize={this.props.boxFontSize}>{size}</Value>
              </Box>
            );
          })}
        </Picker>
      </Wrap>
    );
  }
}

export default SizePicker;
