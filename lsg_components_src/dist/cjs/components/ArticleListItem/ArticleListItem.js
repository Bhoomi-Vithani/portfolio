'use strict';

var React__default = require('react');
var ArticleListItemPresentation = require('./shared/ArticleListItemPresentation.js');

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

/** @deprecated: Will be removed in lsg version 20. Use Native Components to create a stepper instead. You can find an example in the UX Patterns section */
const ArticleListItem = ({
  itemHeadlineAs = "h5",
  ...props
}) => (/*#__PURE__*/React__default__namespace.createElement(ArticleListItemPresentation.ArticleListItemPresentation, {
  itemHeadlineAs,
  ...props
}));
ArticleListItem.displayName = "ArticleList.Item";

exports.ArticleListItem = ArticleListItem;
