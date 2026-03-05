'use strict';

var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var index = require('../../../utils/Hooks/index.js');
var Host = require('../../../utils/Host.js');
var ActionPresentation = require('../../Action/shared/ActionPresentation.js');
var IconPresentation = require('../../Icon/shared/IconPresentation.js');
var DwindlePresentation = require('../../_Dwindle/DwindlePresentation.js');
var ActionButton_styles = require('./ActionButton.styles.js');

// Hack: svg of the Icon is brought to the DOM for every render. This is the case after a mousedown but before a click
// event. As a consequence, the click with the old svg DOM node is not triggered. The memo hook prevents the re-render
// by making the function pure
const Icon = /*#__PURE__*/React__default.memo(IconPresentation.IconPresentation);
const ActionButtonPresentation = props => {
  const {
    className,
    label,
    appearance,
    icon,
    iconName,
    iconVariant,
    color = "primary",
    disabled = false,
    noMargin,
    actionRef = () => {
      /* empty */
    },
    floating,
    loading,
    loadingAriaLabel,
    isStencilHost,
    horizontalAlignment,
    as,
    htmlAttrs: htmlAttrsProp = {},
    id: idProp,
    onClick = () => {
      /* empty */
    },
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
  const id = index.useUniqueId(`${ActionButton_styles.hostClass}-`, idProp);
  const iconId = `${id}-icon`;
  // For smart automation and web tracking purposes, we add data attributes to the HTML element
  const htmlAttrs = {
    ...htmlAttrsProp,
    "data-lsg-color": color,
    "data-lsg-floating": !!floating,
    "data-lsg-component": "action-button"
  };
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    isStencilHost: isStencilHost,
    className: DomUtils.cleanupClassObject({
      [ActionButton_styles.hostClass]: true,
      [className]: className,
      [`${prefix.lsgPre}no-margin`]: noMargin,
      [`${ActionButton_styles.hostClass}__floating`]: floating,
      [`${prefix.lsgPre}margin-align-${horizontalAlignment}`]: horizontalAlignment
    }),
    as: as,
    id: `${id}-base`
  }, /*#__PURE__*/React__default.createElement(ActionPresentation.ActionPresentation, {
    id: id,
    disabled: disabled,
    loading: loading,
    loadingAriaLabel: loadingAriaLabel,
    ref: actionRef,
    hasKeyboardFocus: hasKeyboardFocus,
    onKeyboardFocusChange: setHasKeyboardFocus,
    onMouseHoverChange: setHasMouseHover,
    onMouseDown: onMouseDown,
    onMouseUp: onMouseUp,
    onMouseLeave: onMouseLeave,
    onKeyDown: onKeyDown,
    onKeyUp: onKeyUp,
    onClick: onClick,
    htmlAttrs: htmlAttrs,
    ...otherProps
  }, /*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${ActionButton_styles.hostClass}-wrapper-inner`]: true,
      [`${ActionButton_styles.hostClass}-wrapper-inner__disabled`]: disabled,
      [`${ActionButton_styles.hostClass}__no-text`]: appearance === "no-text"
    })
  }, /*#__PURE__*/React__default.createElement("div", {
    className: `${ActionButton_styles.hostClass}-dwindle-wrapper`
  }, /*#__PURE__*/React__default.createElement(DwindlePresentation.DwindlePresentation, {
    className: DomUtils.cleanupClassObject({
      [`${ActionButton_styles.hostClass}__hidden`]: loading
    }),
    color: color,
    disabled: disabled,
    shape: "circle",
    floating: floating,
    hover: hasMouseHover,
    clicked: clicked
  }, /*#__PURE__*/React__default.createElement(Icon, {
    id: iconId,
    noMargin: true,
    icon: icon,
    name: iconName,
    color: "inherit",
    variant: iconVariant,
    size: "small",
    "aria-hidden": true,
    title: ""
  }))), /*#__PURE__*/React__default.createElement("div", {
    className: `${ActionButton_styles.hostClass}-label`,
    id: `${id}-label`,
    "data-lsg-subcomponent": "label"
  }, label))));
};
ActionButtonPresentation.displayName = "ActionButtonPresentation";

exports.ActionButtonPresentation = ActionButtonPresentation;
