'use strict';

var React__default = require('react');
var index = require('../../../utils/Hooks/index.js');
var LinkPresentation = require('./LinkPresentation.js');

const LinkWrapper = props => {
  const [{
    hasKeyboardFocus,
    hasMouseHover
  }, {
    setHasKeyboardFocus,
    setHasMouseHover
  }, {
    onMouseDown,
    onMouseUp,
    onMouseLeave
  }] = index.useLinkHover(props);
  return /*#__PURE__*/React__default.createElement(LinkPresentation.LinkPresentation, {
    ...props,
    hasKeyboardFocus: hasKeyboardFocus,
    onKeyboardFocusChange: setHasKeyboardFocus,
    hasMouseHover: hasMouseHover,
    onMouseHoverChange: setHasMouseHover,
    onMouseDown: onMouseDown,
    onMouseUp: onMouseUp,
    onMouseLeave: onMouseLeave,
    label: props.label
  }, props.children);
};

exports.LinkWrapper = LinkWrapper;
