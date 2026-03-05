import React__default from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { useUniqueId } from '../../../utils/Hooks/index.js';
import { Host } from '../../../utils/Host.js';
import { fragmentMap } from '../../../utils/ReactUtils.js';
import { getViewportSize } from '../../../utils/windowEvents/ResizeEvents.js';
import { HeadlinePresentation } from '../../Headline/shared/HeadlinePresentation.js';
import { hostClass } from './ChartInfoContainer.styles.js';

// @ts-strict-ignore
/**  Mapping to a valid position when position = auto
Return possible values:
 - mapped position when auto is given
 - unmapped position when not auto is given
 - no-position (default: when undefined) */
const mapChartInfoPosition = (originalPosition, viewPort) => {
    let pos = originalPosition;
    if (originalPosition === "auto" && ["xs", "sm"].includes(viewPort)) {
        pos = "bottom";
    }
    if (originalPosition === "auto" && ["md", "lg", "xl"].includes(viewPort)) {
        pos = "right";
    }
    return pos || "";
};
const ChartInfoContainer = (props) => {
    const { children, id, className, noMargin, position = "auto", titleFormatter, title, appearance, ariaDescription, htmlAttrs = {}, onItemActive, } = props;
    const uniqueId = useUniqueId(`${hostClass}-description`, `${id}-description`);
    const viewPort = getViewportSize();
    const itemOrder = (position === "right" && ["md", "lg", "xl"].includes(viewPort)) || appearance === "tooltip" ? "column" : "row";
    return (React__default.createElement(Host, { id: id, className: cleanupClassObject({
            [className]: className,
            [`${lsgPre}no-margin`]: noMargin,
            [hostClass]: true,
            [`${hostClass}-appearance-${appearance}`]: !!appearance,
            [`${hostClass}__shadow`]: appearance === "tooltip",
        }), role: "list", "aria-label": [title, htmlAttrs["aria-label"]]?.filter(t => !!t).join(" "), "aria-labelledby": htmlAttrs["aria-labelledby"], "aria-describedby": ariaDescription || undefined },
        React__default.createElement("span", { id: uniqueId, className: `${hostClass}-description__hidden` }, ariaDescription),
        React__default.createElement(HeadlinePresentation, { as: "span", size: "h6" },
            " ",
            titleFormatter ? titleFormatter(title) : title),
        React__default.createElement("div", { className: cleanupClassObject({
                [`${hostClass}-items`]: true,
                [`${hostClass}-items-order-${itemOrder}`]: true,
            }) }, fragmentMap(children, (child, index) => React__default.cloneElement(child, {
            role: "listitem",
            appearance,
            onMouseEnter: () => onItemActive?.(index),
            onMouseLeave: () => onItemActive?.(null),
        })))));
};

export { ChartInfoContainer, mapChartInfoPosition };
