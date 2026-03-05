import React__default from 'react';
import { lsgPre } from '../../config/prefix.js';
import { cleanupClassObject } from '../../utils/DomUtils.js';
import { Host } from '../../utils/Host.js';
import { hostClass } from './SeparatorLine.styles.js';

// @ts-strict-ignore
const SeparatorLinePresentation = ({ id, className, isStencilHost, centeredLayout = false, componentSpacing = "medium", horizontalAlignment, }) => {
    const isCentered = horizontalAlignment === "center" ? true : centeredLayout;
    return (React__default.createElement(Host, { id: id, className: cleanupClassObject({
            [className]: !!className,
            [hostClass]: true,
            [`${lsgPre}-centered-layout`]: isCentered,
            [`${lsgPre}-spacing-${componentSpacing}`]: componentSpacing,
        }), isStencilHost: isStencilHost }));
};
SeparatorLinePresentation.displayName = "SeparatorLinePresentation";

export { SeparatorLinePresentation };
