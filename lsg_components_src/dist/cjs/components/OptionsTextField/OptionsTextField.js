'use strict';

var React__default = require('react');
var OptionsTextFieldPresentation = require('./shared/OptionsTextFieldPresentation.js');

function _interopNamespaceDefault(e) {
	var n = Object.create(null);
	if (e) {
		Object.keys(e).forEach(function (k) {
			if (k !== 'default') {
				var d = Object.getOwnPropertyDescriptor(e, k);
				Object.defineProperty(n, k, d.get ? d : {
					enumerable: true,
					get: function () { return e[k]; }
				});
			}
		});
	}
	n.default = e;
	return Object.freeze(n);
}

var React__default__namespace = /*#__PURE__*/_interopNamespaceDefault(React__default);

// @ts-strict-ignore
const OptionsTextField = ({
  optional,
  readOnly,
  clearIcon = true,
  optionsProps,
  onKeyDown = () => {},
  onClick,
  type,
  value,
  textArea,
  groupLabel,
  as = "input",
  ...otherProps
}) => (/*#__PURE__*/React__default__namespace.createElement(OptionsTextFieldPresentation.OptionsTextFieldPresentation, {
  ...otherProps,
  groupLabel: groupLabel,
  value: value,
  type: type,
  as: typeof textArea !== "undefined" ? "textarea" : as,
  clearIcon: clearIcon,
  onKeyDown: e => onKeyDown(e.key, otherProps.name, e),
  onInputClick: onClick,
  optional: !!optional,
  optionalText: typeof optional === "string" ? optional : undefined,
  readonly: readOnly,
  optionsProps: optionsProps && {
    ...optionsProps,
    readonly: optionsProps.readOnly
  }
}));
OptionsTextField.displayName = "OptionsTextField";

exports.OptionsTextField = OptionsTextField;
