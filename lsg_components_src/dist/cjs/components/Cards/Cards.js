'use strict';

var React__default = require('react');
var CardsCheckboxes = require('../CardsCheckboxes/CardsCheckboxes.js');
var CardsCustomItem = require('../CardsCustomItem/CardsCustomItem.js');
var CardsRadios = require('../CardsRadios/CardsRadios.js');
var CardsWrapper = require('./shared/CardsWrapper.js');
var CardsSwitches = require('../CardsSwitches/CardsSwitches.js');

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

/* eslint-disable */
const Cards = ({
  itemsPerRow = 4,
  as = "ul",
  ...props
}) => (/*#__PURE__*/React__default__namespace.createElement(CardsWrapper.CardsWrapper, {
  itemsPerRow,
  as,
  ...props,
  type: "NoInput"
}));
Cards.displayName = "Cards";
Cards.CustomItem = CardsCustomItem.CardsCustomItem;
Cards.Checkboxes = CardsCheckboxes.CardsCheckboxes;
Cards.Radios = CardsRadios.CardsRadios;
Cards.Switches = CardsSwitches.CardsSwitches;

exports.Cards = Cards;
