'use strict';

var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var Host = require('../../../utils/Host.js');
var IconPresentation = require('../../Icon/shared/IconPresentation.js');
var ParagraphPresentation = require('../../Paragraph/shared/ParagraphPresentation.js');
var StatusIndicator_styles = require('./StatusIndicator.styles.js');

const StatusIndicatorPresentation = ({
  id,
  statusColor = "inactive",
  icon,
  tag,
  tagHidden,
  tagRole,
  noMargin,
  className,
  helperText
}) => (/*#__PURE__*/React__default.createElement(Host.Host, {
  id: id,
  className: DomUtils.cleanupClassObject({
    [className]: !!className,
    [StatusIndicator_styles.hostClass]: true,
    [`${prefix.lsgPre}no-margin`]: noMargin,
    [`${StatusIndicator_styles.hostClass}--${statusColor}`]: true
  })
}, /*#__PURE__*/React__default.createElement("div", {
  className: `${StatusIndicator_styles.hostClass}-first-line`,
  role: tagRole
}, /*#__PURE__*/React__default.createElement("div", {
  className: `${StatusIndicator_styles.hostClass}__sphere`,
  title: tagHidden ? tag || statusColor : undefined
}, icon !== undefined && (/*#__PURE__*/React__default.createElement(IconPresentation.IconPresentation, {
  icon: icon,
  size: "xsmall",
  variant: "solid",
  color: ["inactive", undefined].includes(statusColor) ? "black" : "white",
  svgAttrs: {
    role: !tagHidden ? "presentation" : "img",
    "aria-label": tagHidden && tag,
    "aria-hidden": !tagHidden,
    "aria-atomic": false
  }
}))), /*#__PURE__*/React__default.createElement("span", {
  className: DomUtils.cleanupClassObject({
    [`${StatusIndicator_styles.hostClass}-span`]: true,
    [`${StatusIndicator_styles.hostClass}-tag-visually__hidden`]: tagHidden
  })
}, tag || statusColor)), helperText && !tagHidden && (/*#__PURE__*/React__default.createElement(ParagraphPresentation.ParagraphPresentation, {
  className: `${StatusIndicator_styles.hostClass}-helper-text`,
  size: "helper-text"
}, helperText))));
StatusIndicatorPresentation.displayName = "StatusIndicatorPresentation";

exports.StatusIndicatorPresentation = StatusIndicatorPresentation;
