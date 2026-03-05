import React__default from 'react';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { Host } from '../../../utils/Host.js';
import { hostClass } from './ContentInclude.styles.js';

// @ts-strict-ignore
const ContentIncludePresentation = ({ id, className, cid }) => {
    const ci = typeof window === "object" ? document.getElementById(cid) : undefined;
    return (React__default.createElement(Host, { id: id, className: cleanupClassObject({
            [className]: !!className,
            [hostClass]: true,
        }), dangerouslySetInnerHTML: ci && { __html: ci?.innerHTML } }));
};
ContentIncludePresentation.displayName = "ContentIncludePresentation";

export { ContentIncludePresentation };
