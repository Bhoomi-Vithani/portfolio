import React__default from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { hostClass as hostClass$1 } from '../../GridColumn/shared/GridColumn.styles.js';
import { hostClass } from './Section.styles.js';

// @ts-strict-ignore
const SectionPresentation = ({ children, noMargin, className, spacing = "standard", id, separator, contentWidth = 12, as = "section", htmlAttrs, }) => {
    // map old look values to new
    const lookReworked = spacing === "marketing" || spacing === "technical" || spacing === "doublesubsection" ? "standard" : spacing;
    const Component = as;
    return (React__default.createElement(Component, { id: id, className: cleanupClassObject({
            [hostClass]: true,
            [`${lsgPre}no-margin`]: noMargin,
            [`${hostClass}__${lookReworked}`]: lookReworked !== "standard",
            [`${hostClass}__separator`]: separator,
            [`${hostClass}__content-${contentWidth}`]: contentWidth,
            [className]: className,
        }), ...htmlAttrs },
        React__default.createElement("div", { className: cleanupClassObject({
                [`${hostClass}-inner`]: true,
                [`${hostClass$1}__md-col-6`]: contentWidth === 6,
                [`${hostClass$1}__sm-col-6`]: contentWidth === 6,
                [`${hostClass$1}__md-col-8`]: contentWidth === 8,
                [`${hostClass$1}__md-col-10`]: contentWidth === 10,
            }) }, children)));
};
SectionPresentation.displayName = "SectionPresentation";

export { SectionPresentation };
