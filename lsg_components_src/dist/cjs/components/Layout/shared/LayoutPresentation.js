'use strict';

var React__default = require('react');
var DomUtils = require('../../../utils/DomUtils.js');
var Layout_styles = require('./Layout.styles.js');

// @ts-strict-ignore
const LayoutPresentation = ({
  id,
  display = "flex",
  children,
  className,
  noMargin,
  as = "div",
  justifyContent = "flex-start",
  gap = "none",
  rowGap = "none",
  wrap,
  grow,
  shrink,
  basis,
  alignItems = "stretch",
  stack,
  componentSpacing,
  flowReverse
}) => {
  const Container = as;
  return /*#__PURE__*/React__default.createElement(Container, {
    id: id,
    className: DomUtils.cleanupClassObject({
      [className]: !!className,
      [Layout_styles.hostClass]: true,
      [`${Layout_styles.hostClass}-display-${display}`]: display !== undefined,
      [`${Layout_styles.hostClass}-no-margin`]: noMargin,
      [`${Layout_styles.hostClass}-alignItems-${alignItems}`]: display === "flex" && !!alignItems,
      [`${Layout_styles.hostClass}-justifyContent-${justifyContent}`]: display === "flex" && !!justifyContent,
      [`${Layout_styles.hostClass}-stack-${stack}`]: display === "flex" && !!stack,
      [`${Layout_styles.hostClass}-wrap-${wrap}`]: display === "flex" && wrap !== undefined,
      [`${Layout_styles.hostClass}-flexGrow-${grow}`]: grow !== undefined,
      [`${Layout_styles.hostClass}-flexShrink-${shrink}`]: shrink !== undefined,
      [`${Layout_styles.hostClass}-gap-${gap}`]: display === "flex" && gap !== undefined && gap !== "none",
      [`${Layout_styles.hostClass}-row-gap-${rowGap}`]: display === "flex" && rowGap !== undefined && rowGap !== "none",
      [`${Layout_styles.hostClass}-flow-reverse-${flowReverse}`]: display === "flex" && !!flowReverse,
      [`${Layout_styles.hostClass}-component-spacing-${componentSpacing}`]: componentSpacing
    }),
    style: {
      flexBasis: basis
    }
  }, children);
};
LayoutPresentation.displayName = "LayoutPresentation";

exports.LayoutPresentation = LayoutPresentation;
