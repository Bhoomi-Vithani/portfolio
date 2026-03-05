import React__default, { useRef, useState, useEffect, Children, cloneElement } from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { useUniqueId, useResize } from '../../../utils/Hooks/index.js';
import { Host } from '../../../utils/Host.js';
import { getViewportSize } from '../../../utils/windowEvents/ResizeEvents.js';
import { hostClass } from './BarDiagramGroup.styles.js';

// @ts-strict-ignore
// TODO: Import from styles throws an error during building, and cannot be imported. Problem should be solved to
//  avoid drifting.
const spaceBetweenItems = 8;
const BarDiagramGroupPresentation = ({ id, children, className, noMargin, isStencilHost, ariaDescription, color, direction = "vertical", amountItemsInRow, }) => {
    const descriptionId = useUniqueId(`${hostClass}-`, id);
    const groupElementRef = useRef(null);
    const [state, setState] = useState({ width: 0, viewport: "" });
    const sizeOfEachChildItem = direction === "horizontal" && amountItemsInRow
        ? // eslint-disable-next-line no-unsafe-optional-chaining
            Math.floor(groupElementRef?.current?.clientWidth / amountItemsInRow) - spaceBetweenItems * 4 // bu
        : // factor
            0;
    const viewPort = getViewportSize();
    // The width of one bar diagram become always recalculated depending on the given amount of child per
    // row. But there is a min-width in single bar style which can overruling the calculated width.
    const onResize = () => {
        setState({ width: sizeOfEachChildItem, viewport: viewPort });
    };
    useResize(onResize, [sizeOfEachChildItem, viewPort]);
    useEffect(onResize, [sizeOfEachChildItem]);
    return (React__default.createElement(Host, { id: id, className: cleanupClassObject({
            [className]: !!className,
            [hostClass]: true,
            [`${lsgPre}no-margin`]: noMargin,
            [`${hostClass}-bars-direction__${direction}`]: !!direction,
            [`${hostClass}-bars-direction__${direction}_expand`]: direction === "horizontal",
        }), isStencilHost: isStencilHost, "aria-describedby": ariaDescription ? descriptionId : undefined, ref: groupElementRef },
        ariaDescription && (React__default.createElement("span", { id: descriptionId, className: `${hostClass}-description__hidden` }, ariaDescription)),
        Children.map(children, (child) => cloneElement(child, {
            color: child.props.color || color,
            width: state.width,
            hide: direction === "horizontal" && state.width === 0, // show children in horizontal when
            // measurement of available space is completed in order to prevent flicker effect of bars
            // (render order parent/child)
        }))));
};
BarDiagramGroupPresentation.displayName = "BarDiagramGroupPresentation";

export { BarDiagramGroupPresentation };
