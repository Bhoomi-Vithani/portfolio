'use strict';

var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var GridColumn_styles = require('../../GridColumn/shared/GridColumn.styles.js');
var Section_styles = require('./Section.styles.js');

// @ts-strict-ignore
const SectionPresentation = ({
  children,
  noMargin,
  className,
  spacing = "standard",
  id,
  separator,
  contentWidth = 12,
  as = "section",
  htmlAttrs
}) => {
  // map old look values to new
  const lookReworked = spacing === "marketing" || spacing === "technical" || spacing === "doublesubsection" ? "standard" : spacing;
  const Component = as;
  return /*#__PURE__*/React__default.createElement(Component, {
    id: id,
    className: DomUtils.cleanupClassObject({
      [Section_styles.hostClass]: true,
      [`${prefix.lsgPre}no-margin`]: noMargin,
      [`${Section_styles.hostClass}__${lookReworked}`]: lookReworked !== "standard",
      [`${Section_styles.hostClass}__separator`]: separator,
      [`${Section_styles.hostClass}__content-${contentWidth}`]: contentWidth,
      [className]: className
    }),
    ...htmlAttrs
  }, /*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${Section_styles.hostClass}-inner`]: true,
      [`${GridColumn_styles.hostClass}__md-col-6`]: contentWidth === 6,
      [`${GridColumn_styles.hostClass}__sm-col-6`]: contentWidth === 6,
      [`${GridColumn_styles.hostClass}__md-col-8`]: contentWidth === 8,
      [`${GridColumn_styles.hostClass}__md-col-10`]: contentWidth === 10
    })
  }, children));
};
SectionPresentation.displayName = "SectionPresentation";

exports.SectionPresentation = SectionPresentation;
