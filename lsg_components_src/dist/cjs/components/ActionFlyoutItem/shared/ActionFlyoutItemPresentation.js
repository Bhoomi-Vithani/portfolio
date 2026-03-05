'use strict';

var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var Host = require('../../../utils/Host.js');
var ActionPresentation = require('../../Action/shared/ActionPresentation.js');
var MenulikeItemPresentation = require('../../_MenulikeItem/MenulikeItemPresentation.js');
var ActionFlyoutItem_styles = require('./ActionFlyoutItem.styles.js');

// @ts-strict-ignore
const ActionFlyoutItemPresentation = /*#__PURE__*/React__default.forwardRef((props, actionRef) => {
  const {
    id,
    children,
    className,
    noMargin,
    // actionRef,
    onKeyboardFocusChange,
    onKeyDown,
    disabled,
    href,
    hasKeyboardFocus,
    name,
    htmlAttrs: htmlAttrsProp = {},
    hasTabIndex = false,
    ...otherProps
  } = props;
  const [hasMouseHover, setHasMouseHover] = React__default.useState(false);
  const htmlAttrs = {
    role: "menuitem",
    ...htmlAttrsProp,
    "data-lsg-component": "action-flyout-item"
  };
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    id: id,
    className: DomUtils.cleanupClassObject({
      [className]: !!className,
      [ActionFlyoutItem_styles.hostClass]: true,
      [`${prefix.lsgPre}no-margin`]: noMargin
    }),
    as: "li",
    htmlAttrs: htmlAttrs
  }, /*#__PURE__*/React__default.createElement(ActionPresentation.ActionPresentation, {
    id: `${id}-button`,
    ref: actionRef,
    onMouseHoverChange: setHasMouseHover,
    onKeyboardFocusChange: onKeyboardFocusChange,
    onKeyDown: onKeyDown,
    hasTabIndex: hasTabIndex,
    disabled: disabled,
    href: disabled ? undefined : href,
    name: name,
    fullWidth: true,
    htmlAttrs: htmlAttrs,
    ...otherProps
  }, /*#__PURE__*/React__default.createElement(MenulikeItemPresentation.MenulikeItemPresentation, {
    hasTabIndex: false,
    label: "",
    hasMouseHover,
    hasKeyboardFocus,
    disabled
  }, children)));
});
ActionFlyoutItemPresentation.displayName = "ActionFlyoutItemPresentation";

exports.ActionFlyoutItemPresentation = ActionFlyoutItemPresentation;
