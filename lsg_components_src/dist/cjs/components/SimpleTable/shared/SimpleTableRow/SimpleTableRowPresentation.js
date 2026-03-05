'use strict';

var React__default = require('react');
var prefix = require('../../../../config/prefix.js');
var DomUtils = require('../../../../utils/DomUtils.js');
var index = require('../../../../utils/Hooks/index.js');
var ReactUtils = require('../../../../utils/ReactUtils.js');
var ParagraphPresentation = require('../../../Paragraph/shared/ParagraphPresentation.js');
var SimpleTableRow_styles = require('./SimpleTableRow.styles.js');

// @ts-strict-ignore
const SimpleTableRowPresentation = ({
  id,
  children,
  className,
  title,
  helperText,
  noMargin
}) => {
  const isSm = index.useViewportRange("sm", "sm");
  return /*#__PURE__*/React__default.createElement("tr", {
    id: id,
    className: DomUtils.cleanupClassObject({
      [className]: !!className,
      [SimpleTableRow_styles.hostClass]: true,
      [`${prefix.lsgPre}no-margin`]: noMargin
    })
  }, /*#__PURE__*/React__default.createElement("th", {
    className: `${SimpleTableRow_styles.hostClass}-title`,
    scope: "row"
  }, /*#__PURE__*/React__default.createElement(ParagraphPresentation.ParagraphPresentation, {
    as: "div",
    noMargin: true
  }, title), helperText && (/*#__PURE__*/React__default.createElement(ParagraphPresentation.ParagraphPresentation, {
    as: "div",
    size: "helper-text",
    noMargin: true
  }, helperText))), /*#__PURE__*/React__default.createElement("td", {
    className: `${SimpleTableRow_styles.hostClass}-value`
  }, /*#__PURE__*/React__default.createElement(ParagraphPresentation.ParagraphPresentation, {
    as: "div",
    noMargin: true
  }, ReactUtils.fragmentMap(children, child => isSm ? /*#__PURE__*/React__default.cloneElement(child, {
    horizontalAlignment: "right"
  }) : child))));
};
SimpleTableRowPresentation.displayName = "SimpleTableRowPresentation";

exports.SimpleTableRowPresentation = SimpleTableRowPresentation;
