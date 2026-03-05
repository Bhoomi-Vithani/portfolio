'use strict';

var React__default = require('react');
var CardsWrapper = require('../Cards/shared/CardsWrapper.js');
var CardsCheckboxesCustomItem = require('../CardsCheckboxesCustomItem/CardsCheckboxesCustomItem.js');

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

const CardsCheckboxes = ({
  itemsPerRow = 4,
  ...props
}) => (/*#__PURE__*/React__default__namespace.createElement(CardsWrapper.CardsWrapper, {
  itemsPerRow,
  ...props,
  type: "MultiOptionToggle"
}));
CardsCheckboxes.displayName = "Cards.Checkboxes";
CardsCheckboxes.CustomItem = CardsCheckboxesCustomItem.CardsCheckboxesCustomItem;

exports.CardsCheckboxes = CardsCheckboxes;
