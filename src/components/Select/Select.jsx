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
      open: false,
    };
  }

  handleOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({
      open: false,
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
    const { values } = this.props;
    const { currentValue, open } = this.state;

    return (
      <CloseModalOnClickOutside trigger={this.handleClose}>
        <SelectWrap>
          <SelectButton onClick={this.handleOpen}>
            {currentValue !== '' ? currentValue : values[0].displayValue}
            <ChevronDown src={arrow} alt="" isVisible={open} />
          </SelectButton>
          <DropdownMenu isVisible={open}>
            {values.map((value, index) => (
              <DropdownItem
                onClick={() => this.handleChange(value.displayValue)}
                active={value === currentValue}
                key={index}
              >
                {value.displayValue} &nbsp; <p>{value.selectValue}</p>
              </DropdownItem>
            ))}
          </DropdownMenu>
        </SelectWrap>
      </CloseModalOnClickOutside>
    );
  }
}

export default Select;
