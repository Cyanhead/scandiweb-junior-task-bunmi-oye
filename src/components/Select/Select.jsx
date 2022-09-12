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

  handleValueChange = newValue => {
    this.setState({
      currentValue: newValue,
    });
  };

  handleChange = value => {
    this.handleValueChange(value);
    this.handleClose();
  };

  render() {
    const { values, anchor, noArrow, selectCase, optionCase } = this.props;
    const { currentValue, isOpen } = this.state;

    return (
      <SelectWrap anchor={anchor}>
        <SelectButton onClick={this.toggleDropdown} selectCase={selectCase}>
          {currentValue !== '' ? currentValue : values[0].displayValue}
          {noArrow ? (
            ''
          ) : (
            <ChevronDown
              src={arrow}
              alt=""
              isVisible={isOpen}
              arrowW={this.props.arrowW}
              arrowML={this.props.arrowML}
            />
          )}
        </SelectButton>
        <CloseModalOnClickOutside trigger={this.handleClose}>
          <DropdownMenu isVisible={isOpen}>
            {values.map((value, index) => (
              <DropdownItem
                onClick={() => this.handleChange(value.displayValue)}
                active={value === currentValue}
                key={index}
                optionCase={optionCase}
              >
                {value.displayValue}
                {value.selectValue && <p>&nbsp;{value.selectValue}</p>}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </CloseModalOnClickOutside>
      </SelectWrap>
    );
  }
}

export default Select;
