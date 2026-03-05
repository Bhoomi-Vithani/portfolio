'use strict';

var React__default = require('react');
var HeadlinePresentation = require('./shared/HeadlinePresentation.js');

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

const Headline = ({
  size = "h1",
  overlineAs = "div",
  sublineAs = "div",
  children,
  badgeColor,
  badgeLook,
  badgePosition = "overline",
  badgeIconVariant = "solid",
  ...props
}) => (/*#__PURE__*/React__default__namespace.createElement(HeadlinePresentation.HeadlinePresentation, {
  size,
  overlineAs,
  sublineAs,
  ...props,
  badgeColor: badgeColor || badgeLook || "primary",
  badgePosition: badgePosition,
  badgeIconVariant: badgeIconVariant
}, children));
const H1 = props => /*#__PURE__*/React__default__namespace.createElement(Headline, {
  size: "h1",
  ...props
});
const H2 = props => /*#__PURE__*/React__default__namespace.createElement(Headline, {
  size: "h2",
  ...props
});
const H3 = props => /*#__PURE__*/React__default__namespace.createElement(Headline, {
  size: "h3",
  ...props
});
const H4 = props => /*#__PURE__*/React__default__namespace.createElement(Headline, {
  size: "h4",
  ...props
});
const H5 = props => /*#__PURE__*/React__default__namespace.createElement(Headline, {
  size: "h5",
  ...props
});
const H6 = props => /*#__PURE__*/React__default__namespace.createElement(Headline, {
  size: "h6",
  ...props
});
Headline.displayName = "Headline";
H1.displayName = "H1";
H2.displayName = "H2";
H3.displayName = "H3";
H4.displayName = "H4";
H5.displayName = "H5";
H6.displayName = "H6";

exports.H1 = H1;
exports.H2 = H2;
exports.H3 = H3;
exports.H4 = H4;
exports.H5 = H5;
exports.H6 = H6;
exports.Headline = Headline;
