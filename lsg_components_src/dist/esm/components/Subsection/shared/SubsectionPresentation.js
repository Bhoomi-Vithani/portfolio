import React__default from 'react';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { hostClass } from './Subsection.styles.js';

// @ts-strict-ignore
const SubsectionPresentation = ({ id, className, children, separator, as = "div", htmlAttrs, spacing = "standard", }) => {
    const Component = as;
    return (React__default.createElement(Component, { id: id, className: cleanupClassObject({
            [hostClass]: true,
            [`${hostClass}__separator`]: separator || spacing === "small",
            [`${hostClass}__${spacing}`]: spacing,
            [className]: className,
        }), ...htmlAttrs }, children));
};
SubsectionPresentation.displayName = "SubsectionPresentation";

export { SubsectionPresentation };
