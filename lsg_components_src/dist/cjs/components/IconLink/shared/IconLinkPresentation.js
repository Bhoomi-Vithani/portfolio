'use strict';

var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var index = require('../../../utils/Hooks/index.js');
var Host = require('../../../utils/Host.js');
var React = require('../../../utils/React.js');
var ActionPresentation = require('../../Action/shared/ActionPresentation.js');
var IconPresentation = require('../../Icon/shared/IconPresentation.js');
var IconLink_styles = require('./IconLink.styles.js');

// Hack to get rid of forwardRefs
const Div = React.fRef(({
  ref,
  ...props
}) => /*#__PURE__*/React__default.createElement("div", {
  ...props,
  ref: ref
}));
const IconLinkPresentation = ({
  label,
  iconName,
  icon,
  look: lookProp,
  hoverAnimation: directionProp,
  loading,
  loadingAriaLabel,
  iconColor: iconColorProp,
  iconVariant,
  iconOnHover,
  color,
  inactive,
  transform,
  disabled,
  actionRef,
  innerRef,
  hasKeyboardFocus,
  hasMouseHover,
  svgAttrs,
  className,
  htmlAttrs: htmlAttrsProp = {},
  textEllipsis,
  clicked,
  // Todo: ClickAnimation not implemented! Styling on click="hover", see Neugelb definition.
  badge,
  containerRef,
  inline,
  nonInteractive,
  horizontalAlignment,
  size,
  as,
  appearance,
  role,
  selected,
  id: idProp,
  ...otherProps
}) => {
  const id = index.useUniqueId(`${IconLink_styles.hostClass}-`, idProp);
  const iconId = `${id}-icon`;
  const iconColor = iconColorProp || disabled && "disabled" || color === "secondary" && "tertiary" || "default";
  const textColor = disabled && "disabled" || inactive && "inactive" || color || "primary";
  const look = appearance || lookProp || (iconName || icon ? "left" : "no-icon");
  const direction = "hover".concat(directionProp ? `-${directionProp}` : "");
  // For smart automation and web tracking purposes, we add data attributes to the HTML element
  const htmlAttrs = {
    ...htmlAttrsProp,
    "data-lsg-color": color,
    "data-lsg-component": "icon-link"
  };
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    id: `${id}-base`,
    className: DomUtils.cleanupClassObject({
      [IconLink_styles.hostClass]: true,
      [className]: !!className,
      [`${IconLink_styles.hostClass}__size-${size}`]: size,
      [`${IconLink_styles.hostClass}__text-ellipsis`]: textEllipsis,
      [`${IconLink_styles.hostClass}__inline`]: inline,
      [`${IconLink_styles.hostClass}__inline__with-label`]: inline && label,
      [`${prefix.lsgPre}text-align-${horizontalAlignment}`]: horizontalAlignment,
      [`${prefix.lsgPre}margin-align-${horizontalAlignment}`]: horizontalAlignment
    }),
    ref: containerRef,
    as: as || inline && "span" || "div"
  }, /*#__PURE__*/React__default.createElement(ActionPresentation.ActionPresentation, {
    htmlAttrs: htmlAttrs,
    disabled: disabled,
    loading: loading,
    loadingAriaLabel: loadingAriaLabel,
    nonInteractive: nonInteractive,
    role: role,
    selected: selected,
    ref: actionRef,
    id: id,
    ...otherProps
  }, /*#__PURE__*/React__default.createElement(Div, {
    className: DomUtils.cleanupClassObject({
      [`${IconLink_styles.hostClass}__${look}`]: true,
      [`${IconLink_styles.hostClass}__${textColor}`]: true,
      [`${IconLink_styles.hostClass}-wrapper`]: true,
      [`${IconLink_styles.hostClass}__${direction}`]: !disabled && !nonInteractive && (hasMouseHover || clicked),
      [`${IconLink_styles.hostClass}__focus`]: !disabled && hasKeyboardFocus,
      [`${IconLink_styles.hostClass}__hidden`]: loading
    }),
    ref: innerRef
  }, look !== "no-icon" && (/*#__PURE__*/React__default.createElement(IconPresentation.IconPresentation, {
    className: `${IconLink_styles.hostClass}-icon`,
    svgAttrs: svgAttrs,
    id: iconId,
    noMargin: true,
    name: iconName,
    icon: !disabled && (hasMouseHover || hasKeyboardFocus) || !iconOnHover ? icon : () => "<svg />",
    hover: !disabled && hasMouseHover,
    color: iconColor,
    variant: iconVariant,
    size: size === "legacy" ? "legacy-reduced" : size || "small",
    "aria-hidden": true,
    // A11y-Decision: Never set a htmlAttrs.title
    // TODO: redundant aria-hidden. There should be one recommended way.
    title: "",
    transform: transform,
    badge: badge
  })), /*#__PURE__*/React__default.createElement("span", {
    className: `${IconLink_styles.hostClass}-label`,
    "data-lsg-subcomponent": "label",
    id: `${id}-label`
  }, label))));
};
IconLinkPresentation.displayName = "IconLinkPresentation";

exports.IconLinkPresentation = IconLinkPresentation;
