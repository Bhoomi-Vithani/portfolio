'use strict';

var React__default = require('react');
var BreadcrumbsItemPresentation = require('./BreadcrumbsItemPresentation.js');

class BreadcrumbsItemWrapper extends React__default.Component {
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
    return /*#__PURE__*/React__default.createElement(BreadcrumbsItemPresentation.BreadcrumbsItemPresentation, {
      ...this.props,
      hasMouseHover: hasMouseHover,
      onMouseHoverChange: newHover => this.setState(() => ({
        hasMouseHover: newHover
      })),
      hasKeyboardFocus: hasKeyboardFocus,
      onKeyboardFocusChange: newFocus => this.setState(() => ({
        hasKeyboardFocus: newFocus
      }))
    });
  }
}

exports.BreadcrumbsItemWrapper = BreadcrumbsItemWrapper;
