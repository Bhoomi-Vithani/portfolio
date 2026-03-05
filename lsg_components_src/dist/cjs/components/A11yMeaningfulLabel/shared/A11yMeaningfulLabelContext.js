'use strict';

var React__default = require('react');

const A11yMeaningfulLabelContext = /*#__PURE__*/React__default.createContext({
  onMouseHoverChange: () => {},
  onKeyboardFocusChange: () => {},
  onMouseDown: () => {},
  onMouseUp: () => {},
  onMouseLeave: () => {},
  onKeyDown: () => {},
  onKeyUp: () => {},
  onTouchStart: () => {},
  onTouchEnd: () => {},
  hasMouseHover: false,
  hasKeyboardFocus: false,
  disabled: false,
  loading: false
});

exports.A11yMeaningfulLabelContext = A11yMeaningfulLabelContext;
