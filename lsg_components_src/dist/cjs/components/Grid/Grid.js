'use strict';

var React__default = require('react');
var GridColumn = require('../GridColumn/GridColumn.js');
var GridRow = require('../GridRow/GridRow.js');
var GridPresentation = require('./shared/GridPresentation.js');

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

const Grid = ({
  verticalSpacing,
  spacing,
  ...props
}) => (/*#__PURE__*/React__default__namespace.createElement(GridPresentation.GridPresentation, {
  ...props,
  spacing: spacing || verticalSpacing
}));
Grid.displayName = "Grid";
Grid.Row = GridRow.GridRow;
Grid.Column = GridColumn.GridColumn;

exports.Grid = Grid;
