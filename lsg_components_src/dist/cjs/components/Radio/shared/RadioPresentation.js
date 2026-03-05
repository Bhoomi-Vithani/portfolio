'use strict';

var React__default = require('react');
var TogglePresentation = require('../../_Toggle/TogglePresentation.js');
var Radio_styles = require('./Radio.styles.js');

const RadioPresentation = props => (/*#__PURE__*/React__default.createElement(TogglePresentation.TogglePresentation, {
  ...props,
  hostClass: Radio_styles.hostClass,
  type: "radio"
}));
RadioPresentation.displayName = "RadioPresentation";

exports.RadioPresentation = RadioPresentation;
