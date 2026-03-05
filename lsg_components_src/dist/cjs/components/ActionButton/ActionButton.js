'use strict';

var React__default = require('react');
var ActionButtonGroup = require('../ActionButtonGroup/ActionButtonGroup.js');
var ActionButtonPresentation = require('./shared/ActionButtonPresentation.js');

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

const ActionButton = ({
  color = "primary",
  refCallback,
  disabled = false,
  label,
  children,
  loadingText,
  ...props
}) => (/*#__PURE__*/React__default__namespace.createElement(ActionButtonPresentation.ActionButtonPresentation, {
  actionRef: refCallback,
  loadingAriaLabel: loadingText,
  label: label || children,
  color,
  disabled,
  ...props
}));
ActionButton.displayName = "ActionButton";
ActionButton.Group = ActionButtonGroup.ActionButtonGroup;

exports.ActionButton = ActionButton;
