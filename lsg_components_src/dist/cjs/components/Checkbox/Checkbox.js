'use strict';

var React__default = require('react');
require('../InputGroup/InputGroup.js');
require('../InputGroup/RadioGroup.js');
var CheckboxGroup = require('../InputGroup/CheckboxGroup.js');
require('../InputGroup/SwitchGroup.js');
var CheckboxWrapper = require('./shared/CheckboxWrapper.js');

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

const Checkbox = props => /*#__PURE__*/React__default__namespace.createElement(CheckboxWrapper.CheckboxWrapper, {
  ...props
});
Checkbox.displayName = "Checkbox";
Checkbox.Group = CheckboxGroup.CheckboxGroup;

exports.Checkbox = Checkbox;
