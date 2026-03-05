import React__default from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { Host } from '../../../utils/Host.js';
import { hostClass } from './StatusIndicatorGroup.styles.js';

// @ts-strict-ignore
const StatusIndicatorGroupPresentation = ({ id, children, className, noMargin, isStencilHost, direction, label, viewport, horizontalAlignment, }) => {
    const isDirectionVertical = direction === "vertical" ||
        (direction === "flip-xs" && viewport === "xs") ||
        (direction === "flip-sm" && (viewport === "sm" || viewport === "xs")) ||
        (direction === "flip-md" && (viewport === "md" || viewport === "sm" || viewport === "xs"));
    const noText = (direction === "collapse-xs" && viewport === "xs") ||
        (direction === "collapse-sm" && (viewport === "sm" || viewport === "xs")) ||
        (direction === "collapse-md" && (viewport === "md" || viewport === "sm" || viewport === "xs"));
    return (React__default.createElement(Host, { id: id, className: cleanupClassObject({
            [className]: !!className,
            [hostClass]: true,
            [`${lsgPre}no-margin`]: noMargin,
            [`${hostClass}__no-text`]: noText,
            [`${hostClass}__${isDirectionVertical ? "vertical" : "horizontal"}`]: true,
            [`${hostClass}__align-${horizontalAlignment}`]: horizontalAlignment,
        }), isStencilHost: isStencilHost },
        label && React__default.createElement("div", { className: `${hostClass}-label` }, label),
        React__default.createElement("div", { className: `${hostClass}-bottom-wrapper` }, children)));
};
StatusIndicatorGroupPresentation.displayName = "StatusIndicatorGroupPresentation";

export { StatusIndicatorGroupPresentation };
