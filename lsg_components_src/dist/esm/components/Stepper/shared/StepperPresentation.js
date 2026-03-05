import React__default from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { Host } from '../../../utils/Host.js';
import { getGridClasses } from '../../Grid/shared/GridPresentation.js';
import { getGridRowClasses } from '../../GridRow/shared/GridRowPresentation.js';
import { IconLinkGroupWrapper } from '../../IconLinkGroup/shared/IconLinkGroupWrapper.js';
import { hostClass } from './Stepper.styles.js';

// @ts-strict-ignore
const StepperPresentation = ({ id, children, noMargin, className, headline, iconLinks, centeredLayout, navHtmlAttrs, }) => {
    // use nav element for iconLinks if a label is provided
    const Nav = navHtmlAttrs?.["aria-label"] ? "nav" : React__default.Fragment;
    return (React__default.createElement(Host, { id: id, className: cleanupClassObject({
            [className]: !!className,
            [hostClass]: true,
            [`${lsgPre}no-margin`]: noMargin,
            [`${lsgPre}-centered-layout`]: centeredLayout,
        }) },
        headline,
        React__default.createElement("div", { className: getGridClasses({ spacing: "doublesubsection" }) },
            React__default.createElement("div", { className: getGridRowClasses({}) }, children)),
        iconLinks && (React__default.createElement(Nav, { ...navHtmlAttrs },
            React__default.createElement(IconLinkGroupWrapper, { direction: "horizontal" }, iconLinks)))));
};
StepperPresentation.displayName = "StepperPresentation";

export { StepperPresentation };
