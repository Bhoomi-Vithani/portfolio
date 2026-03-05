'use strict';

var React__default = require('react');
var NumberTextFieldWrapper = require('./shared/NumberTextFieldWrapper.js');

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

const NumberTextField = ({
  optional,
  readOnly,
  clearIcon = true,
  ...otherProps
}) => (/*#__PURE__*/React__default__namespace.createElement(NumberTextFieldWrapper.NumberTextFieldWrapper, {
  ...otherProps,
  clearIcon: clearIcon,
  optional: !!optional,
  optionalText: typeof optional === "string" ? optional : undefined,
  readonly: readOnly
}));
NumberTextField.displayName = "NumberTextField";

exports.NumberTextField = NumberTextField;
