import React__default from 'react';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { useUniqueId } from '../../../utils/Hooks/index.js';
import { usePreferReducedMotion } from '../../../utils/Hooks/animation.js';
import { texts } from '../../../utils/Localization.js';
import { hostClass } from './Spinner.styles.js';

// @ts-strict-ignore
const SIZE = 44;
const THICKNESS = 3.6;
const SpinnerPresentation = ({ id, size = 60, value: valueProp = 0, variant = "indeterminate", expandToOverlay, ariaLabel, className, loading, }) => {
    const labelId = useUniqueId(hostClass);
    const reduceAnimation = usePreferReducedMotion();
    const isStatic = variant === "static";
    // according agreement when reduced is running indeterminate a value with 75 and a loading text is displayed
    const reduceAnimationFallback = reduceAnimation && !isStatic;
    const value = reduceAnimationFallback ? 75 : valueProp;
    const circleStyle = {
        strokeDasharray: "inherit",
        strokeDashoffset: "inherit",
    };
    if (isStatic) {
        const circumference = 2 * Math.PI * ((SIZE - THICKNESS) / 2);
        circleStyle.strokeDasharray = circumference.toFixed(3);
        circleStyle.strokeDashoffset = `${(((100 - value) / 100) * circumference).toFixed(3)}px`;
    }
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement("span", { className: cleanupClassObject({
                [`${hostClass}__overlay`]: expandToOverlay,
            }) }, loading && (React__default.createElement("span", { className: cleanupClassObject({
                [`${hostClass}-content-container`]: true,
                [className]: className,
            }), id: id },
            React__default.createElement("span", { className: cleanupClassObject({
                    [`${hostClass}-inner`]: true,
                    [`${hostClass}__${variant}`]: true,
                }), "aria-valuenow": isStatic ? Math.round(value) : undefined, style: {
                    width: `${size}px`,
                    height: `${size}px`,
                    transform: isStatic ? "rotate(-90deg)" : "inherit",
                }, role: isStatic ? "progressbar" : undefined, "aria-labelledby": isStatic ? labelId : undefined },
                React__default.createElement("svg", { viewBox: `${SIZE / 2} ${SIZE / 2} ${SIZE} ${SIZE}`, "aria-hidden": true },
                    React__default.createElement("circle", { style: isStatic ? circleStyle : undefined, cx: SIZE, cy: SIZE, r: (SIZE - THICKNESS) / 2, fill: "none", strokeWidth: THICKNESS }))),
            React__default.createElement("span", { className: cleanupClassObject({
                    [`${hostClass}-label`]: true,
                    [`${hostClass}-label__hidden`]: !reduceAnimationFallback,
                }), "aria-hidden": !!ariaLabel }, texts.lsg.component.Spinner.ProcessText)))),
        React__default.createElement("span", { className: cleanupClassObject({
                [`${hostClass}-label__hidden`]: true,
            }), id: labelId }, ariaLabel)));
};
SpinnerPresentation.displayName = "SpinnerPresentation";

export { SpinnerPresentation };
