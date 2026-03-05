'use strict';

var React__default = require('react');
var StatusIndicatorGroupWrapper = require('./StatusIndicatorGroup/StatusIndicatorGroupWrapper.js');
var StatusIndicatorPresentation = require('./shared/StatusIndicatorPresentation.js');

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

const StatusIndicator = ({
  statusColor = "inactive",
  tagHidden = false,
  tagRole = "none",
  ...otherProps
}) => (/*#__PURE__*/React__default__namespace.createElement(StatusIndicatorPresentation.StatusIndicatorPresentation, {
  ...otherProps,
  tagRole: tagRole,
  tagHidden: tagHidden,
  statusColor: statusColor
}));
StatusIndicator.Group = ({
  ...props
}) => /*#__PURE__*/React__default__namespace.createElement(StatusIndicatorGroupWrapper.StatusIndicatorGroupWrapper, {
  ...props
});
StatusIndicator.displayName = "StatusIndicator";
// @ts-ignore
StatusIndicator.Group.displayName = "StatusIndicator.Group";

exports.StatusIndicator = StatusIndicator;
