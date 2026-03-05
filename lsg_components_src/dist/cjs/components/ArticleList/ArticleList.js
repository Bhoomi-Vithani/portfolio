'use strict';

var React__default = require('react');
var ArticleListItem = require('../ArticleListItem/ArticleListItem.js');
var ArticleListWrapper = require('./shared/ArticleListWrapper.js');

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

/**
 * @deprecated: 11.2023 - Will be removed in the next major release.
 * Have a look at the "Article List Pattern" which uses native components like shown in the Markenportal UX Patterns
 * section: https://markenportal.commerzbank.com/styleguide/article-list-pattern/index.html
 */
const ArticleList = ({
  iconColor = "default",
  iconVariant = "outline",
  headlineAs = "h4",
  ...props
}) => (/*#__PURE__*/React__default__namespace.createElement(ArticleListWrapper.ArticleListWrapper, {
  iconColor: iconColor,
  iconVariant: iconVariant,
  headlineAs: headlineAs,
  ...props
}));
ArticleList.displayName = "ArticleList";
ArticleList.Item = ArticleListItem.ArticleListItem;

exports.ArticleList = ArticleList;
