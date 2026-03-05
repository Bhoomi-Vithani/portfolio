'use strict';

var icons = require('@lsg/icons');
var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var index = require('../../../utils/Hooks/index.js');
var Host = require('../../../utils/Host.js');
var ActionPresentation = require('../../Action/shared/ActionPresentation.js');
var IconPresentation = require('../../Icon/shared/IconPresentation.js');
var DwindlePresentation = require('../../_Dwindle/DwindlePresentation.js');
var Button_styles = require('./Button.styles.js');

// @ts-strict-ignore
// Hack: svg of the Icon is brought to the DOM for every render. This is the case after a mousedown but before a click
// event. As a consequence, the click with the old svg DOM node is not triggered. The memo hook prevents the re-render
// by making the function pure
const Icon = /*#__PURE__*/React__default.memo(IconPresentation.IconPresentation);
const ButtonPresentation = props => {
  const {
    label,
    className,
    children,
    look,
    color = "primary",
    loading,
    loadingAriaLabel,
    disabled,
    noMargin,
    actionRef = () => {
      /* empty */
    },
    containerRef,
    horizontalAlignment,
    reducedWidthMobile,
    icon = icons.interaction_arrows_arrowRight,
    iconName,
    iconAppearance = "right",
    iconVariant,
    htmlAttrs: htmlAttrsProp = {},
    onClick = () => {
      /* empty */
    },
    as,
    id: idProp,
    ...otherProps
  } = props;
  const [{
    hasKeyboardFocus,
    hasMouseHover,
    clicked
  }, {
    setHasKeyboardFocus,
    setHasMouseHover
  }, {
    onMouseDown,
    onMouseUp,
    onMouseLeave,
    onKeyDown,
    onKeyUp
  }] = index.useDwindle(props);
  const id = index.useUniqueId(`${Button_styles.hostClass}-`, idProp);
  const iconId = `${id}-icon`;
  const isMobile = index.useViewportRange(undefined, "xs");
  const labelText = label || children;
  // For smart automation and web tracking purposes, we add data attributes to the HTML element
  const htmlAttrs = {
    ...htmlAttrsProp,
    "data-lsg-color": look || color,
    "data-lsg-component": "button"
  };
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    className: DomUtils.cleanupClassObject({
      [Button_styles.hostClass]: true,
      [className]: className,
      [`${prefix.lsgPre}no-margin`]: noMargin,
      [`${prefix.lsgPre}margin-align-${horizontalAlignment}`]: horizontalAlignment,
      [`${Button_styles.hostClass}__reduced-width-mobile`]: reducedWidthMobile
    }),
    ref: containerRef,
    as: as,
    id: `${id}-base`
  }, /*#__PURE__*/React__default.createElement(ActionPresentation.ActionPresentation, {
    id: id,
    disabled: disabled,
    loading: loading,
    loadingAriaLabel: loadingAriaLabel,
    ref: actionRef,
    fullWidth: isMobile,
    htmlAttrs: htmlAttrs,
    onKeyboardFocusChange: setHasKeyboardFocus,
    onMouseHoverChange: setHasMouseHover,
    onMouseDown,
    onMouseUp,
    onMouseLeave,
    onKeyDown,
    onKeyUp,
    onClick,
    ...otherProps
  }, /*#__PURE__*/React__default.createElement(DwindlePresentation.DwindlePresentation, {
    color: look || color,
    disabled: disabled,
    hover: hasMouseHover,
    clicked: clicked,
    shape: "circle-button",
    focus: hasKeyboardFocus
  }, /*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${Button_styles.hostClass}-inner`]: true,
      [`${Button_styles.hostClass}-inner-icon__${iconAppearance}`]: iconAppearance && icon
    })
  }, !loading && icon && (/*#__PURE__*/React__default.createElement(Icon, {
    id: iconId,
    noMargin: true,
    icon: icon,
    name: iconName,
    variant: iconVariant,
    title: "",
    svgAttrs: {
      "aria-hidden": true
    },
    color: disabled ? "disabled" : "default"
  })), /*#__PURE__*/React__default.createElement("div", {
    id: `${id}-label`,
    className: DomUtils.cleanupClassObject({
      [`${Button_styles.hostClass}-label__notext`]: iconAppearance === "no-text"
    }),
    "aria-describedby": loading ? `${id}-loading-text` : undefined,
    "data-lsg-subcomponent": "label"
  }, labelText)))));
};
ButtonPresentation.displayName = "ButtonPresentation";

exports.ButtonPresentation = ButtonPresentation;
