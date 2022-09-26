import React, { Component } from 'react';
import {
  SelectWrap,
  SelectButton,
  DropdownMenu,
  DropdownItem,
  ChevronDown,
} from './select.style';

import arrow from '../../assets/images/chevron_down.svg';
import CloseModalOnClickOutside from '../CloseModalOnClickOutside';

class Select extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentValue: '',
      isOpen: false,
      showArrowOnHover: false,
    };
  }

  toggleDropdown = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  handleClose = () => {
    this.setState({
      isOpen: false,
    });
  };

  handleValueChange = (displayValue, obj) => {
    this.setState({
      currentValue: displayValue,
    });

    if (this.props.updateParent && this.props.passObj) {
      this.props.setSelect(obj);
    } else if (this.props.updateParent) {
      this.props.setSelect(displayValue);
    }
  };

  handleChange = (displayValue, obj) => {
    this.handleValueChange(displayValue, obj);
    this.handleClose();
  };

  render() {
    const {
      values,
      anchor,
      noArrow,
      selectCase,
      optionCase,
      pad,
      width,
      passObj,
      hoverArrow,
      arrowW,
      arrowML,
      top,
    } = this.props;
    const { currentValue, isOpen, showArrowOnHover } = this.state;

    return (
      <SelectWrap anchor={anchor}>
        <SelectButton
          onClick={this.toggleDropdown}
          selectCase={selectCase}
          pad={pad}
          width={width}
          onMouseEnter={() => this.setState({ showArrowOnHover: true })}
          onMouseLeave={() => this.setState({ showArrowOnHover: false })}
        >
          {currentValue !== '' ? currentValue : values[0].displayValue}
          {noArrow ? (
            ''
          ) : hoverArrow ? (
            <ChevronDown
              src={arrow}
              alt=""
              isVisible={isOpen}
              hoverArrow={showArrowOnHover}
              arrowW={arrowW}
              arrowML={arrowML}
            />
          ) : (
            <ChevronDown
              src={arrow}
              alt=""
              isVisible={isOpen}
              show
              arrowW={arrowW}
              arrowML={arrowML}
            />
          )}
        </SelectButton>
        <CloseModalOnClickOutside trigger={this.handleClose}>
          <DropdownMenu isVisible={isOpen} top={top}>
            {values.map((value, index) => (
              <DropdownItem
                onClick={
                  passObj
                    ? () => this.handleChange(value.displayValue, value)
                    : () => this.handleChange(value.displayValue)
                }
                active={value === currentValue}
                key={index}
                optionCase={optionCase}
              >
                {value.displayValue}&nbsp;
                {value.selectValue}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </CloseModalOnClickOutside>
      </SelectWrap>
    );
  }
}

export default Select;
