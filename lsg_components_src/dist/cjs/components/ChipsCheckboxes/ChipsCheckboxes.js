'use strict';

var React__default = require('react');
var ChipsTogglePresentation = require('../Chips/shared/ChipsTogglePresentation.js');
var ChipsItemCheckbox = require('../ChipsItemCheckbox/ChipsItemCheckbox.js');

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

const ChipsCheckboxes = ({
  direction = "wrap",
  as = "fieldset",
  ...props
}) => (/*#__PURE__*/React__default__namespace.createElement(ChipsTogglePresentation.ChipsTogglePresentation, {
  direction,
  as,
  ...props,
  type: "checkbox"
}, props.children));
ChipsCheckboxes.displayName = "Chips.Checkboxes";
ChipsCheckboxes.Item = ChipsItemCheckbox.ChipsItemCheckbox;

exports.ChipsCheckboxes = ChipsCheckboxes;
