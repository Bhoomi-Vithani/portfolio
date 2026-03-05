'use strict';

var React__default = require('react');
var TwoLineItemPresentation = require('./shared/TwoLineItemPresentation.js');

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

// TODO V20 - decide if labelAs default value should be removed
//  https://confluence.intranet.commerzbank.com/display/LSG/Release+20.0
const TwoLineItem = ({
  badgeLook,
  badgeColor = "primary",
  badgeIconVariant = "solid",
  iconVariant = "outline",
  labelAs = "strong",
  sublineAs = "p",
  ...props
}) => (/*#__PURE__*/React__default__namespace.createElement(TwoLineItemPresentation.TwoLineItemPresentation, {
  badgeColor: badgeLook || badgeColor,
  badgeIconVariant: badgeIconVariant,
  iconVariant: iconVariant,
  labelAs: labelAs,
  sublineAs: sublineAs,
  ...props
}));
TwoLineItem.displayName = "TwoLineItem";

exports.TwoLineItem = TwoLineItem;
