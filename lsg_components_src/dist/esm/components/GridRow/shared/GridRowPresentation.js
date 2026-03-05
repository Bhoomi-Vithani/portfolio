import React__default from 'react';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { fragmentMap } from '../../../utils/ReactUtils.js';
import { hostClass } from './GridRow.styles.js';

// @ts-strict-ignore
const getGridRowClasses = ({ className, columnReverse, verticalAlignment }) => cleanupClassObject({
    [className]: !!className,
    [`${hostClass}`]: true,
    [`${hostClass}-reverse-${columnReverse}`]: columnReverse,
    [`${hostClass}-align-${verticalAlignment}`]: verticalAlignment,
});
const GridRowPresentation = ({ id, as = "div", children, ...otherProps }) => {
    const Component = as;
    return (React__default.createElement(Component, { className: getGridRowClasses(otherProps), id: id }, fragmentMap(children, (child) => React__default.cloneElement(child, {
        as: as === "ul" || as === "ol" ? "li" : child.props.as,
    }))));
};
GridRowPresentation.displayName = "GridRowPresentation";

export { GridRowPresentation, getGridRowClasses };
