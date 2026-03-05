import React__default from 'react';
import { lsgPre } from '../../config/prefix.js';
import { cleanupClassObject } from '../../utils/DomUtils.js';
import { Host } from '../../utils/Host.js';
import { hostClass } from './NavigationLinkGroup.styles.js';

// @ts-strict-ignore
const NavigationLinkGroupPresentation = ({ id, noMargin, children, className, centeredLayout, size = "meta-bar", }) => (React__default.createElement(Host, { className: cleanupClassObject({
        [`${hostClass}`]: true,
        [`${hostClass}__${size}`]: size,
        [className]: className,
        [`${lsgPre}no-margin`]: noMargin,
        [`${hostClass}-centered-layout`]: centeredLayout,
    }), id: id, as: "ul", role: "list" // Because of style-type: none - Safari Bug: https://web.dev/articles/creative-list-styling?hl=de#styling_lists_that_dont_look_like_lists
    , htmlAttrs: { "data-lsg-component": "navigation-link-group" } }, children));
NavigationLinkGroupPresentation.displayName = "NavigationLinkGroupPresentation";

export { NavigationLinkGroupPresentation };
