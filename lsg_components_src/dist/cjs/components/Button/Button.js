'use strict';

var React__default = require('react');
var ButtonPresentation = require('./shared/ButtonPresentation.js');

const Button = ({
  color = "primary",
  refCallback,
  loadingText,
  ...props
}) => (/*#__PURE__*/React__default.createElement(ButtonPresentation.ButtonPresentation, {
  actionRef: refCallback,
  loadingAriaLabel: loadingText,
  color,
  ...props
}));
Button.displayName = "Button";

exports.Button = Button;
