'use strict';

var React__default = require('react');
var DataTableSelectionFooterPresentation = require('./DataTableSelectionFooterPresentation.js');

class DataTableSelectionFooterWrapper extends React__default.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      hasMouseHover,
      hasKeyboardFocus
    } = this.state;
    return /*#__PURE__*/React__default.createElement(DataTableSelectionFooterPresentation.DataTableSelectionFooterPresentation, {
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
DataTableSelectionFooterWrapper.defaultProps = {};

exports.DataTableSelectionFooterWrapper = DataTableSelectionFooterWrapper;
