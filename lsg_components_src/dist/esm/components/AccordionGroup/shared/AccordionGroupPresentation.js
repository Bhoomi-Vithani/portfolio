import React__default from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { Host } from '../../../utils/Host.js';
import { hostClass } from './AccordionGroup.styles.js';

// @ts-strict-ignore
const AccordionGroupPresentation = ({ id, children, className, noMargin, isStencilHost, }) => (React__default.createElement(Host, { id: id, className: cleanupClassObject({
        [className]: !!className,
        [hostClass]: true,
        [`${lsgPre}no-margin`]: noMargin,
    }), isStencilHost: isStencilHost }, children));
AccordionGroupPresentation.displayName = "AccordionGroupPresentation";

export { AccordionGroupPresentation };
