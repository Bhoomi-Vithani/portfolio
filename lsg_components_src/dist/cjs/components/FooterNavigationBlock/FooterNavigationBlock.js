'use strict';

var React__default = require('react');
var FooterNavigationBlockPresentation = require('./shared/FooterNavigationBlockPresentation.js');

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

const FooterNavigationBlock = ({
  footerNavigationBlockAs = "h3",
  ...props
}) => (/*#__PURE__*/React__default__namespace.createElement(FooterNavigationBlockPresentation.FooterNavigationBlockPresentation, {
  footerNavigationBlockAs: footerNavigationBlockAs,
  ...props
}));
FooterNavigationBlock.displayName = "FooterNavigation.Block";

exports.FooterNavigationBlock = FooterNavigationBlock;
