import { interaction_arrows_chevronLeft, interaction_arrows_chevronRight } from '@lsg/icons';
import React__default, { useState } from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject, cleanupClassNames } from '../../../utils/DomUtils.js';
import { texts } from '../../../utils/Localization.js';
import { ActionPresentation } from '../../Action/shared/ActionPresentation.js';
import { IconLinkWrapper } from '../../IconLink/shared/IconLinkWrapper.js';
import { hostClass } from './SliderPagination.styles.js';

// @ts-strict-ignore
const Dot = ({ label, active, onClick, actionHtmlAttrs, }) => {
    const [hasKeyboardFocus, setHasKeyboardFocus] = useState(false);
    return (React__default.createElement(ActionPresentation, { hasKeyboardFocus: hasKeyboardFocus, onKeyboardFocusChange: setHasKeyboardFocus, className: `${hostClass}-point-action`, onClick: onClick, htmlAttrs: {
            "aria-current": active ? true : undefined,
            ...actionHtmlAttrs,
        } },
        React__default.createElement("div", { className: `${hostClass}-point-dot` }),
        React__default.createElement("div", { className: `${hostClass}-point-label` }, label)));
};
const SliderPaginationPresentation = ({ id, className, noMargin, numDots, activeDotIndex, onPointClick, itemAriaLabelFormatter, previousButtonAriaLabel = texts.lsg.component.SliderPagination.previousPage, nextButtonAriaLabel = texts.lsg.component.SliderPagination.nextPage, actionHtmlAttrs, onArrowLeftClick = () => {
    /* empty */
}, onArrowRightClick = () => {
    /* empty */
}, }) => (React__default.createElement("div", { id: id, className: cleanupClassObject({
        [className]: !!className,
        [hostClass]: true,
        [`${lsgPre}no-margin`]: noMargin,
    }) },
    React__default.createElement(IconLinkWrapper, { label: previousButtonAriaLabel, noMargin: true, color: "primary", icon: interaction_arrows_chevronLeft, appearance: "no-text", onClick: onArrowLeftClick, className: cleanupClassNames([`${hostClass}-arrow`, `${hostClass}-arrow-left`]), disabled: activeDotIndex === 0, htmlAttrs: actionHtmlAttrs }),
    React__default.createElement("ul", { className: `${hostClass}-pointlist`, role: "list" // Because of style-type: none - Safari Bug: https://web.dev/articles/creative-list-styling?hl=de#styling_lists_that_dont_look_like_lists
     }, Array.from(Array(numDots).keys()).map((i) => (React__default.createElement("li", { className: cleanupClassNames([
            `${hostClass}-point`,
            activeDotIndex === i && `${hostClass}-point-active`,
        ]), key: i },
        React__default.createElement(Dot, { label: itemAriaLabelFormatter?.(i + 1, activeDotIndex === i) || `${i + 1}`, active: activeDotIndex === i, actionHtmlAttrs: actionHtmlAttrs, onClick: e => onPointClick(i, e) }))))),
    React__default.createElement(IconLinkWrapper, { label: nextButtonAriaLabel, noMargin: true, color: "primary", icon: interaction_arrows_chevronRight, appearance: "no-text", onClick: onArrowRightClick, className: cleanupClassNames([`${hostClass}-arrow`, `${hostClass}-arrow-right`]), disabled: activeDotIndex === numDots - 1, htmlAttrs: actionHtmlAttrs })));
SliderPaginationPresentation.displayName = "SliderPaginationPresentation";

export { SliderPaginationPresentation };
