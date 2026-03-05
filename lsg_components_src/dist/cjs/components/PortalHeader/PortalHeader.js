'use strict';

var React__default = require('react');
var PortalHeaderPresentation = require('./shared/PortalHeaderPresentation.js');

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

const PortalHeader = ({
  logoLabel,
  logoAlt,
  navigationAriaLabel,
  navigationTreeAriaLabel,
  // @ts-ignore // remove, when segmentNavigationTreeAriaLabel is removed
  segmentNavigationAriaLabel,
  segmentNavigationTreeAriaLabel,
  ...restProps
}) => (/*#__PURE__*/React__default__namespace.createElement(PortalHeaderPresentation.PortalHeaderPresentation, {
  navigationAriaLabel: navigationAriaLabel || navigationTreeAriaLabel,
  segmentNavigationAriaLabel: segmentNavigationAriaLabel || segmentNavigationTreeAriaLabel,
  logoLabel: logoLabel || logoAlt,
  ...restProps
}));
PortalHeader.displayName = "PortalHeader";

exports.PortalHeader = PortalHeader;
