import React, { PureComponent } from 'react';

import {
  Wrap,
  Text,
  Picker,
  Border,
  Box,
  ColorBox,
  Value,
} from './attribute-selector';

class AttributeSelector extends PureComponent {
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
      colorBoxWidth,
      colorBoxHeight,
      gap,
      boxFontSize,
      borderSize,
      disableSelect,
    } = this.props;

    const options = this.state.initialAttribute.items;
    const name = this.state.initialAttribute.id;
    const type = this.state.initialAttribute.type;

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
                <React.Fragment key={i}>
                  {type === 'text' ? (
                    <Box
                      boxWidth={boxWidth}
                      boxHeight={boxHeight}
                      gap={gap}
                      selected={option.selected === true}
                      onClick={() => this.selectValue(i)}
                      disableSelect={disableSelect}
                    >
                      <Value boxFontSize={boxFontSize}>{option.value}</Value>
                    </Box>
                  ) : (
                    <Border
                      selected={option.selected === true}
                      onClick={() => this.selectValue(i)}
                      borderSize={borderSize}
                      disableSelect={disableSelect}
                    >
                      <ColorBox
                        colorBoxWidth={colorBoxWidth || boxWidth}
                        colorBoxHeight={colorBoxHeight || boxHeight}
                        gap={gap}
                        bg={option.value}
                      />
                    </Border>
                  )}
                </React.Fragment>
              );
            })}
        </Picker>
      </Wrap>
    );
  }
}

export default AttributeSelector;
