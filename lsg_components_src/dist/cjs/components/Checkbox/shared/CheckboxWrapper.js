'use strict';

var React__default = require('react');
var CheckboxPresentation = require('./CheckboxPresentation.js');

const CheckboxWrapper = props => {
  const [hasMouseHover, setHasMouseOver] = React__default.useState(false);
  const [hasKeyboardFocus, setHasKeyboardFocus] = React__default.useState(false);
  return /*#__PURE__*/React__default.createElement(CheckboxPresentation.CheckboxPresentation, {
    ...props,
    hasKeyboardFocus: hasKeyboardFocus,
    onKeyboardFocusChange: setHasKeyboardFocus,
    hasMouseHover: props.hasMouseHover || hasMouseHover,
    onMouseHoverChange: props.onMouseHoverChange || (newHoverState => setHasMouseOver(newHoverState))
  });
};

exports.CheckboxWrapper = CheckboxWrapper;
