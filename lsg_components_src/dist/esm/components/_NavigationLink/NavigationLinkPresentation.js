import React__default from 'react';
import { lsgPre } from '../../config/prefix.js';
import { cleanupClassObject } from '../../utils/DomUtils.js';
import { Host } from '../../utils/Host.js';
import { ActionPresentation } from '../Action/shared/ActionPresentation.js';
import { hostClass } from './NavigationLink.styles.js';

// @ts-strict-ignore
const NavigationLinkPresentation = ({ id, className, children, noMargin, hasMouseHover, hasKeyboardFocus, secondary, htmlAttrs: htmlAttrsProp = {}, ...otherProps }) => {
    const htmlAttrs = { ...htmlAttrsProp, "data-lsg-component": "navigation-link" };
    return (React__default.createElement(Host, { className: cleanupClassObject({
            [`${hostClass}`]: true,
            [className]: className,
            [`${lsgPre}no-margin`]: noMargin,
        }), id: id, as: "li" },
        React__default.createElement(ActionPresentation, { hasKeyboardFocus: hasKeyboardFocus, htmlAttrs: htmlAttrs, ...otherProps },
            React__default.createElement("div", { className: cleanupClassObject({
                    [`${hostClass}__secondary`]: secondary,
                    [`${hostClass}-inner`]: true,
                    [`${hostClass}__hover`]: hasMouseHover,
                }) }, children))));
};
NavigationLinkPresentation.displayName = "NavigationLinkPresentation";

export { NavigationLinkPresentation };
