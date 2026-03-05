import React__default from 'react';
import { lsgPre } from '../../config/prefix.js';
import { cleanupClassObject } from '../../utils/DomUtils.js';
import { Host } from '../../utils/Host.js';
import { hostClass } from './Illustration.styles.js';

// @ts-strict-ignore
const IllustrationPresentation = ({ id, className, noMargin, isStencilHost, src, alt, size = "small", ariaHidden, }) => (React__default.createElement(Host, { id: id, className: cleanupClassObject({
        [className]: !!className,
        [hostClass]: true,
        [`${lsgPre}no-margin`]: noMargin,
    }), isStencilHost: isStencilHost },
    React__default.createElement("img", { className: cleanupClassObject({
            [`${hostClass}-img`]: true,
            [`${hostClass}-img__${size}`]: size,
        }), "aria-hidden": ariaHidden, src: src, alt: alt })));
IllustrationPresentation.displayName = "IllustrationPresentation";

export { IllustrationPresentation };
