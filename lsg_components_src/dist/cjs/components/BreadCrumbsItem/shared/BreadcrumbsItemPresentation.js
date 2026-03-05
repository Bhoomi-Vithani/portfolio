'use strict';

var icons = require('@lsg/icons');
var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var Host = require('../../../utils/Host.js');
var ActionPresentation = require('../../Action/shared/ActionPresentation.js');
var IconPresentation = require('../../Icon/shared/IconPresentation.js');
var BreadcrumbsItem_styles = require('./BreadcrumbsItem.styles.js');

// @ts-strict-ignore
const BreadcrumbsItemPresentation = ({
  children,
  className,
  noMargin,
  disabled,
  actionRef,
  hasMouseHover,
  hasKeyboardFocus,
  htmlAttrs: htmlAttrsProp,
  ...otherProps
}) => {
  const htmlAttrs = {
    ...htmlAttrsProp,
    "data-lsg-component": "breadcrumbs-item"
  };
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    as: "li",
    className: DomUtils.cleanupClassObject({
      [className]: !!className,
      [BreadcrumbsItem_styles.hostClass]: true,
      [`${prefix.lsgPre}no-margin`]: noMargin
    })
  }, /*#__PURE__*/React__default.createElement(IconPresentation.IconPresentation, {
    className: `${BreadcrumbsItem_styles.hostClass}-icon`,
    noMargin: true,
    icon: icons.interaction_arrows_chevronRight,
    svgAttrs: {
      "aria-hidden": true
    }
  }), /*#__PURE__*/React__default.createElement(ActionPresentation.ActionPresentation, {
    disabled: disabled,
    ref: actionRef,
    hasKeyboardFocus: hasKeyboardFocus,
    htmlAttrs: htmlAttrs,
    ...otherProps
  }, /*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${BreadcrumbsItem_styles.hostClass}-action`]: true,
      [`${BreadcrumbsItem_styles.hostClass}-action__disabled`]: disabled,
      [`${BreadcrumbsItem_styles.hostClass}-action__hover`]: hasMouseHover
    })
  }, children)));
};
BreadcrumbsItemPresentation.displayName = "BreadcrumbsItemPresentation";

exports.BreadcrumbsItemPresentation = BreadcrumbsItemPresentation;
