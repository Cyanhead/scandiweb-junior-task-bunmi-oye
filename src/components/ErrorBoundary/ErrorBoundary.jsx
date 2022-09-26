import React, { Component } from 'react';

import {
  Wrap,
  Heading,
  TextWrap,
  Text,
  ReloadIcon,
} from './error-boundary.style';
import reload from '../../assets/images/reload.svg';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  refreshPage = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <Wrap>
          <Heading>Something went wrong!</Heading>
          <TextWrap>
            <Text>Please reload</Text>
            <ReloadIcon src={reload} alt="" onClick={this.refreshPage} />
          </TextWrap>
        </Wrap>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
