'use strict';

var React__default = require('react');
var TextFieldWrapper = require('./shared/TextFieldWrapper.js');

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

const TextField = ({
  optional,
  readOnly,
  clearIcon = true,
  ...otherProps
}) => (/*#__PURE__*/React__default__namespace.createElement(TextFieldWrapper.TextFieldWrapper, {
  ...otherProps,
  clearIcon: clearIcon,
  optional: !!optional,
  optionalText: typeof optional === "string" ? optional : undefined,
  readonly: readOnly
}));
TextField.displayName = "TextField";

exports.TextField = TextField;
