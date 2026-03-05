'use strict';

var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var index = require('../../../utils/Hooks/index.js');
var Host = require('../../../utils/Host.js');
var ActionPresentation = require('../../Action/shared/ActionPresentation.js');
var IconPresentation = require('../../Icon/shared/IconPresentation.js');
var DwindlePresentation = require('../../_Dwindle/DwindlePresentation.js');
var CircleIconLink_styles = require('./CircleIconLink.styles.js');

// Hack: svg of the Icon is brought to the DOM for every render. This is the case after a mousedown but before a click
// event. As a consequence, the click with the old svg DOM node is not triggered. The memo hook prevents the re-render
// by making the function pure
const Icon = /*#__PURE__*/React__default.memo(IconPresentation.IconPresentation);
const CircleIconLinkPresentation = props => {
  const {
    label,
    className,
    color = "primary",
    helper,
    iconName,
    icon,
    iconVariant,
    disabled = false,
    loading,
    onClick = () => {
      /* empty */
    },
    htmlAttrs: htmlAttrsProp = {},
    noMargin,
    actionRef = () => {
      /* empty */
    },
    centeredLayout = false,
    horizontalAlignment,
    id: idProp,
    as,
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
  const align = centeredLayout ? "center" : horizontalAlignment;
  const id = index.useUniqueId(`${CircleIconLink_styles.hostClass}-`, idProp);
  const iconId = `${id}-icon`;
  // For smart automation and web tracking purposes, we add data attributes to the HTML element
  const htmlAttrs = {
    ...htmlAttrsProp,
    "data-lsg-color": color,
    "data-lsg-component": "circle-icon-link"
  };
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    className: DomUtils.cleanupClassObject({
      [className]: className,
      [CircleIconLink_styles.hostClass]: true,
      [`${CircleIconLink_styles.hostClass}__align-${align}`]: align,
      [`${prefix.lsgPre}no-margin`]: noMargin,
      [`${prefix.lsgPre}text-align-${align}`]: horizontalAlignment,
      [`${CircleIconLink_styles.hostClass}__disabled`]: disabled
    }),
    as: as,
    id: `${id}-base`
  }, /*#__PURE__*/React__default.createElement(ActionPresentation.ActionPresentation, {
    id: id,
    disabled: disabled,
    loading: loading,
    ref: actionRef,
    htmlAttrs: htmlAttrs,
    hasKeyboardFocus: hasKeyboardFocus,
    onKeyboardFocusChange: setHasKeyboardFocus,
    onMouseHoverChange: setHasMouseHover,
    onClick,
    onMouseDown,
    onMouseUp,
    onMouseLeave,
    onKeyDown: onKeyDown,
    onKeyUp: onKeyUp,
    ...otherProps
  }, /*#__PURE__*/React__default.createElement("div", {
    className: `${CircleIconLink_styles.hostClass}-wrapper-container`
  }, /*#__PURE__*/React__default.createElement("div", {
    className: `${CircleIconLink_styles.hostClass}-icon-container`
  }, /*#__PURE__*/React__default.createElement(DwindlePresentation.DwindlePresentation, {
    className: DomUtils.cleanupClassObject({
      [`${CircleIconLink_styles.hostClass}__hidden`]: loading
    }),
    color: color,
    disabled: disabled,
    shape: "circle",
    hover: hasMouseHover,
    clicked: clicked
  }, /*#__PURE__*/React__default.createElement(Icon, {
    id: iconId,
    name: iconName,
    icon: icon,
    color: "inherit",
    variant: iconVariant,
    size: "small",
    "aria-hidden": true,
    title: htmlAttrs?.title || ""
  }))), /*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${CircleIconLink_styles.hostClass}-text-container`]: true,
      [`${CircleIconLink_styles.hostClass}-no-helper`]: !helper
    })
  }, /*#__PURE__*/React__default.createElement("div", {
    className: `${CircleIconLink_styles.hostClass}-label-text`,
    id: `${id}-label`,
    "data-lsg-subcomponent": "header-label"
  }, label), helper && (/*#__PURE__*/React__default.createElement("div", {
    className: `${CircleIconLink_styles.hostClass}-helper-text`,
    id: `${id}-helper-text`,
    "data-lsg-subcomponent": "helpertext-label"
  }, helper))))));
};
CircleIconLinkPresentation.displayName = "CircleIconLinkPresentation";

exports.CircleIconLinkPresentation = CircleIconLinkPresentation;
