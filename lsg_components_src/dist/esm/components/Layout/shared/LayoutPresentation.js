import React__default from 'react';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { hostClass } from './Layout.styles.js';

// @ts-strict-ignore
const LayoutPresentation = ({ id, display = "flex", children, className, noMargin, as = "div", justifyContent = "flex-start", gap = "none", rowGap = "none", wrap, grow, shrink, basis, alignItems = "stretch", stack, componentSpacing, flowReverse, }) => {
    const Container = as;
    return (React__default.createElement(Container, { id: id, className: cleanupClassObject({
            [className]: !!className,
            [hostClass]: true,
            [`${hostClass}-display-${display}`]: display !== undefined,
            [`${hostClass}-no-margin`]: noMargin,
            [`${hostClass}-alignItems-${alignItems}`]: display === "flex" && !!alignItems,
            [`${hostClass}-justifyContent-${justifyContent}`]: display === "flex" && !!justifyContent,
            [`${hostClass}-stack-${stack}`]: display === "flex" && !!stack,
            [`${hostClass}-wrap-${wrap}`]: display === "flex" && wrap !== undefined,
            [`${hostClass}-flexGrow-${grow}`]: grow !== undefined,
            [`${hostClass}-flexShrink-${shrink}`]: shrink !== undefined,
            [`${hostClass}-gap-${gap}`]: display === "flex" && gap !== undefined && gap !== "none",
            [`${hostClass}-row-gap-${rowGap}`]: display === "flex" && rowGap !== undefined && rowGap !== "none",
            [`${hostClass}-flow-reverse-${flowReverse}`]: display === "flex" && !!flowReverse,
            [`${hostClass}-component-spacing-${componentSpacing}`]: componentSpacing,
        }), style: {
            flexBasis: basis,
        } }, children));
};
LayoutPresentation.displayName = "LayoutPresentation";

export { LayoutPresentation };
