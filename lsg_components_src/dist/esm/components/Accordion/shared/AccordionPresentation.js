import { interaction_arrows_chevronUp } from '@lsg/icons';
import React__default from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { utilityClassesBackgroundBaseBefore, utilityClassesBackgroundHoverBefore, utilityClassesBackgroundFocusBefore } from '../../../styles/utilityClassesColor.styles.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { useUniqueId } from '../../../utils/Hooks/index.js';
import { Host } from '../../../utils/Host.js';
import { ActionPresentation } from '../../Action/shared/ActionPresentation.js';
import { HeadlinePresentation } from '../../Headline/shared/HeadlinePresentation.js';
import { IconPresentation } from '../../Icon/shared/IconPresentation.js';
import { hostClass } from './Accordion.styles.js';

// @ts-strict-ignore
const AccordionPresentation = ({ id: idProp, children, className, noMargin, title, titleAs = "h3", isOpen, onChange = () => {
    /* empty */
}, onKeyDown, actionRef = () => {
    /* empty */
}, hasMouseHover, hasKeyboardFocus, onMouseHoverChange = () => {
    /* empty */
}, onKeyboardFocusChange = () => {
    /* empty */
}, hideContent, contentRef, }) => {
    const id = useUniqueId(`${hostClass}`, idProp);
    return (React__default.createElement(Host, { className: cleanupClassObject({
            [hostClass]: true,
            [`${hostClass}__closed`]: !isOpen,
            [`${lsgPre}no-margin`]: noMargin,
        }) },
        React__default.createElement("div", { id: id, className: cleanupClassObject({
                [`${hostClass}-header`]: true,
                [`${hostClass}-header__hover`]: hasMouseHover,
                [utilityClassesBackgroundBaseBefore]: true,
                [utilityClassesBackgroundHoverBefore]: hasMouseHover,
                [utilityClassesBackgroundFocusBefore]: hasKeyboardFocus,
                [className]: !!className,
            }) },
            React__default.createElement(HeadlinePresentation, { className: `${hostClass}-header-headline`, as: titleAs, size: "h4", noMargin: true, ...(titleAs && // set aria attributes if titleAs is given and it is not a heading
                    !["h1", "h2", "h3", "h4", "h5", "h6"].includes(titleAs) && {
                    htmlAttrs: {
                        role: "heading",
                        "aria-level": 3,
                    },
                }) },
                React__default.createElement(ActionPresentation, { id: `${id}-header-btn`, fullWidth: true, className: cleanupClassObject({
                        [`${hostClass}-header-action`]: true,
                        [`${lsgPre}no-margin`]: noMargin,
                    }), onClick: event => {
                        onChange(!isOpen, id, event);
                    }, htmlAttrs: {
                        "aria-controls": `${id}-content`,
                        "data-lsg-component": "accordion",
                    }, expanded: !!isOpen, onKeyDown: onKeyDown, ref: actionRef, onMouseHoverChange: onMouseHoverChange, onKeyboardFocusChange: onKeyboardFocusChange },
                    React__default.createElement("div", { className: `${hostClass}-header-inner` },
                        React__default.createElement("span", { className: `${hostClass}-header-text`, "data-lsg-subcomponent": "label" }, title),
                        React__default.createElement(IconPresentation, { className: `${hostClass}-header-icon`, icon: interaction_arrows_chevronUp, noMargin: true, title: "" }))))),
        React__default.createElement("div", { ref: contentRef, className: cleanupClassObject({
                [`${hostClass}-content-container`]: true,
            }) },
            React__default.createElement("div", { role: "region", id: `${id}-content`, className: `${hostClass}-content`, "aria-labelledby": `${id}-header-btn`, 
                // hide closed content, so screenreaders don't try to access it.
                hidden: !isOpen && hideContent }, children))));
};
AccordionPresentation.displayName = "AccordionPresentation";

export { AccordionPresentation };
