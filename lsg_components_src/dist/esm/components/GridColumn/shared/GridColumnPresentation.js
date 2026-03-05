import React__default from 'react';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { hostClass } from './GridColumn.styles.js';

// @ts-strict-ignore
/* eslint-disable */
const getGridColumnClasses = ({ horizontalAlignment, horizontalAlignmentXs, horizontalAlignmentSm, horizontalAlignmentMd, size, md, sm, xs, className, }) => cleanupClassObject({
    [className]: !!className,
    [`${hostClass}`]: true,
    [`${hostClass}__md-col-${md ?? (size !== undefined ? size : 12)}`]: true,
    [`${hostClass}__sm-col-${sm ?? (size <= 8 ? size : 8)}`]: true,
    [`${hostClass}__xs-col-${xs ?? (size <= 4 ? size : 4)}`]: true,
    [`${hostClass}__align-${horizontalAlignment}`]: !!horizontalAlignment,
    [`${hostClass}__align-xs-${horizontalAlignmentXs}`]: !!horizontalAlignmentXs,
    [`${hostClass}__align-sm-${horizontalAlignmentSm}`]: !!horizontalAlignmentSm,
    [`${hostClass}__align-md-${horizontalAlignmentMd}`]: !!horizontalAlignmentMd,
});
const GridColumnPresentation = ({ id, as = "div", children, style, ...otherProps }) => {
    const Component = as;
    return (React__default.createElement(Component, { className: getGridColumnClasses(otherProps), style: style, id: id }, children));
};
GridColumnPresentation.displayName = "GridColumnPresentation";

export { GridColumnPresentation, getGridColumnClasses };
