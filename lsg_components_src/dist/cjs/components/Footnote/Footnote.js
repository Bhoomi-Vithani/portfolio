'use strict';

var React__default = require('react');
var FootnoteAnchor = require('../FootnoteAnchor/FootnoteAnchor.js');
var FootnoteItem = require('../FootnoteItem/FootnoteItem.js');
var FootnotePresentation = require('./shared/FootnotePresentation.js');

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

const Footnote = props => /*#__PURE__*/React__default__namespace.createElement(FootnotePresentation.FootnotePresentation, {
  ...props
});
Footnote.displayName = "Footnote";
Footnote.Item = FootnoteItem.FootnoteItem;
Footnote.Anchor = FootnoteAnchor.FootnoteAnchor;

exports.Footnote = Footnote;
