'use strict';

var React__default = require('react');
var TogglePresentation = require('../../_Toggle/TogglePresentation.js');
var Switch_styles = require('./Switch.styles.js');

const SwitchPresentation = ({
  value,
  //    hasMouseHover,
  //    disabled,
  //    invalid,
  ...otherProps
}) => {
  const indeterminate = value === undefined;
  return /*#__PURE__*/React__default.createElement(TogglePresentation.TogglePresentation, {
    hostClass: Switch_styles.hostClass,
    type: "switch",
    value: value,
    indeterminate: indeterminate,
    ...otherProps
  }, value && (/*#__PURE__*/React__default.createElement("svg", {
    viewBox: "0 0 16 16",
    className: `${Switch_styles.hostClass}-svg ${Switch_styles.hostClass}-svg-checked-position`,
    "aria-hidden": "true"
  }, /*#__PURE__*/React__default.createElement("path", {
    className: `${Switch_styles.hostClass}-path`,
    fill: "none",
    stroke: "transparent",
    strokeWidth: 1,
    d: "M2,8 6,12 14,4"
  }))));
};
SwitchPresentation.displayName = "SwitchPresentation";

exports.SwitchPresentation = SwitchPresentation;
