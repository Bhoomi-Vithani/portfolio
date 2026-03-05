'use strict';

var React__default = require('react');
var TogglePresentation = require('../../_Toggle/TogglePresentation.js');
var Checkbox_styles = require('./Checkbox.styles.js');

const CheckboxPresentation = ({
  value,
  onChange = () => {
    /* empty */
  },
  ...otherProps
}) => {
  const indeterminate = value === undefined;
  return /*#__PURE__*/React__default.createElement(TogglePresentation.TogglePresentation, {
    ...otherProps,
    value: value,
    onChange: onChange,
    hostClass: Checkbox_styles.hostClass,
    type: "checkbox",
    indeterminate: indeterminate
  }, /*#__PURE__*/React__default.createElement("div", {
    className: `${Checkbox_styles.hostClass}-border`
  }), !indeterminate && (/*#__PURE__*/React__default.createElement("svg", {
    viewBox: "0 0 16 16",
    className: `${Checkbox_styles.hostClass}-svg`,
    "aria-hidden": "true"
  }, /*#__PURE__*/React__default.createElement("path", {
    className: `${Checkbox_styles.hostClass}-path`,
    fill: "none",
    stroke: "transparent",
    strokeWidth: 2,
    d: "M2,8 6,12 14,4"
  }))), indeterminate && (/*#__PURE__*/React__default.createElement("svg", {
    viewBox: "0 0 16 16",
    className: `${Checkbox_styles.hostClass}-svg`,
    "aria-hidden": "true"
  }, /*#__PURE__*/React__default.createElement("path", {
    className: `${Checkbox_styles.hostClass}-path`,
    fill: "none",
    stroke: "transparent",
    strokeWidth: 2,
    d: "M2,8 14,8"
  }))));
};
CheckboxPresentation.displayName = "CheckboxPresentation";

exports.CheckboxPresentation = CheckboxPresentation;
