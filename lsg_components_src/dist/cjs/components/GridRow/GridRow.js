'use strict';

var React__default = require('react');
var GridRowPresentation = require('./shared/GridRowPresentation.js');

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

const GridRow = ({
  as = "div",
  verticalAlign,
  ...props
}) => (/*#__PURE__*/React__default__namespace.createElement(GridRowPresentation.GridRowPresentation, {
  as: as,
  verticalAlignment: verticalAlign,
  ...props
}));
GridRow.displayName = "Grid.Row";

exports.GridRow = GridRow;
