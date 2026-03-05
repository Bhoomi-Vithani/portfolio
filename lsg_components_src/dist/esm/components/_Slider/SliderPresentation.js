import React__default from 'react';
import { lsgPre } from '../../config/prefix.js';
import { zIndex } from '../../styles/zIndex.js';
import { cleanupClassObject } from '../../utils/DomUtils.js';
import { useUniqueId } from '../../utils/Hooks/index.js';
import { Host } from '../../utils/Host.js';
import { texts } from '../../utils/Localization.js';
import { fRef } from '../../utils/React.js';
import { hostClass } from './Slider.styles.js';

// @ts-strict-ignore
const extensionKnobIdLower = "-lower";
const extensionKnobIdUpper = "-upper";
const defaultProps = {
    showLabel: true,
    showThumb: true,
    look: "singleSlider",
    minValue: 0,
};
const SliderPresentation = fRef(props => {
    const { name, className, htmlAttrs, noMargin, isStencilHost, value, minValue, maxValue, disabled, label, showLabel, step, helperMinValue, helperMaxValue, showThumb, look, onFocus, activeSlider, keyboardFocus, onTrackClick, sliderTrackContainerRef, hostRef, lowerSliderThumbRef, upperSliderThumbRef, onMouseDown, onKeyDown, sliderMarkerTrackBaseColor, lowerSliderThumbPercentage, upperSliderThumbPercentage, onHelperMinClick, onHelperMaxClick, handleOnSliderBlur, ariaValueTextFormatter, } = props;
    const getSliderMarkerTrackStyle = () => {
        let markerStepPercentage;
        if (step) {
            markerStepPercentage = (step / (maxValue - minValue)) * 100;
            return {
                style: {
                    background: `repeating-linear-gradient(
                        90deg,
                        var(--${hostClass}-track-marker-base-color),
                        var(--${hostClass}-track-marker-base-color) 4px,
                        rgba(0,0,0,0) 4px,
                        rgba(0,0,0,0) ${markerStepPercentage}%)
                    `,
                },
            };
        }
        return { style: { backgroundColor: sliderMarkerTrackBaseColor } };
    };
    const id = useUniqueId(`${hostClass}-`, props.id);
    const labelId = useUniqueId(`${hostClass}-label`, props.id && `${props.id}-label`);
    const showSliderTrackEnd = look === "singleSlider" ? value < maxValue : value[1] < maxValue;
    const ariaLabel = props.ariaLabel || label;
    let lowerSliderAriaLabel;
    let upperSliderAriaLabel;
    if (look === "singleSlider") {
        lowerSliderAriaLabel = ariaLabel;
    }
    else if (Array.isArray(ariaLabel)) {
        lowerSliderAriaLabel = ariaLabel[0];
        upperSliderAriaLabel = ariaLabel[1];
    }
    else {
        lowerSliderAriaLabel = `${ariaLabel}, ${texts.lsg.component.InputSlider.ariaLowerSliderLabel}`;
        upperSliderAriaLabel = `${ariaLabel}, ${texts.lsg.component.InputSlider.ariaUpperSliderLabel}`;
    }
    const isValidValue = () => {
        // Do not show slider knobs if values are invalid.
        // Todo: check on min/max range, too?
        if (look === "singleSlider") {
            return typeof value === "number" && !Number.isNaN(value);
        }
        return (Array.isArray(value) &&
            typeof value[0] === "number" &&
            !Number.isNaN(value[0]) &&
            typeof value[1] === "number" &&
            !Number.isNaN(value[1]));
    };
    return (React__default.createElement(Host, { id: id, name: name, className: cleanupClassObject({
            [className]: !!className,
            [hostClass]: true,
            [`${lsgPre}no-margin`]: noMargin,
            [`${hostClass}__disabled`]: disabled,
        }), ...htmlAttrs, tabIndex: -1, onBlur: handleOnSliderBlur, ref: hostRef, isStencilHost: isStencilHost, onKeyDown: onKeyDown },
        React__default.createElement("div", { id: labelId, className: cleanupClassObject({
                [`${hostClass}-label`]: true,
                [`${hostClass}-label__visible`]: label && showLabel,
            }) }, label),
        React__default.createElement("div", { className: `${hostClass}-container`, onClick: onTrackClick },
            React__default.createElement("div", { className: cleanupClassObject({
                    [`${hostClass}-track-container`]: true,
                    [`${hostClass}-track-container__stepped`]: step,
                }), ref: sliderTrackContainerRef },
                step > 0 && (React__default.createElement(React__default.Fragment, null,
                    React__default.createElement("div", { className: `${hostClass}-marker-track`, key: "slider-marker-track", ...getSliderMarkerTrackStyle() }),
                    React__default.createElement("div", { className: `${hostClass}-track-start`, key: "slider-track-start" }),
                    showSliderTrackEnd && React__default.createElement("div", { className: `${hostClass}-track-end`, key: "slider-track-end" }))),
                look === "singleSlider" && [
                    React__default.createElement("div", { key: `${hostClass}-track-lower${lowerSliderThumbPercentage}`, className: `${hostClass}-track`, style: { width: `${lowerSliderThumbPercentage}%` } }),
                ],
                look === "rangeSlider" &&
                    upperSliderThumbPercentage > lowerSliderThumbPercentage && [
                    React__default.createElement("div", { key: `${hostClass}-track-upper${upperSliderThumbPercentage}`, className: `${hostClass}-track`, style: {
                            width: `${upperSliderThumbPercentage - lowerSliderThumbPercentage}%`,
                            left: `${lowerSliderThumbPercentage}%`,
                        } }),
                ]),
            React__default.createElement("div", { id: `${id}${extensionKnobIdLower}`, className: cleanupClassObject({
                    [`${hostClass}-thumb-container`]: true,
                    [`${hostClass}-thumb-container__focus`]: keyboardFocus === "lower",
                    [`${hostClass}-thumb-container__invisible`]: !showThumb ||
                        lowerSliderThumbPercentage < 0 ||
                        lowerSliderThumbPercentage > 100 ||
                        !isValidValue(),
                }), ref: lowerSliderThumbRef, onMouseDown: onMouseDown, onTouchStart: onMouseDown, onFocus: e => onFocus(e, name), style: {
                    left: `${lowerSliderThumbPercentage}%`,
                    zIndex: activeSlider === "lower" ? zIndex.zAction + 1 : zIndex.zAction,
                }, tabIndex: disabled ? -1 : htmlAttrs?.tabIndex ?? 0, role: "slider", "aria-label": lowerSliderAriaLabel, "aria-valuemin": minValue, "aria-valuemax": look === "singleSlider" ? maxValue : value[1], "aria-disabled": disabled, "aria-valuenow": look === "singleSlider" ? value : value[0], "aria-valuetext": ariaValueTextFormatter &&
                    ((look === "singleSlider" && ariaValueTextFormatter(value).toString()) ||
                        ariaValueTextFormatter(value)[0]) },
                React__default.createElement("svg", { className: `${hostClass}-thumb`, viewBox: "0 0 32 32" },
                    React__default.createElement("circle", { cx: "16", cy: "16", r: "12" }))),
            look !== "singleSlider" && (React__default.createElement("div", { id: `${id}${extensionKnobIdUpper}`, className: cleanupClassObject({
                    [`${hostClass}-thumb-container`]: true,
                    [`${hostClass}-thumb-container__focus`]: keyboardFocus === "upper",
                    [`${hostClass}-thumb-container__invisible`]: !showThumb ||
                        upperSliderThumbPercentage < lowerSliderThumbPercentage ||
                        upperSliderThumbPercentage < 0 ||
                        upperSliderThumbPercentage > 100 ||
                        !isValidValue(),
                }), ref: upperSliderThumbRef, onMouseDown: onMouseDown, onTouchStart: onMouseDown, onFocus: e => onFocus(e, name), style: {
                    left: `${upperSliderThumbPercentage}%`,
                    zIndex: activeSlider === "upper" ? zIndex.zAction + 1 : zIndex.zAction,
                }, tabIndex: disabled ? -1 : htmlAttrs?.tabIndex || 0, role: "slider", "aria-label": upperSliderAriaLabel, "aria-valuemin": value[0], "aria-valuemax": maxValue, "aria-disabled": disabled, "aria-valuenow": look === "rangeSlider" ? value[1] : undefined, "aria-valuetext": ariaValueTextFormatter && ariaValueTextFormatter(value)[1] },
                React__default.createElement("svg", { className: `${hostClass}-thumb`, viewBox: "0 0 32 32" },
                    React__default.createElement("circle", { cx: "16", cy: "16", r: "12" }))))),
        (helperMinValue || helperMaxValue) && (React__default.createElement("div", { className: `${hostClass}-helper` },
            React__default.createElement("div", { onClick: onHelperMinClick, className: `${hostClass}-helper-label-minvalue` }, helperMinValue),
            React__default.createElement("div", { onClick: onHelperMaxClick, className: `${hostClass}-helper-label-maxvalue` }, helperMaxValue)))));
}, defaultProps);
SliderPresentation.displayName = "SliderPresentation";

export { SliderPresentation, defaultProps, extensionKnobIdLower, extensionKnobIdUpper };
