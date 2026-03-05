'use strict';

var React__default = require('react');
var Tab = require('../Tab/Tab.js');
var TabsStateful = require('../TabsStateful/TabsStateful.js');
var TabsPresentation = require('./shared/TabsPresentation.js');

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
const Tabs = ({
  ...props
}) => /*#__PURE__*/React__default__namespace.createElement(TabsPresentation.TabsPresentation, {
  ...props
});
Tabs.Stateful = TabsStateful.TabsStateful;
Tabs.Tab = Tab.Tab;
// @ts-ignore
Tabs.Tab.displayName = "Tabs.Tab";
Tabs.displayName = "Tabs";

exports.Tabs = Tabs;
