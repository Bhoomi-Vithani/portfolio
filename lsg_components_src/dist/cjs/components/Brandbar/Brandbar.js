'use strict';

var React__default = require('react');
var BrandbarPresentation = require('./shared/BrandbarPresentation.js');

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

/** @deprecated 27.11.2024 - Use brandBar props directly from Footer instead. */
const Brandbar = ({
  logoAlt,
  logoLabel,
  ...props
}) => (/*#__PURE__*/React__default__namespace.createElement(BrandbarPresentation.BrandbarPresentation, {
  logoLabel: logoLabel || logoAlt,
  ...props
}));
Brandbar.displayName = "Brandbar";

exports.Brandbar = Brandbar;
