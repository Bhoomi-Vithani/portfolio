import React__default from 'react';
import { cleanupClassObject } from '../../utils/DomUtils.js';
import { Host } from '../../utils/Host.js';
import { hostClass } from './NavigationSeparator.styles.js';

// @ts-strict-ignore
const NavigationSeparatorPresentation = ({ id, children, className, isStencilHost }) => (React__default.createElement(Host, { id: id, className: cleanupClassObject({
        [className]: !!className,
        [hostClass]: true,
    }), isStencilHost: isStencilHost }, children));
NavigationSeparatorPresentation.displayName = "NavigationSeparatorPresentation";

export { NavigationSeparatorPresentation };
