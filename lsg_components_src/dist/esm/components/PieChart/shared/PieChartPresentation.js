import { pie, arc } from 'd3-shape';
import React__default, { useRef, useState, useEffect } from 'react';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { useUniqueId, useViewportRange, useResize } from '../../../utils/Hooks/index.js';
import { Host } from '../../../utils/Host.js';
import { hostClass } from './PieChart.styles.js';

// @ts-strict-ignore
const spread = (s) => s.value;
const PieChartPresentation = ({ id, label, subline, className, dataSeries, isDecorative = true, activeIndex, onItemActive, htmlAttrs = {}, ...props }) => {
    const idSlice = useUniqueId(`${hostClass}-pie-slice`, id);
    const hostRef = useRef(null);
    const ringThickness = useViewportRange(undefined, "md") ? 24 : 28;
    const [size, setSize] = useState(hostRef.current?.getBoundingClientRect().width || 0);
    const [radius, setRadius] = useState(0);
    const resize = () => {
        if (hostRef.current) {
            setSize(hostRef.current.getBoundingClientRect().width);
        }
    };
    useResize(resize, [size, hostRef]);
    useEffect(resize, []);
    useEffect(() => {
        setRadius(size / 2);
    }, [size]);
    // #########  Hover state handling #########
    const [hoveredIndex, setHoveredIndex] = useState(activeIndex);
    const handleSliceHover = (index) => {
        setHoveredIndex(index);
        onItemActive?.(index);
    };
    const handleSliceHoverOut = () => {
        setHoveredIndex(null);
        onItemActive?.(null);
    };
    useEffect(() => {
        handleSliceHover(activeIndex);
    }, [activeIndex]);
    // #########  Keyboard navigation #########
    const [focusedIndex, setFocusedIndex] = useState(activeIndex);
    const sliceRefs = useRef([]);
    const handleSliceBlur = () => {
        sliceRefs.current[focusedIndex]?.blur();
        onItemActive?.(null);
        setFocusedIndex(null);
    };
    const handleSliceFocusIn = index => {
        setFocusedIndex(index);
        onItemActive?.(index);
    };
    useEffect(() => {
        sliceRefs.current[focusedIndex]?.focus();
    }, [focusedIndex]);
    const handleKeyDown = (event, index) => {
        setHoveredIndex(null);
        switch (event.key) {
            case "ArrowRight":
            case "ArrowDown":
                event.preventDefault(); // prevent scrolling
                handleSliceFocusIn((index + 1 + dataSeries.length) % dataSeries.length);
                break;
            case "ArrowLeft":
            case "ArrowUp":
                event.preventDefault(); // prevent scrolling
                handleSliceFocusIn((index - 1 + dataSeries.length) % dataSeries.length);
                break;
            case "Escape":
                handleSliceBlur();
                break;
            case "Tab":
                event.preventDefault(); // prevent skipping element
                if (event.shiftKey) {
                    handleSliceFocusIn((index - 1 + dataSeries.length) % dataSeries.length);
                    if (focusedIndex === 0) {
                        handleSliceBlur();
                    }
                }
                else {
                    handleSliceFocusIn((index + 1 + dataSeries.length) % dataSeries.length);
                    if (focusedIndex === dataSeries.length - 1) {
                        handleSliceBlur();
                    }
                }
                break;
        }
    };
    const pie$1 = pie().value(spread).sort(null)(dataSeries);
    const arcGenerator = arc()
        .outerRadius(radius)
        .innerRadius(props.donutShape ? radius - ringThickness : 0)
        .padAngle(0);
    return (React__default.createElement(Host, { className: cleanupClassObject({
            [className]: !!className,
            [`${hostClass}`]: true,
        }), ref: hostRef, id: id, "aria-hidden": isDecorative },
        React__default.createElement("svg", { className: cleanupClassObject({
                [`${hostClass}-chart-area`]: true,
                [className]: !!className,
            }), viewBox: `0 0 ${size} ${size}`, "aria-labelledby": isDecorative
                ? undefined
                : [`${hostClass}__text-label`, htmlAttrs["aria-labelledby"]].filter(t => !!t).join(" "), "aria-describedby": isDecorative
                ? undefined
                : [`${hostClass}__text-subline`, htmlAttrs["aria-describedby"]].filter(t => !!t).join(" "), 
            // role is set to document https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/document_role
            // this makes sure that screen readers can read the content of the chart but do not interfere with
            // the keyboard navigation
            role: isDecorative ? "presentation" : "document", tabIndex: 0 },
            React__default.createElement("g", { transform: `translate(${radius}, ${radius})`, role: isDecorative ? "presentation" : "grid" },
                React__default.createElement("g", { role: isDecorative ? "presentation" : "row" }, pie$1.map((arc, index) => {
                    const isHovered = index === hoveredIndex;
                    const isFocused = index === focusedIndex;
                    const isActive = hoveredIndex !== undefined && focusedIndex !== undefined;
                    const pieSliceId = `${idSlice}-${index}`;
                    return (React__default.createElement("g", { role: "gridcell", className: cleanupClassObject({
                            [`${hostClass}-pie-piece__container`]: true,
                        }), tabIndex: isDecorative ? undefined : 0, "aria-labelledby": isDecorative ? "presentation" : `${arc.data.value}`, onKeyDown: event => handleKeyDown(event, index), onFocus: () => {
                            handleSliceFocusIn(index);
                        }, onMouseEnter: () => {
                            setFocusedIndex(null);
                            handleSliceHover(index);
                        }, onMouseLeave: () => {
                            setFocusedIndex(null);
                            handleSliceHoverOut();
                        }, ref: el => {
                            sliceRefs.current[index] = el;
                        } },
                        React__default.createElement("title", null, arc.data.ariaLabel ?? `${arc.data.label}: ${arc.data.value}`),
                        React__default.createElement("path", { className: cleanupClassObject({
                                [`${hostClass}-pie-piece`]: true,
                                [`${hostClass}-pie-piece__color-${arc.data.indicatorColor ?? "primary-1"}`]: !!arc.data.indicatorColor,
                                [`${hostClass}-pie-piece__inactive`]: isActive &&
                                    ((hoveredIndex !== null && !isHovered) ||
                                        (focusedIndex !== null && !isFocused)),
                            }), key: pieSliceId, id: pieSliceId, d: arcGenerator(arc) })));
                }))),
            React__default.createElement("circle", { className: cleanupClassObject({
                    [`${hostClass}-outer-border`]: true,
                }), cx: radius, cy: radius, r: radius, pointerEvents: "none" }),
            props.donutShape && (React__default.createElement("circle", { className: cleanupClassObject({
                    [`${hostClass}-inner-circle`]: true,
                }), cx: radius, cy: radius, r: radius - ringThickness, pointerEvents: "none" })),
            props.donutShape && label && (React__default.createElement("foreignObject", { x: radius - size * 0.35, y: radius - size * 0.25, width: size * 0.7, height: size * 0.5 },
                React__default.createElement("div", { className: cleanupClassObject({
                        [`${hostClass}__text-container`]: true,
                    }), id: `${hostClass}__text`, role: isDecorative ? "presentation" : undefined },
                    React__default.createElement("div", { className: cleanupClassObject({
                            [`${hostClass}__text-label`]: true,
                        }), id: `${hostClass}__text-label` }, label),
                    React__default.createElement("div", { className: `${hostClass}__text-subline`, id: `${hostClass}__text-subline` }, subline)))))));
};

export { PieChartPresentation };
