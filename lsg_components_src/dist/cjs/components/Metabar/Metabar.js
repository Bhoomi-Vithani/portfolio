'use strict';

var React__default = require('react');
var FooterMetabarPresentation = require('../FooterMetabar/shared/FooterMetabarPresentation.js');

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

/** @deprecated 19.2.2025 - Use metaBar props directly from Footer instead. For the ProcessPage, use the
 *  FooterMetabar component instead.   */
const Metabar = ({
  navigationAriaLabel,
  horizontallyCentered,
  navigationTreeAriaLabel,
  ...props
}) => (/*#__PURE__*/React__default__namespace.createElement(FooterMetabarPresentation.FooterMetabarPresentation, {
  navigationAriaLabel: navigationAriaLabel || navigationTreeAriaLabel,
  ...props,
  horizontalAlignment: horizontallyCentered ? "center" : undefined
}));
Metabar.displayName = "Metabar";

exports.Metabar = Metabar;
