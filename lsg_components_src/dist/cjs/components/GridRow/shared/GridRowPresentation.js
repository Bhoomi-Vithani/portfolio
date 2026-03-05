'use strict';

var React__default = require('react');
var DomUtils = require('../../../utils/DomUtils.js');
var ReactUtils = require('../../../utils/ReactUtils.js');
var GridRow_styles = require('./GridRow.styles.js');

// @ts-strict-ignore
const getGridRowClasses = ({
  className,
  columnReverse,
  verticalAlignment
}) => DomUtils.cleanupClassObject({
  [className]: !!className,
  [`${GridRow_styles.hostClass}`]: true,
  [`${GridRow_styles.hostClass}-reverse-${columnReverse}`]: columnReverse,
  [`${GridRow_styles.hostClass}-align-${verticalAlignment}`]: verticalAlignment
});
const GridRowPresentation = ({
  id,
  as = "div",
  children,
  ...otherProps
}) => {
  const Component = as;
  return /*#__PURE__*/React__default.createElement(Component, {
    className: getGridRowClasses(otherProps),
    id: id
  }, ReactUtils.fragmentMap(children, child => /*#__PURE__*/React__default.cloneElement(child, {
    as: as === "ul" || as === "ol" ? "li" : child.props.as
  })));
};
GridRowPresentation.displayName = "GridRowPresentation";

exports.GridRowPresentation = GridRowPresentation;
exports.getGridRowClasses = getGridRowClasses;
