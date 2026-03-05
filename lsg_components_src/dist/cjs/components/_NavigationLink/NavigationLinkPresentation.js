'use strict';

var React__default = require('react');
var prefix = require('../../config/prefix.js');
var DomUtils = require('../../utils/DomUtils.js');
var Host = require('../../utils/Host.js');
var ActionPresentation = require('../Action/shared/ActionPresentation.js');
var NavigationLink_styles = require('./NavigationLink.styles.js');

// @ts-strict-ignore
const NavigationLinkPresentation = ({
  id,
  className,
  children,
  noMargin,
  hasMouseHover,
  hasKeyboardFocus,
  secondary,
  htmlAttrs: htmlAttrsProp = {},
  ...otherProps
}) => {
  const htmlAttrs = {
    ...htmlAttrsProp,
    "data-lsg-component": "navigation-link"
  };
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    className: DomUtils.cleanupClassObject({
      [`${NavigationLink_styles.hostClass}`]: true,
      [className]: className,
      [`${prefix.lsgPre}no-margin`]: noMargin
    }),
    id: id,
    as: "li"
  }, /*#__PURE__*/React__default.createElement(ActionPresentation.ActionPresentation, {
    hasKeyboardFocus: hasKeyboardFocus,
    htmlAttrs: htmlAttrs,
    ...otherProps
  }, /*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${NavigationLink_styles.hostClass}__secondary`]: secondary,
      [`${NavigationLink_styles.hostClass}-inner`]: true,
      [`${NavigationLink_styles.hostClass}__hover`]: hasMouseHover
    })
  }, children)));
};
NavigationLinkPresentation.displayName = "NavigationLinkPresentation";

exports.NavigationLinkPresentation = NavigationLinkPresentation;
