import React__default from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { Host } from '../../../utils/Host.js';
import { hostClass } from './IconLinkGroup.styles.js';

// @ts-strict-ignore
const IconLinkGroupPresentation = ({ direction, id, className, noMargin, children, viewport, maxWidth, centeredLayout, horizontalAlignment, as, }) => {
    const isDirectionVertical = direction === "vertical" ||
        (direction === "flip-xs" && viewport === "xs") ||
        (direction === "flip-sm" && (viewport === "sm" || viewport === "xs")) ||
        (direction === "flip-md" && (viewport === "md" || viewport === "sm" || viewport === "xs")) ||
        (direction === "flip-lg" && (viewport === "lg" || viewport === "md" || viewport === "sm" || viewport === "xs"));
    const noText = (direction === "collapse-xs" && viewport === "xs") ||
        (direction === "collapse-sm" && (viewport === "sm" || viewport === "xs")) ||
        (direction === "collapse-md" && (viewport === "md" || viewport === "sm" || viewport === "xs")) ||
        (direction === "collapse-lg" &&
            (viewport === "lg" || viewport === "md" || viewport === "sm" || viewport === "xs")) ||
        direction === "textfield" ||
        direction === "hero-search" ||
        direction === "table";
    const hasHover = direction !== "table" &&
        direction !== "textfield" &&
        direction !== "hero-search" &&
        direction !== "header-menu" &&
        direction !== "pagination";
    // eslint-disable-next-line no-nested-ternary
    const hover = hasHover
        ? // eslint-disable-next-line no-nested-ternary
            isDirectionVertical
                ? "right"
                : direction === "vertical-left"
                    ? "left"
                    : "top"
        : undefined;
    const spacing = { table: "table", textfield: "textfield", "hero-search": "hero-search" }[direction] || "normal";
    const noWrap = direction === "textfield" ||
        direction === "hero-search" ||
        direction === "header-menu" ||
        direction === "table";
    const align = centeredLayout ? "center" : horizontalAlignment;
    return (React__default.createElement(Host, { className: cleanupClassObject({
            [className]: !!className,
            [hostClass]: true,
            [`${lsgPre}no-margin`]: noMargin,
            [`${hostClass}__${isDirectionVertical ? "vertical" : "horizontal"}`]: true,
            [`${hostClass}__pagination`]: direction === "pagination",
            [`${hostClass}__hover-${hover}`]: hover,
            [`${hostClass}__${spacing}`]: spacing,
            [`${hostClass}__no-text`]: noText,
            [`${hostClass}__no-wrap`]: noWrap,
            [`${hostClass}__align-${align}`]: align,
        }), id: id, style: maxWidth && { maxWidth }, as: as }, children));
};
IconLinkGroupPresentation.displayName = "IconLinkGroupPresentation";

export { IconLinkGroupPresentation };
