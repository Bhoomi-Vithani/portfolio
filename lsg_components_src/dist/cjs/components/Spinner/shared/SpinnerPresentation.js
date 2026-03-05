'use strict';

var React__default = require('react');
var DomUtils = require('../../../utils/DomUtils.js');
var index = require('../../../utils/Hooks/index.js');
var animation = require('../../../utils/Hooks/animation.js');
var Localization = require('../../../utils/Localization.js');
var Spinner_styles = require('./Spinner.styles.js');

// @ts-strict-ignore
const SIZE = 44;
const THICKNESS = 3.6;
const SpinnerPresentation = ({
  id,
  size = 60,
  value: valueProp = 0,
  variant = "indeterminate",
  expandToOverlay,
  ariaLabel,
  className,
  loading
}) => {
  const labelId = index.useUniqueId(Spinner_styles.hostClass);
  const reduceAnimation = animation.usePreferReducedMotion();
  const isStatic = variant === "static";
  // according agreement when reduced is running indeterminate a value with 75 and a loading text is displayed
  const reduceAnimationFallback = reduceAnimation && !isStatic;
  const value = reduceAnimationFallback ? 75 : valueProp;
  const circleStyle = {
    strokeDasharray: "inherit",
    strokeDashoffset: "inherit"
  };
  if (isStatic) {
    const circumference = 2 * Math.PI * ((SIZE - THICKNESS) / 2);
    circleStyle.strokeDasharray = circumference.toFixed(3);
    circleStyle.strokeDashoffset = `${((100 - value) / 100 * circumference).toFixed(3)}px`;
  }
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("span", {
    className: DomUtils.cleanupClassObject({
      [`${Spinner_styles.hostClass}__overlay`]: expandToOverlay
    })
  }, loading && (/*#__PURE__*/React__default.createElement("span", {
    className: DomUtils.cleanupClassObject({
      [`${Spinner_styles.hostClass}-content-container`]: true,
      [className]: className
    }),
    id: id
  }, /*#__PURE__*/React__default.createElement("span", {
    className: DomUtils.cleanupClassObject({
      [`${Spinner_styles.hostClass}-inner`]: true,
      [`${Spinner_styles.hostClass}__${variant}`]: true
    }),
    "aria-valuenow": isStatic ? Math.round(value) : undefined,
    style: {
      width: `${size}px`,
      height: `${size}px`,
      transform: isStatic ? "rotate(-90deg)" : "inherit"
    },
    role: isStatic ? "progressbar" : undefined,
    "aria-labelledby": isStatic ? labelId : undefined
  }, /*#__PURE__*/React__default.createElement("svg", {
    viewBox: `${SIZE / 2} ${SIZE / 2} ${SIZE} ${SIZE}`,
    "aria-hidden": true
  }, /*#__PURE__*/React__default.createElement("circle", {
    style: isStatic ? circleStyle : undefined,
    cx: SIZE,
    cy: SIZE,
    r: (SIZE - THICKNESS) / 2,
    fill: "none",
    strokeWidth: THICKNESS
  }))), /*#__PURE__*/React__default.createElement("span", {
    className: DomUtils.cleanupClassObject({
      [`${Spinner_styles.hostClass}-label`]: true,
      [`${Spinner_styles.hostClass}-label__hidden`]: !reduceAnimationFallback
    }),
    "aria-hidden": !!ariaLabel
  }, Localization.texts.lsg.component.Spinner.ProcessText)))), /*#__PURE__*/React__default.createElement("span", {
    className: DomUtils.cleanupClassObject({
      [`${Spinner_styles.hostClass}-label__hidden`]: true
    }),
    id: labelId
  }, ariaLabel));
};
SpinnerPresentation.displayName = "SpinnerPresentation";

exports.SpinnerPresentation = SpinnerPresentation;
