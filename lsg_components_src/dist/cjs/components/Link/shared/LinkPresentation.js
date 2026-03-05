'use strict';

var React__default = require('react');
var DomUtils = require('../../../utils/DomUtils.js');
var index = require('../../../utils/Hooks/index.js');
var Host = require('../../../utils/Host.js');
var ActionPresentation = require('../../Action/shared/ActionPresentation.js');
var Link_styles = require('./Link.styles.js');

// @ts-strict-ignore
const LinkPresentation = ({
  look,
  disabled,
  loading,
  actionRef,
  hasKeyboardFocus,
  hasMouseHover,
  className,
  clicked,
  // Todo: ClickAnimation not implemented! Styling on click="hover", see Neugelb definition.
  nonInteractive,
  label,
  htmlAttrs: htmlAttrsProp = {},
  id: idProp,
  loadingAriaLabel,
  href,
  ...otherProps
}) => {
  const id = index.useUniqueId(`${Link_styles.hostClass}-`, idProp);
  // For smart automation and web tracking purposes, we add data attributes to the HTML element
  const htmlAttrs = {
    title: htmlAttrsProp?.title,
    ...htmlAttrsProp,
    "data-look": look,
    "data-non-interactive": nonInteractive ? "true" : "false",
    "data-disabled": disabled ? "true" : "false",
    "data-lsg-component": "link"
  };
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    className: DomUtils.cleanupClassObject({
      [className]: className,
      [Link_styles.hostClass]: true,
      [`${Link_styles.hostClass}__hover`]: !disabled && (hasMouseHover || clicked),
      [`${Link_styles.hostClass}__${look}`]: look,
      [`${Link_styles.hostClass}__nonInteractive`]: nonInteractive,
      [`${Link_styles.hostClass}__disabled`]: disabled
    }),
    as: "span",
    id: `${id}-base`
  }, /*#__PURE__*/React__default.createElement(ActionPresentation.ActionPresentation, {
    id: id,
    disabled: disabled,
    loading: loading,
    ref: actionRef,
    loadingAriaLabel: loadingAriaLabel,
    isDisplayInline: true,
    nonInteractive: nonInteractive,
    hasKeyboardFocus: hasKeyboardFocus,
    htmlAttrs: htmlAttrs,
    href: href,
    role: !href ? "button" : undefined,
    actionAs: !href ? "div" : undefined,
    ...otherProps
  }, /*#__PURE__*/React__default.createElement("span", {
    id: `${id}-label`,
    "data-lsg-subcomponent": "label"
  }, label)));
};
LinkPresentation.displayName = "LinkPresentation";

exports.LinkPresentation = LinkPresentation;
