'use strict';

var React__default = require('react');
var BarDiagramGroup = require('../BarDiagramGroup/BarDiagramGroup.js');
var BarDiagramPresentation = require('./shared/BarDiagramPresentation.js');

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

/* eslint-disable react/require-default-props */
const BarDiagram = props => /*#__PURE__*/React__default__namespace.createElement(BarDiagramPresentation.BarDiagramPresentation, {
  ...props
});
BarDiagram.displayName = "BarDiagram";
BarDiagram.Group = BarDiagramGroup.BarDiagramGroup;

exports.BarDiagram = BarDiagram;
