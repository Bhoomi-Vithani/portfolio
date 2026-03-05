'use strict';

var React__default = require('react');
var RadioGroupWrapper = require('../_RadioGroup/RadioGroupWrapper.js');

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
const RadioGroup = props => (
/*#__PURE__*/
// This only doesnt throw an error, because strict mode is disabled.
React__default__namespace.createElement(RadioGroupWrapper.RadioGroupWrapper, {
  ...props,
  value: props.value,
  label: props.label
}));
RadioGroup.displayName = "Radio.Group";

exports.RadioGroup = RadioGroup;
