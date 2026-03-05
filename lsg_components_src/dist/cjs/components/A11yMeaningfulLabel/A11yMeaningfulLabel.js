'use strict';

var React__default = require('react');
var A11yMeaningfulLabelPresentation = require('./shared/A11yMeaningfulLabelPresentation.js');

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
 * 'Stretches' a clickable area.
 * To get an idea of what's happening here, see:
 * https://inclusive-components.design/cards/
 */
const A11yMeaningfulLabel = ({
  inline = true,
  ...props
}) => (/*#__PURE__*/React__default__namespace.createElement(A11yMeaningfulLabelPresentation.A11yMeaningfulLabelPresentation, {
  inline: inline,
  ...props
}));
A11yMeaningfulLabel.displayName = "A11yMeaningfulLabel";

exports.A11yMeaningfulLabel = A11yMeaningfulLabel;
