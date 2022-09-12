import React, { Component } from 'react';

import { Wrap, Text, Picker, Border, Box } from './color-picker.style';

export class ColorPicker extends Component {
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
    const colors = ['#0ff', '#f0f', '#ff0', '#00f', '#0f0', '#f00'];
    return (
      <Wrap>
        <Text
          inheritFont={this.props.inheritFont}
          fontSize={this.props.fontSize}
          fontWeight={this.props.fontWeight}
          fontCase={this.props.fontCase}
        >
          color:
        </Text>
        <Picker noSpan={this.props.noSpan}>
          {colors.map((color, i) => {
            return (
              <Border
                key={i}
                selected={i === this.state.selectedColor}
                onClick={() => this.selectColor(i)}
                borderSize={this.props.borderSize}
              >
                <Box
                  boxWidth={this.props.boxWidth}
                  boxHeight={this.props.boxHeight}
                  gap={this.props.gap}
                  bg={color}
                />
              </Border>
            );
          })}
        </Picker>
      </Wrap>
    );
  }
}

export default ColorPicker;
