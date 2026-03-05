'use strict';

var React__default = require('react');
var SpinnerPresentation = require('./shared/SpinnerPresentation.js');

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

// @ts-strict-ignore
/* eslint-disable react/require-default-props */
// NOTE: The treatment on loading prop is implemented to avoid breaking change. This should support the default
// appearance until now. A change is expected on v19.
const Spinner = ({
  size = 60,
  variant = "indeterminate",
  ...props
}) => (/*#__PURE__*/React__default__namespace.createElement(SpinnerPresentation.SpinnerPresentation, {
  loading: props.loading !== undefined ? props.loading : true,
  size: size,
  variant: variant,
  // TODO v19: Only required for static spinner
  ariaLabel: props.ariaLabel,
  ...props
}));
Spinner.displayName = "Spinner";

exports.Spinner = Spinner;
