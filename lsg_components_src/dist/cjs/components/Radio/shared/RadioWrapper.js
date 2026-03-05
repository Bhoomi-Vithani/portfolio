'use strict';

var React__default = require('react');
var RadioPresentation = require('./RadioPresentation.js');

const RadioWrapper = props => {
  const [hasKeyboardFocus, setHasKeyboardFocus] = React__default.useState(false);
  const [hasMouseHover, setHasMouseHover] = React__default.useState(false);
  return /*#__PURE__*/React__default.createElement(RadioPresentation.RadioPresentation, {
    ...props,
    hasKeyboardFocus: hasKeyboardFocus,
    onKeyboardFocusChange: newFocus => setHasKeyboardFocus(newFocus),
    hasMouseHover: props.hasMouseHover || hasMouseHover,
    onMouseHoverChange: props.onMouseHoverChange || (newHover => setHasMouseHover(newHover))
  });
};

exports.RadioWrapper = RadioWrapper;
