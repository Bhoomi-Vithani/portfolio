'use strict';

var React__default = require('react');
var React = require('../../utils/React.js');
var MenulikeItemPresentation = require('../_MenulikeItem/MenulikeItemPresentation.js');

const SelectOptionPresentation = React.fRef(({
  hasMouseHover,
  hasKeyboardFocus,
  ariaSelected,
  disabled,
  label,
  id,
  onClick,
  onMouseOver,
  ref,
  optionValue,
  children
}) => (/*#__PURE__*/React__default.createElement(MenulikeItemPresentation.MenulikeItemPresentation, {
  id,
  onClick,
  disabled,
  onMouseOver,
  hasMouseHover,
  ref,
  hasKeyboardFocus,
  optionValue,
  hasTabIndex: false,
  role: "option",
  ariaSelected: ariaSelected,
  as: "li"
}, label || children)));
SelectOptionPresentation.displayName = "SelectOptionPresentation";

exports.SelectOptionPresentation = SelectOptionPresentation;
