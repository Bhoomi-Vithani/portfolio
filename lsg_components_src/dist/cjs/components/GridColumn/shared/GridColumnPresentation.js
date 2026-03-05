'use strict';

var React__default = require('react');
var DomUtils = require('../../../utils/DomUtils.js');
var GridColumn_styles = require('./GridColumn.styles.js');

// @ts-strict-ignore
/* eslint-disable */
const getGridColumnClasses = ({
  horizontalAlignment,
  horizontalAlignmentXs,
  horizontalAlignmentSm,
  horizontalAlignmentMd,
  size,
  md,
  sm,
  xs,
  className
}) => DomUtils.cleanupClassObject({
  [className]: !!className,
  [`${GridColumn_styles.hostClass}`]: true,
  [`${GridColumn_styles.hostClass}__md-col-${md ?? (size !== undefined ? size : 12)}`]: true,
  [`${GridColumn_styles.hostClass}__sm-col-${sm ?? (size <= 8 ? size : 8)}`]: true,
  [`${GridColumn_styles.hostClass}__xs-col-${xs ?? (size <= 4 ? size : 4)}`]: true,
  [`${GridColumn_styles.hostClass}__align-${horizontalAlignment}`]: !!horizontalAlignment,
  [`${GridColumn_styles.hostClass}__align-xs-${horizontalAlignmentXs}`]: !!horizontalAlignmentXs,
  [`${GridColumn_styles.hostClass}__align-sm-${horizontalAlignmentSm}`]: !!horizontalAlignmentSm,
  [`${GridColumn_styles.hostClass}__align-md-${horizontalAlignmentMd}`]: !!horizontalAlignmentMd
});
const GridColumnPresentation = ({
  id,
  as = "div",
  children,
  style,
  ...otherProps
}) => {
  const Component = as;
  return /*#__PURE__*/React__default.createElement(Component, {
    className: getGridColumnClasses(otherProps),
    style: style,
    id: id
  }, children);
};
GridColumnPresentation.displayName = "GridColumnPresentation";

exports.GridColumnPresentation = GridColumnPresentation;
exports.getGridColumnClasses = getGridColumnClasses;
