'use strict';

var React__default = require('react');
require('../InputGroup/InputGroup.js');
require('../InputGroup/RadioGroup.js');
require('../InputGroup/CheckboxGroup.js');
var SwitchGroup = require('../InputGroup/SwitchGroup.js');
var SwitchWrapper = require('./shared/SwitchWrapper.js');

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

/* eslint-disable react/require-default-props */
const Switch = props => /*#__PURE__*/React__default__namespace.createElement(SwitchWrapper.SwitchWrapper, {
  ...props
});
Switch.displayName = "Switch";
Switch.Group = SwitchGroup.SwitchGroup;

exports.Switch = Switch;
