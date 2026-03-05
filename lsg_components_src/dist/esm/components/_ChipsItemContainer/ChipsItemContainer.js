import React__default from 'react';
import { lsgPre } from '../../config/prefix.js';
import { cleanupClassObject } from '../../utils/DomUtils.js';
import { hostClass } from './ChipsItemContainer.styles.js';

const ChipsItemContainer = (props) => {
    const { as, containerRef, clicked, hasKeyboardFocus, hasMouseHover, isSelected, noMargin, children, appearance, className, } = props;
    const Component = as || "div";
    return (React__default.createElement(Component, { className: cleanupClassObject({
            [className || ""]: !!className,
            [hostClass]: true,
            [`${hostClass}-container`]: true,
            [`${hostClass}__hover`]: hasMouseHover || hasKeyboardFocus,
            [`${hostClass}__focus`]: hasKeyboardFocus,
            [`${hostClass}__selected`]: isSelected,
            [`${lsgPre}no-margin`]: noMargin || false,
            [`${hostClass}__clicked`]: clicked,
            [`${hostClass}__no-space`]: appearance === "no-text",
        }), ref: containerRef }, children));
};

export { ChipsItemContainer };
