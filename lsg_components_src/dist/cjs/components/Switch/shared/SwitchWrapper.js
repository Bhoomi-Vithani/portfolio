'use strict';

var React__default = require('react');
var SwitchPresentation = require('./SwitchPresentation.js');

class SwitchWrapper extends React__default.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasKeyboardFocus: false,
      hasMouseHover: false
    };
  }
  render() {
    const {
      hasKeyboardFocus,
      hasMouseHover
    } = this.state;
    return /*#__PURE__*/React__default.createElement(SwitchPresentation.SwitchPresentation, {
      ...this.props,
      hasKeyboardFocus: hasKeyboardFocus,
      onKeyboardFocusChange: newFocus => this.setState(() => ({
        hasKeyboardFocus: newFocus
      })),
      hasMouseHover: hasMouseHover,
      onMouseHoverChange: newHover => this.setState(() => ({
        hasMouseHover: newHover
      }))
    });
  }
}

exports.SwitchWrapper = SwitchWrapper;
