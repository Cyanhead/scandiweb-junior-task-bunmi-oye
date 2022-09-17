import React, { Component } from 'react';

import { Wrap, Text, Picker, Border, Box } from './color-selector.style';

class ColorSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedColor: 0,
    };
  }

  selectColor = index => {
    this.setState({
      selectedColor: index,
    });
  };

  render() {
    const {
      mar,
      inheritFont,
      fontSize,
      fontWeight,
      fontCase,
      noSpan,
      borderSize,
      boxWidth,
      boxHeight,
      gap,
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
          color:
        </Text>
        <Picker noSpan={noSpan}>
          {values !== undefined &&
            values.map((color, i) => {
              return (
                <Border
                  key={i}
                  selected={i === this.state.selectedColor}
                  onClick={() => this.selectColor(i)}
                  borderSize={borderSize}
                >
                  <Box
                    boxWidth={boxWidth}
                    boxHeight={boxHeight}
                    gap={gap}
                    bg={color.value}
                  />
                </Border>
              );
            })}
        </Picker>
      </Wrap>
    );
  }
}

export default ColorSelector;
