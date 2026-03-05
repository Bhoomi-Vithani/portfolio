'use strict';

var React__default = require('react');
var DatePickerWrapper = require('../Datepicker/shared/DatePickerWrapper.js');

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

const ChipsDatePicker = ({
  label,
  isSelected,
  onResetFilter,
  ...props
}) => (/*#__PURE__*/React__default__namespace.createElement(DatePickerWrapper.DatePickerWrapper, {
  ...props,
  chipVariant: true,
  label: label || "",
  chipSelected: isSelected,
  chipResetFilter: onResetFilter
}));
ChipsDatePicker.displayName = "Chips.DatePicker";

exports.ChipsDatePicker = ChipsDatePicker;
