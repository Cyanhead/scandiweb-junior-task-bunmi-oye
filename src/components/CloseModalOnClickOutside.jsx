import React, { Component } from 'react';

export default class CloseModalOnClickOutside extends Component {
  constructor(props) {
    super(props);

    // create ref
    this.wrapperRef = React.createRef();
  }

  componentDidMount() {
    // add listeners
    document.addEventListener('mousedown', this.handleClickOutside);
    document.addEventListener('touchstart', this.listener);
  }

  componentWillUnmount() {
    // remove listeners
    document.removeEventListener('mousedown', this.handleClickOutside);
    document.removeEventListener('touchstart', this.listener);
  }

  handleClickOutside = event => {
    // if the clicked object doesn't  ...
    // ... contain the event target, trigger action
    const extraRef =
      this.props.extraRef !== undefined
        ? !this.props.extraRef.current.contains(event.target)
        : true;

    if (
      this.wrapperRef &&
      !this.wrapperRef.current.contains(event.target) &&
      extraRef
    ) {
      this.props.trigger();
    }
  };

  render() {
    return <div ref={this.wrapperRef}>{this.props.children}</div>;
  }
}
