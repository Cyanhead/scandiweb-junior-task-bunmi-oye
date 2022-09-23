import React, { Component } from 'react';

import { Wrap, Text, Picker, Box, Value } from './attribute-selector';

class AttributeSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initialAttribute: this.props.attribute,
    };
  }

  componentDidMount() {
    // * sets first index as default value
    if (this.props.setDefaults) {
      // create a new copy of attribute from state
      const newAttribute = structuredClone(this.state.initialAttribute);
      // add a "selected: false" key-value pair to all items
      newAttribute.items.forEach(item => (item.selected = false));
      // set the "select" key of the item on the first ...
      // ... index to true as a default value
      newAttribute.items[0].selected = true;
      // update state
      this.setState({
        initialAttribute: newAttribute,
      });
    }
  }

  selectValue = index => {
    // create a new copy of attribute from state
    const newAttribute = structuredClone(this.state.initialAttribute);
    // add a "selected: false" key-value pair to all items
    newAttribute.items.forEach(item => (item.selected = false));
    // set the "select" key of the item on the first ...
    // ... index to true as a default value
    newAttribute.items[index].selected = true;

    // update state
    this.setState({
      initialAttribute: newAttribute,
    });

    // update parent product state
    if (this.props.allowUpdate) {
      this.props.updateAttributes(newAttribute);
    }
  };

  render() {
    const {
      mar,
      inheritFont,
      fontSize,
      fontWeight,
      fontCase,
      noSpan,
      boxWidth,
      boxHeight,
      gap,
      boxFontSize,
    } = this.props;

    const options = this.state.initialAttribute.items;
    const name = this.state.initialAttribute.id;

    return (
      <Wrap mar={mar}>
        <Text
          inheritFont={inheritFont}
          fontSize={fontSize}
          fontWeight={fontWeight}
          fontCase={fontCase}
        >
          {name || 'size'}:
        </Text>
        <Picker noSpan={noSpan}>
          {options !== undefined &&
            options.map((option, i) => {
              return (
                <Box
                  key={i}
                  boxWidth={boxWidth}
                  boxHeight={boxHeight}
                  gap={gap}
                  selected={option.selected === true}
                  onClick={() => this.selectValue(i)}
                >
                  <Value boxFontSize={boxFontSize}>{option.value}</Value>
                </Box>
              );
            })}
        </Picker>
      </Wrap>
    );
  }
}

export default AttributeSelector;
