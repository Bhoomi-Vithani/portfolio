'use strict';

var React__default = require('react');
var DateTextFieldWrapper = require('./shared/DateTextFieldWrapper.js');

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

const DateTextField = ({
  optional,
  readOnly,
  clearIcon = true,
  minDate = new Date(100, 0, 1),
  maxDate = new Date(9999, 11, 31),
  dateFormat = "day",
  ...otherProps
}) => (/*#__PURE__*/React__default__namespace.createElement(DateTextFieldWrapper.DateTextFieldWrapper, {
  ...otherProps,
  minDate: minDate,
  maxDate: maxDate,
  optional: !!optional,
  optionalText: typeof optional === "string" ? optional : undefined,
  readonly: readOnly,
  clearIcon: clearIcon,
  dateFormat: dateFormat
}));
DateTextField.displayName = "DateTextfield";

exports.DateTextField = DateTextField;
