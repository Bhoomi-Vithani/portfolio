'use strict';

var React__default = require('react');
var ChipsItemActionPresentation = require('./shared/ChipsItemActionPresentation.js');

const ChipsItemAction = /*#__PURE__*/React__default.forwardRef((props, ref) => (/*#__PURE__*/React__default.createElement(ChipsItemActionPresentation.ChipsItemActionPresentation, {
  actionRef: props.refCallback,
  ref: ref,
  ...props
})));

exports.ChipsItemAction = ChipsItemAction;
