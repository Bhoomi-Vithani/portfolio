'use strict';

var React__default = require('react');
var SimpleTablePresentation = require('./shared/SimpleTablePresentation.js');
var SimpleTableRowPresentation = require('./shared/SimpleTableRow/SimpleTableRowPresentation.js');

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

// @ts-strict-ignore
/* eslint-disable react/require-default-props */
const SimpleTable = ({
  ratio = "2-1",
  ...otherProps
}) => (/*#__PURE__*/React__default__namespace.createElement(SimpleTablePresentation.SimpleTablePresentation, {
  ratio: {
    none: ""
  }[ratio] || ratio,
  ...otherProps
}));
SimpleTable.Row = ({
  children,
  ...restProps
}) => (/*#__PURE__*/React__default__namespace.createElement(SimpleTableRowPresentation.SimpleTableRowPresentation, {
  ...restProps
}, children));
SimpleTable.displayName = "SimpleTable";
// @ts-ignore
SimpleTable.Row.displayName = "SimpleTable.Row";

exports.SimpleTable = SimpleTable;
