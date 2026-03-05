'use strict';

var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var Host = require('../../../utils/Host.js');
var ReactUtils = require('../../../utils/ReactUtils.js');
var GridColumnPresentation = require('../../GridColumn/shared/GridColumnPresentation.js');
var IconLinkGroupWrapper = require('../../IconLinkGroup/shared/IconLinkGroupWrapper.js');
var SpinnerPresentation = require('../../Spinner/shared/SpinnerPresentation.js');
var ThemePresentation = require('../../Theme/shared/ThemePresentation.js');
var CardsCustomItem_styles = require('./CardsCustomItem.styles.js');
var CardsMenu = require('./CardsMenu.js');

// @ts-strict-ignore
const CardsCustomItemPresentation = ({
  id,
  as = "li",
  children,
  className,
  noMargin,
  contentBottom,
  contentTop,
  pictureBottom,
  pictureTop,
  itemsPerRow,
  hasMouseHover,
  hasKeyboardFocus,
  isActive,
  centeredLayout,
  spacing,
  menuNavigationTree,
  onMenuMouseHoverChange,
  onMenuKeyboardFocusChange,
  onOpenChange,
  menuOpen,
  hasMenuMouseHover,
  hasMenuKeyboardFocus,
  disabled,
  loading,
  loadingText,
  appearance = "default",
  gridColumnSize,
  height,
  verticalAlign,
  spinnerSize,
  divider
}) => {
  const addDivider = content => {
    switch (divider) {
      case "top":
        return contentTop && content === children;
      case "bottom":
        return content === contentBottom;
      case "both":
        if (!contentTop || !contentBottom || !children) return false;
        return content === contentBottom || content === children;
      default:
        return false;
    }
  };
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    id: id,
    className: DomUtils.cleanupClassObject({
      [className]: !!className,
      [CardsCustomItem_styles.hostClass]: true,
      [`${CardsCustomItem_styles.hostClass}__shadow`]: !disabled && !loading && appearance === "default",
      [`${CardsCustomItem_styles.hostClass}__${appearance}`]: appearance,
      [`${CardsCustomItem_styles.hostClass}__hover`]: hasMouseHover,
      [`${CardsCustomItem_styles.hostClass}__focus`]: hasKeyboardFocus,
      [`${CardsCustomItem_styles.hostClass}__disabled`]: disabled,
      [`${CardsCustomItem_styles.hostClass}__loading`]: loading,
      [`${CardsCustomItem_styles.hostClass}__active`]: isActive,
      [`${CardsCustomItem_styles.hostClass}__active-dwindle`]: isActive && appearance !== "placeholder",
      [`${CardsCustomItem_styles.hostClass}__${spacing}`]: spacing,
      [`${CardsCustomItem_styles.hostClass}__menu-open`]: menuOpen,
      [`${prefix.lsgPre}no-margin`]: noMargin,
      [`${CardsCustomItem_styles.hostClass}__centered`]: verticalAlign === "center",
      [GridColumnPresentation.getGridColumnClasses({
        size: gridColumnSize || 12 / itemsPerRow,
        sm: 4,
        xs: 4
      })]: true,
      [ThemePresentation.getThemeChildrenClass("elevated")]: true
    }),
    as: as,
    style: {
      minHeight: `${height}px`
    },
    "data-lsg-component": "cards-item"
  }, /*#__PURE__*/React__default.createElement(SpinnerPresentation.SpinnerPresentation, {
    variant: "indeterminate",
    expandToOverlay: loading,
    loading: loading,
    ariaLabel: loadingText,
    size: spinnerSize
  }), /*#__PURE__*/React__default.createElement("div", {
    className: `${CardsCustomItem_styles.hostClass}-inner`
  }, /*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${CardsCustomItem_styles.hostClass}-inner-inner`]: true
    })
  }, pictureTop && /*#__PURE__*/React__default.createElement("div", {
    className: `${CardsCustomItem_styles.hostClass}__picture-top`
  }, pictureTop), /*#__PURE__*/React__default.createElement("div", {
    className: `${CardsCustomItem_styles.hostClass}-content`
  }, [contentTop, children, contentBottom].map((content, i) => content && (/*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${CardsCustomItem_styles.hostClass}-content-block`]: true,
      [`${CardsCustomItem_styles.hostClass}-content-block-children`]: i === 1 && children && divider
    }),
    key: i
  }, addDivider(content) && /*#__PURE__*/React__default.createElement("hr", {
    className: `${CardsCustomItem_styles.hostClass}-divider`
  }), centeredLayout ? ReactUtils.fragmentMap(content, child => /*#__PURE__*/React__default.cloneElement(child, {
    horizontalAlignment: "center"
  })) : content))), " "), pictureBottom && /*#__PURE__*/React__default.createElement("div", {
    className: `${CardsCustomItem_styles.hostClass}__picture-top`
  }, pictureBottom))), menuNavigationTree && (/*#__PURE__*/React__default.createElement("div", {
    className: `${CardsCustomItem_styles.hostClass}-menu`
  }, /*#__PURE__*/React__default.createElement(IconLinkGroupWrapper.IconLinkGroupWrapper, {
    noMargin: true
  }, /*#__PURE__*/React__default.createElement(CardsMenu.CardsMenu, {
    disabled: disabled || loading,
    navigationTree: menuNavigationTree,
    onMouseHoverChange: onMenuMouseHoverChange,
    onKeyboardFocusChange: onMenuKeyboardFocusChange,
    hasMouseHover: hasMenuMouseHover,
    hasKeyboardFocus: hasMenuKeyboardFocus,
    setOpen: onOpenChange,
    menuOpen: menuOpen
  })))));
};
CardsCustomItemPresentation.displayName = "CardsCustomItemPresentation";

exports.CardsCustomItemPresentation = CardsCustomItemPresentation;
