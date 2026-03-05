'use strict';

var React__default = require('react');
var ClickListPresentation = require('../ClickList/shared/ClickListPresentation.js');
var ClickListMultiActionsItem = require('../ClickListMultiActionsItem/ClickListMultiActionsItem.js');

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

const ClickListMultiActions = props => /*#__PURE__*/React__default__namespace.createElement(ClickListPresentation.ClickListPresentation, {
  ...props
});
ClickListMultiActions.displayName = "ClickList.Multiactions";
ClickListMultiActions.Item = ClickListMultiActionsItem.ClickListMultiActionsItem;

exports.ClickListMultiActions = ClickListMultiActions;
