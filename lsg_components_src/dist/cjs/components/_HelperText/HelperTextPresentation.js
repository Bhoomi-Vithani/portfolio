'use strict';

var icons = require('@lsg/icons');
var React__default = require('react');
var DomUtils = require('../../utils/DomUtils.js');
var IconPresentation = require('../Icon/shared/IconPresentation.js');
var ParagraphPresentation = require('../Paragraph/shared/ParagraphPresentation.js');
var HelperText_styles = require('./HelperText.styles.js');

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
const HelperTextPresentation = ({
  className,
  helperText,
  errorText,
  helperTextId,
  errorTextId,
  disabled,
  errorTextAriaLive,
  spacing
}) => (/*#__PURE__*/React__default__namespace.createElement("div", {
  className: DomUtils.cleanupClassObject({
    [HelperText_styles.hostClass]: true,
    [className]: !!className,
    [`${HelperText_styles.hostClass}__dense`]: spacing === "dense"
  })
}, helperText && (/*#__PURE__*/React__default__namespace.createElement(ParagraphPresentation.ParagraphPresentation, {
  id: helperTextId,
  className: `${HelperText_styles.hostClass}-helper-text_with-error`,
  size: "helper-text",
  disabled: disabled,
  noMargin: true
}, helperText)), /*#__PURE__*/React__default__namespace.createElement("div", {
  className: DomUtils.cleanupClassObject({
    [`${HelperText_styles.hostClass}-error-text-wrapper`]: true /* Always rendered, even without an errorText, to provide a stable container
                                              for the aria-live region (for accessibility). Screen readers can more reliably announce dynamic content if the aria-live element (the Paragraph/<p>)
                                              already exists in this <div> in the DOM. */,
    [`${HelperText_styles.hostClass}-error-text-wrapper__error-text-set`]: !!errorText
  })
}, errorText && (/*#__PURE__*/React__default__namespace.createElement(IconPresentation.IconPresentation, {
  className: `${HelperText_styles.hostClass}-error-icon`,
  icon: icons.symbols___error,
  color: "error",
  size: "small",
  noMargin: true,
  // aria-hide icon because the input element should have an aria-invalid attribute and the text is
  // read accordingly
  svgAttrs: {
    "aria-hidden": true
  }
})), /*#__PURE__*/React__default__namespace.createElement(ParagraphPresentation.ParagraphPresentation, {
  id: errorTextId,
  className: `${HelperText_styles.hostClass}-error-text`,
  size: "error-text",
  noMargin: true,
  htmlAttrs: {
    "aria-live": errorTextAriaLive ? "assertive" : "off",
    "aria-atomic": "true"
  }
}, errorText))));
HelperTextPresentation.displayName = "HelperText";

exports.HelperTextPresentation = HelperTextPresentation;
