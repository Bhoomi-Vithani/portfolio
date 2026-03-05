'use strict';

var React__default = require('react');
var ClickListCheckboxes = require('../ClickListCheckboxes/ClickListCheckboxes.js');
var ClickListItem = require('../ClickListItem/ClickListItem.js');
var ClickListMultiActions = require('../ClickListMultiActions/ClickListMultiActions.js');
var ClickListRadios = require('../ClickListRadios/ClickListRadios.js');
var ClickListPresentation = require('./shared/ClickListPresentation.js');

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

const ClickList = props => /*#__PURE__*/React__default__namespace.createElement(ClickListPresentation.ClickListPresentation, {
  ...props
});
ClickList.displayName = "ClickList";
ClickList.Item = ClickListItem.ClickListItem;
ClickList.Radios = ClickListRadios.ClickListRadios;
ClickList.Checkboxes = ClickListCheckboxes.ClickListCheckboxes;
ClickList.Multiactions = ClickListMultiActions.ClickListMultiActions;

exports.ClickList = ClickList;
