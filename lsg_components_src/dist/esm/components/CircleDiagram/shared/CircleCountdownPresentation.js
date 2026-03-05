import React__default from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { useUniqueId } from '../../../utils/Hooks/index.js';
import { Host } from '../../../utils/Host.js';
import { texts } from '../../../utils/Localization.js';
import { fRef } from '../../../utils/React.js';
import { ButtonPresentation } from '../../Button/shared/ButtonPresentation.js';
import { ChartInfoContainer } from '../../ChartInfos/shared/ChartInfoContainer.js';
import { ChartInfoItemPresentation } from '../../ChartInfos/shared/ChartInfoItemPresentation.js';
import { ParagraphPresentation } from '../../Paragraph/shared/ParagraphPresentation.js';
import { hostClass } from './CircleCountdown.styles.js';

// @ts-strict-ignore
const defaultMaxChartSize = 480; // in the past the standard size, now used in sizeMode = "fixed"
const defaultMinChartSize = 240; // minimum fallback size of chart
const defaultDelayStartTimer = 1000;
const defaultProps = {
    noAnimation: false,
    animationOnStart: false,
    sizeMode: "fixed",
    color: "primary-1",
};
const CircleCountdownPresentation = fRef(props => {
    const { id, className, valueLabel, label, amount, countdown, callToActionButton, headline, secondsUntilRefresh, secondsLeft, errorText, color, chartInfo, startTimer, onRefreshClick, horizontalAlignment, ariaLabel, 
    // for internal use only
    ctaBelowCircle, noMargin, isStencilHost, hostRef, headlineRef, size, presentationMode, readLabelAfterRefresh, } = props;
    const uniqueId = useUniqueId(`${hostClass}-`, id ? `${id}-` : undefined);
    let finalAmount = 0;
    if (presentationMode === "static" || presentationMode === "animated") {
        finalAmount = amount ?? 0.0;
    }
    if (presentationMode === "countdown") {
        finalAmount = Math.max(secondsLeft / (secondsUntilRefresh || 5), 0);
    }
    const labelledById = ariaLabel ? uniqueId.concat("-label") : undefined;
    const joinedLabel = [headline, valueLabel, label].filter(item => item !== undefined).join(", ");
    return (React__default.createElement(Host, { id: uniqueId, className: cleanupClassObject({
            [className]: !!className,
            [hostClass]: true,
            [`${hostClass}__align-${horizontalAlignment}`]: horizontalAlignment,
            [`${lsgPre}no-margin`]: noMargin,
        }), isStencilHost: isStencilHost, ref: hostRef },
        React__default.createElement("div", { className: cleanupClassObject({
                [`${hostClass}-container`]: true,
                [`${hostClass}-container-chartinfo__${size.chartPosition}`]: !!chartInfo,
            }), style: { height: size.heightContainer, width: size.widthContainer } },
            React__default.createElement("span", { id: labelledById, className: `${hostClass}-label__hidden` }, [ariaLabel, joinedLabel].filter(item => item !== undefined).join(",")),
            React__default.createElement("div", { className: cleanupClassObject({
                    [`${hostClass}-inner`]: true,
                }), style: size.heightInner ? { height: size.heightInner, width: size.widthInner } : undefined },
                (valueLabel || label) && (React__default.createElement("div", { className: cleanupClassObject({
                        [`${hostClass}-heading`]: true,
                        [`${hostClass}-heading-with-cta`]: !!callToActionButton,
                        [`${hostClass}-heading-with-cta__below`]: ctaBelowCircle,
                    }), role: ["static", "animated"].includes(presentationMode) ? "meter" : "timer", "aria-valuetext": ["static", "animated"].includes(presentationMode) ? `${finalAmount * 100}%` : undefined, "aria-valuenow": ["static", "animated"].includes(presentationMode) ? finalAmount * 100 : undefined, "aria-labelledby": labelledById },
                    React__default.createElement("div", { className: `${hostClass}-heading-header`, ref: headlineRef, "aria-hidden": true }, headline),
                    React__default.createElement("div", { className: `${hostClass}-heading-value`, "aria-hidden": true }, valueLabel),
                    React__default.createElement("div", { className: `${hostClass}-heading-label`, "aria-hidden": true },
                        errorText && (React__default.createElement(ParagraphPresentation, { size: "error-text" }, errorText)),
                        !errorText && countdown && `${Math.round(secondsLeft)}s`,
                        !errorText && !countdown && label),
                    React__default.createElement("span", { className: `${hostClass}-live-area__hidden`, "aria-atomic": presentationMode === "countdown", "aria-live": presentationMode === "countdown" ? "polite" : "off" },
                        readLabelAfterRefresh && joinedLabel,
                        !errorText &&
                            countdown &&
                            !readLabelAfterRefresh &&
                            Math.round(secondsLeft) % 10 === 0 && // output remaining time every 10 sec
                            Math.round(secondsLeft) !== 0 &&
                            `${Math.round(secondsLeft)} ${texts.lsg.component.CircleDiagram.countdownAppendix}`,
                        errorText &&
                            [valueLabel, errorText, texts.lsg.component.CircleDiagram.errorAppendix].join(",")))),
                React__default.createElement("div", { className: cleanupClassObject({
                        [`${hostClass}-button`]: true,
                        [`${hostClass}-button__below`]: ctaBelowCircle,
                    }) }, callToActionButton && secondsLeft > 0
                    ? callToActionButton
                    : countdown && (React__default.createElement(ButtonPresentation, { color: "secondary", onClick: () => {
                            setTimeout(() => startTimer(true), readLabelAfterRefresh && defaultDelayStartTimer);
                            onRefreshClick();
                        }, label: texts.lsg.component.CircleDiagram.btnCountdown }))),
                React__default.createElement("svg", { className: `${hostClass}-chart`, height: size.widthInner ? size.widthInner : undefined, width: size.widthInner ? size.widthInner : undefined, viewBox: `0 0 ${Math.round(size.widthInner * 1.1) || 0} ${Math.round(size.widthInner * 1.1) || 0}`, fill: "grey", preserveAspectRatio: "none", "aria-hidden": true },
                    React__default.createElement("circle", { cx: "50%", cy: "50%", r: size.widthInner * 0.5 || 0, pathLength: 100, fill: "transparent", className: `${hostClass}-chart-track` }),
                    finalAmount !== 0 && (React__default.createElement(React__default.Fragment, null,
                        React__default.createElement("circle", { cx: "50%", cy: "50%", r: size.widthInner * 0.5 || 0, strokeDashoffset: 100 - finalAmount * 100, strokeDasharray: 100, pathLength: 100, fill: "transparent", className: `${hostClass}-chart-pie-limiter-line-end` }),
                        React__default.createElement("circle", { cx: "50%", cy: "50%", r: size.widthInner * 0.5 || 0, strokeDashoffset: 100 - (finalAmount * 100 - 0.1), strokeDasharray: 100, pathLength: 100, fill: "transparent", className: `${hostClass}-chart-pie ${hostClass}-chart-pie_${color}` }),
                        React__default.createElement("circle", { cx: "50%", cy: "50%", r: size.widthInner * 0.5 || 0, pathLength: 100, fill: "transparent", className: `${hostClass}-chart-pie-limiter-line-start` }))))),
            chartInfo && (React__default.createElement("div", { className: cleanupClassObject({
                    [`${hostClass}-chart-info-box`]: !!chartInfo,
                    [`${hostClass}-chart-info-box-${size.chartPosition}`]: true,
                }), style: { height: size.heightChartInfo, width: size.widthChartInfo } },
                React__default.createElement(ChartInfoContainer, { ariaDescription: chartInfo.ariaDescription, className: chartInfo.className, id: chartInfo.id, position: size.chartPosition, appearance: chartInfo.appearance, title: chartInfo.title, titleFormatter: chartInfo.titleFormatter }, chartInfo.children.map((child, index) => (React__default.createElement(ChartInfoItemPresentation, { key: `${uniqueId}-chartinfoitem-${index}`, ...child, isActive: false })))))))));
}, defaultProps);
CircleCountdownPresentation.displayName = "CircleCountdownPresentation";

export { CircleCountdownPresentation, defaultDelayStartTimer, defaultMaxChartSize, defaultMinChartSize, defaultProps };
