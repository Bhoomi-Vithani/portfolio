'use strict';

var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var index = require('../../../utils/Hooks/index.js');
var Host = require('../../../utils/Host.js');
var Localization = require('../../../utils/Localization.js');
var React = require('../../../utils/React.js');
var ButtonPresentation = require('../../Button/shared/ButtonPresentation.js');
var ChartInfoContainer = require('../../ChartInfos/shared/ChartInfoContainer.js');
var ChartInfoItemPresentation = require('../../ChartInfos/shared/ChartInfoItemPresentation.js');
var ParagraphPresentation = require('../../Paragraph/shared/ParagraphPresentation.js');
var CircleCountdown_styles = require('./CircleCountdown.styles.js');

// @ts-strict-ignore
const defaultMaxChartSize = 480; // in the past the standard size, now used in sizeMode = "fixed"
const defaultMinChartSize = 240; // minimum fallback size of chart
const defaultDelayStartTimer = 1000;
const defaultProps = {
  noAnimation: false,
  animationOnStart: false,
  sizeMode: "fixed",
  color: "primary-1"
};
const CircleCountdownPresentation = React.fRef(props => {
  const {
    id,
    className,
    valueLabel,
    label,
    amount,
    countdown,
    callToActionButton,
    headline,
    secondsUntilRefresh,
    secondsLeft,
    errorText,
    color,
    chartInfo,
    startTimer,
    onRefreshClick,
    horizontalAlignment,
    ariaLabel,
    // for internal use only
    ctaBelowCircle,
    noMargin,
    isStencilHost,
    hostRef,
    headlineRef,
    size,
    presentationMode,
    readLabelAfterRefresh
  } = props;
  const uniqueId = index.useUniqueId(`${CircleCountdown_styles.hostClass}-`, id ? `${id}-` : undefined);
  let finalAmount = 0;
  if (presentationMode === "static" || presentationMode === "animated") {
    finalAmount = amount ?? 0.0;
  }
  if (presentationMode === "countdown") {
    finalAmount = Math.max(secondsLeft / (secondsUntilRefresh || 5), 0);
  }
  const labelledById = ariaLabel ? uniqueId.concat("-label") : undefined;
  const joinedLabel = [headline, valueLabel, label].filter(item => item !== undefined).join(", ");
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    id: uniqueId,
    className: DomUtils.cleanupClassObject({
      [className]: !!className,
      [CircleCountdown_styles.hostClass]: true,
      [`${CircleCountdown_styles.hostClass}__align-${horizontalAlignment}`]: horizontalAlignment,
      [`${prefix.lsgPre}no-margin`]: noMargin
    }),
    isStencilHost: isStencilHost,
    ref: hostRef
  }, /*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${CircleCountdown_styles.hostClass}-container`]: true,
      [`${CircleCountdown_styles.hostClass}-container-chartinfo__${size.chartPosition}`]: !!chartInfo
    }),
    style: {
      height: size.heightContainer,
      width: size.widthContainer
    }
  }, /*#__PURE__*/React__default.createElement("span", {
    id: labelledById,
    className: `${CircleCountdown_styles.hostClass}-label__hidden`
  }, [ariaLabel, joinedLabel].filter(item => item !== undefined).join(",")), /*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${CircleCountdown_styles.hostClass}-inner`]: true
    }),
    style: size.heightInner ? {
      height: size.heightInner,
      width: size.widthInner
    } : undefined
  }, (valueLabel || label) && (/*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${CircleCountdown_styles.hostClass}-heading`]: true,
      [`${CircleCountdown_styles.hostClass}-heading-with-cta`]: !!callToActionButton,
      [`${CircleCountdown_styles.hostClass}-heading-with-cta__below`]: ctaBelowCircle
    }),
    role: ["static", "animated"].includes(presentationMode) ? "meter" : "timer",
    "aria-valuetext": ["static", "animated"].includes(presentationMode) ? `${finalAmount * 100}%` : undefined,
    "aria-valuenow": ["static", "animated"].includes(presentationMode) ? finalAmount * 100 : undefined,
    "aria-labelledby": labelledById
  }, /*#__PURE__*/React__default.createElement("div", {
    className: `${CircleCountdown_styles.hostClass}-heading-header`,
    ref: headlineRef,
    "aria-hidden": true
  }, headline), /*#__PURE__*/React__default.createElement("div", {
    className: `${CircleCountdown_styles.hostClass}-heading-value`,
    "aria-hidden": true
  }, valueLabel), /*#__PURE__*/React__default.createElement("div", {
    className: `${CircleCountdown_styles.hostClass}-heading-label`,
    "aria-hidden": true
  }, errorText && (/*#__PURE__*/React__default.createElement(ParagraphPresentation.ParagraphPresentation, {
    size: "error-text"
  }, errorText)), !errorText && countdown && `${Math.round(secondsLeft)}s`, !errorText && !countdown && label), /*#__PURE__*/React__default.createElement("span", {
    className: `${CircleCountdown_styles.hostClass}-live-area__hidden`,
    "aria-atomic": presentationMode === "countdown",
    "aria-live": presentationMode === "countdown" ? "polite" : "off"
  }, readLabelAfterRefresh && joinedLabel, !errorText && countdown && !readLabelAfterRefresh && Math.round(secondsLeft) % 10 === 0 &&
  // output remaining time every 10 sec
  Math.round(secondsLeft) !== 0 && `${Math.round(secondsLeft)} ${Localization.texts.lsg.component.CircleDiagram.countdownAppendix}`, errorText && [valueLabel, errorText, Localization.texts.lsg.component.CircleDiagram.errorAppendix].join(",")))), /*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${CircleCountdown_styles.hostClass}-button`]: true,
      [`${CircleCountdown_styles.hostClass}-button__below`]: ctaBelowCircle
    })
  }, callToActionButton && secondsLeft > 0 ? callToActionButton : countdown && (/*#__PURE__*/React__default.createElement(ButtonPresentation.ButtonPresentation, {
    color: "secondary",
    onClick: () => {
      setTimeout(() => startTimer(true), readLabelAfterRefresh && defaultDelayStartTimer);
      onRefreshClick();
    },
    label: Localization.texts.lsg.component.CircleDiagram.btnCountdown
  }))), /*#__PURE__*/React__default.createElement("svg", {
    className: `${CircleCountdown_styles.hostClass}-chart`,
    height: size.widthInner ? size.widthInner : undefined,
    width: size.widthInner ? size.widthInner : undefined,
    viewBox: `0 0 ${Math.round(size.widthInner * 1.1) || 0} ${Math.round(size.widthInner * 1.1) || 0}`,
    fill: "grey",
    preserveAspectRatio: "none",
    "aria-hidden": true
  }, /*#__PURE__*/React__default.createElement("circle", {
    cx: "50%",
    cy: "50%",
    r: size.widthInner * 0.5 || 0,
    pathLength: 100,
    fill: "transparent",
    className: `${CircleCountdown_styles.hostClass}-chart-track`
  }), finalAmount !== 0 && (/*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("circle", {
    cx: "50%",
    cy: "50%",
    r: size.widthInner * 0.5 || 0,
    strokeDashoffset: 100 - finalAmount * 100,
    strokeDasharray: 100,
    pathLength: 100,
    fill: "transparent",
    className: `${CircleCountdown_styles.hostClass}-chart-pie-limiter-line-end`
  }), /*#__PURE__*/React__default.createElement("circle", {
    cx: "50%",
    cy: "50%",
    r: size.widthInner * 0.5 || 0,
    strokeDashoffset: 100 - (finalAmount * 100 - 0.1),
    strokeDasharray: 100,
    pathLength: 100,
    fill: "transparent",
    className: `${CircleCountdown_styles.hostClass}-chart-pie ${CircleCountdown_styles.hostClass}-chart-pie_${color}`
  }), /*#__PURE__*/React__default.createElement("circle", {
    cx: "50%",
    cy: "50%",
    r: size.widthInner * 0.5 || 0,
    pathLength: 100,
    fill: "transparent",
    className: `${CircleCountdown_styles.hostClass}-chart-pie-limiter-line-start`
  }))))), chartInfo && (/*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${CircleCountdown_styles.hostClass}-chart-info-box`]: !!chartInfo,
      [`${CircleCountdown_styles.hostClass}-chart-info-box-${size.chartPosition}`]: true
    }),
    style: {
      height: size.heightChartInfo,
      width: size.widthChartInfo
    }
  }, /*#__PURE__*/React__default.createElement(ChartInfoContainer.ChartInfoContainer, {
    ariaDescription: chartInfo.ariaDescription,
    className: chartInfo.className,
    id: chartInfo.id,
    position: size.chartPosition,
    appearance: chartInfo.appearance,
    title: chartInfo.title,
    titleFormatter: chartInfo.titleFormatter
  }, chartInfo.children.map((child, index) => (/*#__PURE__*/React__default.createElement(ChartInfoItemPresentation.ChartInfoItemPresentation, {
    key: `${uniqueId}-chartinfoitem-${index}`,
    ...child,
    isActive: false
  }))))))));
}, defaultProps);
CircleCountdownPresentation.displayName = "CircleCountdownPresentation";

exports.CircleCountdownPresentation = CircleCountdownPresentation;
exports.defaultDelayStartTimer = defaultDelayStartTimer;
exports.defaultMaxChartSize = defaultMaxChartSize;
exports.defaultMinChartSize = defaultMinChartSize;
exports.defaultProps = defaultProps;
