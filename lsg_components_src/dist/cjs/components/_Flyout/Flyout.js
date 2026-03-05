'use strict';

var React__default = require('react');
var FlyoutPresentation = require('./shared/FlyoutPresentation.js');

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
/** @deprecated: Not intended to be used directly due to accessibility concerns. Please contact the LSG Team, if the component is required */
const Flyout = ({
  toggleElement,
  toggleInnerElement,
  toggleId,
  ...props
}) => (/*#__PURE__*/React__default__namespace.createElement(FlyoutPresentation.FlyoutPresentation, {
  toggleContainerElement: toggleElement,
  toggleElement: toggleInnerElement || typeof document !== "undefined" && document.getElementById(toggleId),
  ...props
}));
Flyout.displayName = "Flyout";

exports.Flyout = Flyout;
