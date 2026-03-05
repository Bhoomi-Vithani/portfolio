'use strict';

var React__default = require('react');
var ClickListItemWrapper = require('../ClickListItem/shared/ClickListItemWrapper.js');

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

const ClickListMultiActionsItem = ({
  ...props
}) => (/*#__PURE__*/React__default__namespace.createElement(ClickListItemWrapper.ClickListItemWrapper, {
  ...props,
  look: "multiaction",
  headlineAs: props.headlineAs || "strong"
}));
// TODO v20 Use PascalCase for React Components correctly for alternative name with "." ->
//  "ClickList.MultiActions.Item"
ClickListMultiActionsItem.displayName = "ClickList.Multiactions.Item";

exports.ClickListMultiActionsItem = ClickListMultiActionsItem;
