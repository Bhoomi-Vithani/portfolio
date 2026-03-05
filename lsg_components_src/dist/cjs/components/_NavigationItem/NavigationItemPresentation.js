'use strict';

var React__default = require('react');
var DomUtils = require('../../utils/DomUtils.js');
var Host = require('../../utils/Host.js');
var React = require('../../utils/React.js');
var ActionPresentation = require('../Action/shared/ActionPresentation.js');
var NavigationItem_styles = require('./NavigationItem.styles.js');

// @ts-strict-ignore
// Hack to get rid of forwardRefs
const Div = React.fRef(({
  ref,
  ...props
}) => /*#__PURE__*/React__default.createElement("div", {
  ...props,
  ref: ref
}));
const NavigationItemPresentation = ({
  className,
  children,
  actionRef,
  hasMouseHover,
  hasKeyboardFocus,
  disabled,
  href,
  level,
  secondary,
  innerRef,
  ...otherProps
}) => {
  const textColor = disabled && "disabled" || secondary && "secondary" || "primary";
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    className: DomUtils.cleanupClassObject({
      [NavigationItem_styles.hostClass]: true,
      [className]: !!className
    })
  }, /*#__PURE__*/React__default.createElement(ActionPresentation.ActionPresentation, {
    ref: actionRef,
    disabled: disabled,
    href: disabled ? undefined : href,
    hasKeyboardFocus: hasKeyboardFocus,
    ...otherProps
  }, /*#__PURE__*/React__default.createElement(Div, {
    className: DomUtils.cleanupClassObject({
      [`${NavigationItem_styles.hostClass}-inner`]: true,
      [`${NavigationItem_styles.hostClass}__hover`]: !disabled && hasMouseHover,
      [`${NavigationItem_styles.hostClass}__${textColor}`]: true,
      [`${NavigationItem_styles.hostClass}__${level}`]: level
    }),
    ref: innerRef
  }, children)));
};
NavigationItemPresentation.displayName = "NavigationItemPresentation";

exports.NavigationItemPresentation = NavigationItemPresentation;
