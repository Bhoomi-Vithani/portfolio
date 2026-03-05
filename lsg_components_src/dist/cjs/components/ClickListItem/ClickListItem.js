'use strict';

var React__default = require('react');
var ClickListItemWrapper = require('./shared/ClickListItemWrapper.js');

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

const ClickListItem = ({
  badgeColor,
  badgeLook,
  badgeIconVariant = "solid",
  showLinkLabel = true,
  linkIcon,
  headlineAs = linkIcon ? "strong" : "div",
  ...props
}) => (/*#__PURE__*/React__default__namespace.createElement(ClickListItemWrapper.ClickListItemWrapper, {
  badgeColor: badgeColor || badgeLook,
  badgeIconVariant: badgeIconVariant,
  showLinkLabel: showLinkLabel,
  linkIcon: linkIcon,
  headlineAs: headlineAs,
  ...props
}));
ClickListItem.displayName = "ClickList.Item";

exports.ClickListItem = ClickListItem;
