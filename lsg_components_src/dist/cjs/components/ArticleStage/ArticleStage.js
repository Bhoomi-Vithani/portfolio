'use strict';

var React__default = require('react');
var ArticleStagePresentation = require('./shared/ArticleStagePresentation.js');

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
 * Have a look at the "Article Stage Pattern" which uses native components like shown in the Markenportal UX Patterns
 * section: https://markenportal.commerzbank.com/styleguide/article-stage-pattern/index.html
 */
const ArticleStage = ({
  iconLinks,
  centeredLayout,
  ...props
}) => (/*#__PURE__*/React__default__namespace.createElement(ArticleStagePresentation.ArticleStagePresentation, {
  ...props,
  horizontalAlignment: centeredLayout ? "center" : "left"
}, iconLinks));
ArticleStage.displayName = "ArticleStage";

exports.ArticleStage = ArticleStage;
