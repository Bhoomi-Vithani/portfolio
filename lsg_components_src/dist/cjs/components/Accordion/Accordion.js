'use strict';

var React__default = require('react');
var AccordionGroup = require('../AccordionGroup/AccordionGroup.js');
require('../AccordionGroup/AccordionGroupStateful.js');
var AccordionStateful = require('./AccordionStateful.js');
var AccordionWrapper = require('./shared/AccordionWrapper.js');

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

const Accordion = ({
  titleAs = "h3",
  ...props
}) => /*#__PURE__*/React__default__namespace.createElement(AccordionWrapper.AccordionWrapper, {
  titleAs: titleAs,
  ...props
});
Accordion.displayName = "Accordion";
Accordion.Stateful = AccordionStateful.AccordionStateful;
Accordion.Group = AccordionGroup.AccordionGroup;

exports.Accordion = Accordion;
