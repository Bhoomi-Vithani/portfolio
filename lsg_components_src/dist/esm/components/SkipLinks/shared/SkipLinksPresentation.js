import React__default, { useState } from 'react';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { texts } from '../../../utils/Localization.js';
import { IconLinkPresentation } from '../../IconLink/shared/IconLinkPresentation.js';
import { mainClass } from './SkipLinks.styles.js';

const SkipLinksPresentation = ({ links, ariaLabel = texts.lsg.component.SkipLink.navLabel, }) => {
    const [hasKeyboardFocus, setHasKeyboardFocus] = useState(-1);
    return (React__default.createElement("nav", { "aria-label": ariaLabel, className: cleanupClassObject({
            [mainClass]: true,
            [`${mainClass}-visible`]: hasKeyboardFocus >= 0,
        }), "data-lsg-component": "skip-links" }, links.map(({ label, href, onClick }, i) => (React__default.createElement(IconLinkPresentation, { key: href || label || i, href: href, onClick: onClick, className: `${mainClass}-link`, label: label, hasKeyboardFocus: links.length > 1 && hasKeyboardFocus === i, onKeyboardFocusChange: isFocussed => setHasKeyboardFocus(isFocussed ? i : -1) })))));
};
SkipLinksPresentation.displayName = "SkipLinksPresentation";

export { SkipLinksPresentation };
