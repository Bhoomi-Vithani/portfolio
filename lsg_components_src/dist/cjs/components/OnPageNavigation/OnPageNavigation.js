'use strict';

var React__default = require('react');
var OnPageNavigationPresentation = require('./shared/OnPageNavigationPresentation.js');

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
const OnPageNavigation = props => /*#__PURE__*/React__default__namespace.createElement(OnPageNavigationPresentation.OnPageNavigationPresentation, {
  ...props
});
OnPageNavigation.displayName = "OnPageNavigation";

exports.OnPageNavigation = OnPageNavigation;
