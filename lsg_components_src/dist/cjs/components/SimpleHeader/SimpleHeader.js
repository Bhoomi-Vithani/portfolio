'use strict';

var React__default = require('react');
var SimpleHeaderWrapper = require('./shared/SimpleHeaderWrapper.js');

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

const SimpleHeader = ({
  logoLabel,
  logoAlt,
  navigationTreeAriaLabel,
  navigationAriaLabel,
  ...props
}) => (/*#__PURE__*/React__default__namespace.createElement(SimpleHeaderWrapper.SimpleHeaderWrapper, {
  navigationAriaLabel: navigationAriaLabel || navigationTreeAriaLabel,
  logoLabel: logoLabel || logoAlt,
  ...props
}));
SimpleHeader.displayName = "SimpleHeader";

exports.SimpleHeader = SimpleHeader;
