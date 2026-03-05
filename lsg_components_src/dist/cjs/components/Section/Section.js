'use strict';

var React__default = require('react');
var Subsection = require('../Subsection/Subsection.js');
var SectionPresentation = require('./shared/SectionPresentation.js');

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

const Section = ({
  separatorBottom,
  look,
  spacing,
  as = "section",
  fullWidth,
  contentWidth,
  ...props
}) => (/*#__PURE__*/React__default__namespace.createElement(SectionPresentation.SectionPresentation, {
  ...props,
  separator: separatorBottom,
  spacing: spacing || look || "marketing",
  as: as,
  contentWidth: fullWidth ? "full-width" : contentWidth
}));
/** @deprecated rename to Subsection with the correct english casing */
Section.SubSection = Subsection.Subsection;
Section.Subsection = Subsection.Subsection;
Section.displayName = "Section";

exports.Section = Section;
