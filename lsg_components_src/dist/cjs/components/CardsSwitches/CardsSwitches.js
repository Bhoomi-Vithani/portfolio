'use strict';

var React__default = require('react');
var CardsWrapper = require('../Cards/shared/CardsWrapper.js');
var CardsSwitchesCustomItem = require('../CardsSwitchesCustomItem/CardsSwitchesCustomItem.js');

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

const CardsSwitches = ({
  itemsPerRow = 4,
  ...props
}) => (/*#__PURE__*/React__default__namespace.createElement(CardsWrapper.CardsWrapper, {
  itemsPerRow,
  ...props,
  type: "MultiOptionToggle"
}));
CardsSwitches.displayName = "Cards.Switches";
CardsSwitches.CustomItem = CardsSwitchesCustomItem.CardsSwitchesCustomItem;

exports.CardsSwitches = CardsSwitches;
