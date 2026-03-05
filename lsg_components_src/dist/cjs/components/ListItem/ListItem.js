'use strict';

var React__default = require('react');
var ListItemPresentation = require('./shared/ListItemPresentation.js');

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

const ListItem = ({
  iconColor = "default",
  ...props
}) => (/*#__PURE__*/React__default__namespace.createElement(ListItemPresentation.ListItemPresentation, {
  iconColor: iconColor,
  ...props
}));
ListItem.displayName = "List.Item";

exports.ListItem = ListItem;
