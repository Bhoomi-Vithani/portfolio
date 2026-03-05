'use strict';

var React__default = require('react');
var NavigationBlockPresentation = require('./NavigationBlockPresentation.js');

// @ts-strict-ignore
class NavigationBlockWrapper extends React__default.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      openObject: {}
    };
  }
  componentDidMount() {
    this.setState(() => ({
      counter: this.state.counter + 1
    }));
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.value !== this.props.value) {
      // render twice to update indicator
      this.setState(previousState => ({
        openObject: {},
        counter: previousState.counter + 1,
        noAnimation: false
      }));
    }
    if (prevState.openObject !== this.state.openObject) {
      // render twice to update indicator
      this.setState(previousState => ({
        counter: previousState.counter + 1
      }));
    }
  }
  render() {
    const {
      openObject
    } = this.state;
    return /*#__PURE__*/React__default.createElement(NavigationBlockPresentation.NavigationBlockPresentation, {
      ...this.props,
      activeRef: r => this.activeElement = r,
      activeElement: this.activeElement,
      openObject: openObject,
      onOpenObjectChange: newOpenObject => this.setState(() => ({
        openObject: newOpenObject
      }))
    });
  }
}
NavigationBlockWrapper.defaultProps = {
  navigationTree: []
};

exports.NavigationBlockWrapper = NavigationBlockWrapper;
