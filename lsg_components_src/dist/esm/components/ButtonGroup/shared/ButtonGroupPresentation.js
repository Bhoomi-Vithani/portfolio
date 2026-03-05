import React__default from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { Host } from '../../../utils/Host.js';
import { hostClass } from './ButtonGroup.styles.js';

// @ts-strict-ignore
const ButtonGroupPresentation = ({ id, children, className, noMargin, direction = "horizontal", align, viewport, horizontalAlignment, as, ariaLabel, dontFlipFocus, }) => {
    const isDirectionVertical = direction === "vertical" ||
        (direction === "flip-xs" && viewport === "xs") ||
        (direction === "flip-sm" && (viewport === "sm" || viewport === "xs")) ||
        (direction === "flip-md" && (viewport === "md" || viewport === "sm" || viewport === "xs"));
    const alignment = align || horizontalAlignment || (isDirectionVertical ? "center" : "left");
    return (React__default.createElement(Host, { id: id, className: cleanupClassObject({
            [className]: !!className,
            [hostClass]: true,
            [`${hostClass}__${isDirectionVertical ? "vertical" : "horizontal"}`]: true,
            [`${hostClass}__${alignment}`]: true,
            [`${hostClass}__noFlip`]: dontFlipFocus,
            [`${lsgPre}no-margin`]: noMargin,
        }), as: as, htmlAttrs: {
            "aria-label": ariaLabel,
        } }, children));
};
ButtonGroupPresentation.displayName = "ButtonGroupPresentation";

export { ButtonGroupPresentation };
