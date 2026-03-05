'use strict';

var React__default = require('react');
var DomUtils = require('../../utils/DomUtils.js');
var React = require('../../utils/React.js');
var MenulikeItem_styles = require('./MenulikeItem.styles.js');

const MenulikeItemPresentation = React.fRef(({
  role,
  hasTabIndex = true,
  hasMouseHover,
  hasKeyboardFocus,
  ariaSelected,
  disabled,
  id: idProp,
  onClick,
  onMouseOver,
  ref,
  children,
  as,
  optionValue
}) => {
  const Component = as || "div";
  const id = idProp?.replace(/\s+/g, "-");
  return /*#__PURE__*/ /* key-events are handled by SelectWrapper */ /* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */React__default.createElement(Component, {
    id: id,
    className: DomUtils.cleanupClassObject({
      [`${MenulikeItem_styles.mainClass}`]: true,
      [`${MenulikeItem_styles.mainClass}__selected`]: ariaSelected,
      [`${MenulikeItem_styles.mainClass}__hover`]: hasMouseHover && !disabled,
      [`${MenulikeItem_styles.mainClass}__focus`]: hasKeyboardFocus,
      [`${MenulikeItem_styles.mainClass}__disabled`]: disabled
    }),
    onClick: !disabled && onClick ? onClick : () => {},
    onMouseMove: onMouseOver,
    ref: ref,
    /* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */
    tabIndex: hasTabIndex && !disabled ? 0 : -1,
    role: role,
    "aria-selected": ariaSelected,
    "aria-disabled": disabled,
    "data-value": `${optionValue}`
  }, children);
});
MenulikeItemPresentation.displayName = "MenulikeItemPresentation";

exports.MenulikeItemPresentation = MenulikeItemPresentation;
