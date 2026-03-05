'use strict';

var React__default = require('react');
var DomUtils = require('../../../utils/DomUtils.js');
var Subsection_styles = require('./Subsection.styles.js');

// @ts-strict-ignore
const SubsectionPresentation = ({
  id,
  className,
  children,
  separator,
  as = "div",
  htmlAttrs,
  spacing = "standard"
}) => {
  const Component = as;
  return /*#__PURE__*/React__default.createElement(Component, {
    id: id,
    className: DomUtils.cleanupClassObject({
      [Subsection_styles.hostClass]: true,
      [`${Subsection_styles.hostClass}__separator`]: separator || spacing === "small",
      [`${Subsection_styles.hostClass}__${spacing}`]: spacing,
      [className]: className
    }),
    ...htmlAttrs
  }, children);
};
SubsectionPresentation.displayName = "SubsectionPresentation";

exports.SubsectionPresentation = SubsectionPresentation;
