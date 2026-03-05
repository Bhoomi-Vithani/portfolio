'use strict';

var React__default = require('react');
var FootnoteAnchorPresentation = require('../FootnoteAnchor/shared/FootnoteAnchorPresentation.js');
var IconPresentation = require('../Icon/shared/IconPresentation.js');
var BadgePresentation = require('./shared/BadgePresentation.js');

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

// TODO: V20 Think about simplifying this, and just provide the BadgePresentation interface
const Badge = ({
  look,
  color,
  text,
  icon,
  iconLabel,
  size,
  footnoteIdentifier,
  footnoteIdItem,
  iconVariant = "solid",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  children,
  ...props
}) => (/*#__PURE__*/React__default__namespace.createElement(BadgePresentation.BadgePresentation, {
  color: color || look || "primary",
  size: size === "large" && icon ? "icon-large" : size,
  ...props
}, !icon && !(footnoteIdentifier && text === "large") && text, icon && (/*#__PURE__*/React__default__namespace.createElement(IconPresentation.IconPresentation, {
  icon: icon,
  size: size === "large" ? "small" : "xsmall",
  variant: iconVariant,
  title: iconLabel
})), footnoteIdentifier && (/*#__PURE__*/React__default__namespace.createElement(FootnoteAnchorPresentation.FootnoteAnchorPresentation, {
  identifier: footnoteIdentifier,
  idItem: footnoteIdItem,
  label: text
}))));
Badge.displayName = "Badge";

exports.Badge = Badge;
