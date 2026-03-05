'use strict';

var React__default = require('react');
require('../InputGroup/InputGroup.js');
var RadioGroup = require('../InputGroup/RadioGroup.js');
require('../InputGroup/CheckboxGroup.js');
require('../InputGroup/SwitchGroup.js');
var RadioWrapper = require('./shared/RadioWrapper.js');

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

const Radio = props => /*#__PURE__*/React__default__namespace.createElement(RadioWrapper.RadioWrapper, {
  ...props
});
Radio.displayName = "Radio";
Radio.Group = RadioGroup.RadioGroup;

exports.Radio = Radio;
