'use strict';

var React__default = require('react');
var BadgePresentation = require('../Badge/shared/BadgePresentation.js');
var IconLinkGroup = require('../IconLinkGroup/IconLinkGroup.js');
var IconLinkWrapper = require('./shared/IconLinkWrapper.js');

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

const IconLink = ({
  color = "primary",
  iconVariant = "outline",
  refCallback,
  label,
  showBadge,
  badgeText,
  loadingText,
  ...props
}) => (/*#__PURE__*/React__default__namespace.createElement(IconLinkWrapper.IconLinkWrapper, {
  ...props,
  color: color,
  iconVariant: iconVariant,
  actionRef: refCallback,
  label: label,
  badge: showBadge && /*#__PURE__*/React__default__namespace.createElement(BadgePresentation.BadgePresentation, null, badgeText),
  loadingAriaLabel: loadingText
}));
IconLink.Group = IconLinkGroup.IconLinkGroup;
IconLink.displayName = "IconLink";

exports.IconLink = IconLink;
