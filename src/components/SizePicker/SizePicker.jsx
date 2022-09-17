import React, { Component } from 'react';

import { Wrap, Text, Picker, Box, Value } from './size-picker.style';

export class SizePicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedSize: 0,
    };
  }

  selectSize = index => {
    this.setState({
      selectedSize: index,
    });
  };

  render() {
    const {
      mar,
      inheritFont,
      fontSize,
      fontWeight,
      fontCase,
      text,
      noSpan,
      boxWidth,
      boxHeight,
      gap,
      boxFontSize,
      values,
    } = this.props;

    return (
      <Wrap mar={mar}>
        <Text
          inheritFont={inheritFont}
          fontSize={fontSize}
          fontWeight={fontWeight}
          fontCase={fontCase}
        >
          {text || 'size'}:
        </Text>
        <Picker noSpan={noSpan}>
          {values !== undefined &&
            values.map((size, i) => {
              return (
                <Box
                  key={i}
                  boxWidth={boxWidth}
                  boxHeight={boxHeight}
                  gap={gap}
                  selected={i === this.state.selectedSize}
                  onClick={() => this.selectSize(i)}
                >
                  <Value boxFontSize={boxFontSize}>{size.value}</Value>
                </Box>
              );
            })}
        </Picker>
      </Wrap>
    );
  }
}

export default SizePicker;
