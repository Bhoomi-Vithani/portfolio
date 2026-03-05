'use strict';

var React__default = require('react');
var BannerMessagePresentation = require('./shared/BannerMessagePresentation.js');

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

const BannerMessage = /*#__PURE__*/React__default.forwardRef(({
  iconLinks,
  children,
  ...props
}, ref) => (/*#__PURE__*/React__default__namespace.createElement(BannerMessagePresentation.BannerMessagePresentation, {
  headlineAs: "h5",
  content: children,
  ...props,
  ref: ref
}, iconLinks)));
BannerMessage.displayName = "BannerMessage";

exports.BannerMessage = BannerMessage;
