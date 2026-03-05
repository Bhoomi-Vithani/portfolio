'use strict';

var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var Host = require('../../../utils/Host.js');
var IconLinkGroup_styles = require('./IconLinkGroup.styles.js');

// @ts-strict-ignore
const IconLinkGroupPresentation = ({
  direction,
  id,
  className,
  noMargin,
  children,
  viewport,
  maxWidth,
  centeredLayout,
  horizontalAlignment,
  as
}) => {
  const isDirectionVertical = direction === "vertical" || direction === "flip-xs" && viewport === "xs" || direction === "flip-sm" && (viewport === "sm" || viewport === "xs") || direction === "flip-md" && (viewport === "md" || viewport === "sm" || viewport === "xs") || direction === "flip-lg" && (viewport === "lg" || viewport === "md" || viewport === "sm" || viewport === "xs");
  const noText = direction === "collapse-xs" && viewport === "xs" || direction === "collapse-sm" && (viewport === "sm" || viewport === "xs") || direction === "collapse-md" && (viewport === "md" || viewport === "sm" || viewport === "xs") || direction === "collapse-lg" && (viewport === "lg" || viewport === "md" || viewport === "sm" || viewport === "xs") || direction === "textfield" || direction === "hero-search" || direction === "table";
  const hasHover = direction !== "table" && direction !== "textfield" && direction !== "hero-search" && direction !== "header-menu" && direction !== "pagination";
  // eslint-disable-next-line no-nested-ternary
  const hover = hasHover ?
  // eslint-disable-next-line no-nested-ternary
  isDirectionVertical ? "right" : direction === "vertical-left" ? "left" : "top" : undefined;
  const spacing = {
    table: "table",
    textfield: "textfield",
    "hero-search": "hero-search"
  }[direction] || "normal";
  const noWrap = direction === "textfield" || direction === "hero-search" || direction === "header-menu" || direction === "table";
  const align = centeredLayout ? "center" : horizontalAlignment;
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    className: DomUtils.cleanupClassObject({
      [className]: !!className,
      [IconLinkGroup_styles.hostClass]: true,
      [`${prefix.lsgPre}no-margin`]: noMargin,
      [`${IconLinkGroup_styles.hostClass}__${isDirectionVertical ? "vertical" : "horizontal"}`]: true,
      [`${IconLinkGroup_styles.hostClass}__pagination`]: direction === "pagination",
      [`${IconLinkGroup_styles.hostClass}__hover-${hover}`]: hover,
      [`${IconLinkGroup_styles.hostClass}__${spacing}`]: spacing,
      [`${IconLinkGroup_styles.hostClass}__no-text`]: noText,
      [`${IconLinkGroup_styles.hostClass}__no-wrap`]: noWrap,
      [`${IconLinkGroup_styles.hostClass}__align-${align}`]: align
    }),
    id: id,
    style: maxWidth && {
      maxWidth
    },
    as: as
  }, children);
};
IconLinkGroupPresentation.displayName = "IconLinkGroupPresentation";

exports.IconLinkGroupPresentation = IconLinkGroupPresentation;
