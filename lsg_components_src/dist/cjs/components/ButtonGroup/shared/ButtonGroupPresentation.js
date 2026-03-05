'use strict';

var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var Host = require('../../../utils/Host.js');
var ButtonGroup_styles = require('./ButtonGroup.styles.js');

// @ts-strict-ignore
const ButtonGroupPresentation = ({
  id,
  children,
  className,
  noMargin,
  direction = "horizontal",
  align,
  viewport,
  horizontalAlignment,
  as,
  ariaLabel,
  dontFlipFocus
}) => {
  const isDirectionVertical = direction === "vertical" || direction === "flip-xs" && viewport === "xs" || direction === "flip-sm" && (viewport === "sm" || viewport === "xs") || direction === "flip-md" && (viewport === "md" || viewport === "sm" || viewport === "xs");
  const alignment = align || horizontalAlignment || (isDirectionVertical ? "center" : "left");
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    id: id,
    className: DomUtils.cleanupClassObject({
      [className]: !!className,
      [ButtonGroup_styles.hostClass]: true,
      [`${ButtonGroup_styles.hostClass}__${isDirectionVertical ? "vertical" : "horizontal"}`]: true,
      [`${ButtonGroup_styles.hostClass}__${alignment}`]: true,
      [`${ButtonGroup_styles.hostClass}__noFlip`]: dontFlipFocus,
      [`${prefix.lsgPre}no-margin`]: noMargin
    }),
    as: as,
    htmlAttrs: {
      "aria-label": ariaLabel
    }
  }, children);
};
ButtonGroupPresentation.displayName = "ButtonGroupPresentation";

exports.ButtonGroupPresentation = ButtonGroupPresentation;
