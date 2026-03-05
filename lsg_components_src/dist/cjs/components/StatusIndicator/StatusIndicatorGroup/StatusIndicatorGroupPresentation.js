'use strict';

var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var Host = require('../../../utils/Host.js');
var StatusIndicatorGroup_styles = require('./StatusIndicatorGroup.styles.js');

// @ts-strict-ignore
const StatusIndicatorGroupPresentation = ({
  id,
  children,
  className,
  noMargin,
  isStencilHost,
  direction,
  label,
  viewport,
  horizontalAlignment
}) => {
  const isDirectionVertical = direction === "vertical" || direction === "flip-xs" && viewport === "xs" || direction === "flip-sm" && (viewport === "sm" || viewport === "xs") || direction === "flip-md" && (viewport === "md" || viewport === "sm" || viewport === "xs");
  const noText = direction === "collapse-xs" && viewport === "xs" || direction === "collapse-sm" && (viewport === "sm" || viewport === "xs") || direction === "collapse-md" && (viewport === "md" || viewport === "sm" || viewport === "xs");
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    id: id,
    className: DomUtils.cleanupClassObject({
      [className]: !!className,
      [StatusIndicatorGroup_styles.hostClass]: true,
      [`${prefix.lsgPre}no-margin`]: noMargin,
      [`${StatusIndicatorGroup_styles.hostClass}__no-text`]: noText,
      [`${StatusIndicatorGroup_styles.hostClass}__${isDirectionVertical ? "vertical" : "horizontal"}`]: true,
      [`${StatusIndicatorGroup_styles.hostClass}__align-${horizontalAlignment}`]: horizontalAlignment
    }),
    isStencilHost: isStencilHost
  }, label && /*#__PURE__*/React__default.createElement("div", {
    className: `${StatusIndicatorGroup_styles.hostClass}-label`
  }, label), /*#__PURE__*/React__default.createElement("div", {
    className: `${StatusIndicatorGroup_styles.hostClass}-bottom-wrapper`
  }, children));
};
StatusIndicatorGroupPresentation.displayName = "StatusIndicatorGroupPresentation";

exports.StatusIndicatorGroupPresentation = StatusIndicatorGroupPresentation;
