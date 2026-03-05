'use strict';

var React__default = require('react');
var prefix = require('../../config/prefix.js');
var zIndex = require('../../styles/zIndex.js');
var DomUtils = require('../../utils/DomUtils.js');
var index = require('../../utils/Hooks/index.js');
var Host = require('../../utils/Host.js');
var Localization = require('../../utils/Localization.js');
var React = require('../../utils/React.js');
var Slider_styles = require('./Slider.styles.js');

// @ts-strict-ignore
const extensionKnobIdLower = "-lower";
const extensionKnobIdUpper = "-upper";
const defaultProps = {
  showLabel: true,
  showThumb: true,
  look: "singleSlider",
  minValue: 0
};
const SliderPresentation = React.fRef(props => {
  const {
    name,
    className,
    htmlAttrs,
    noMargin,
    isStencilHost,
    value,
    minValue,
    maxValue,
    disabled,
    label,
    showLabel,
    step,
    helperMinValue,
    helperMaxValue,
    showThumb,
    look,
    onFocus,
    activeSlider,
    keyboardFocus,
    onTrackClick,
    sliderTrackContainerRef,
    hostRef,
    lowerSliderThumbRef,
    upperSliderThumbRef,
    onMouseDown,
    onKeyDown,
    sliderMarkerTrackBaseColor,
    lowerSliderThumbPercentage,
    upperSliderThumbPercentage,
    onHelperMinClick,
    onHelperMaxClick,
    handleOnSliderBlur,
    ariaValueTextFormatter
  } = props;
  const getSliderMarkerTrackStyle = () => {
    let markerStepPercentage;
    if (step) {
      markerStepPercentage = step / (maxValue - minValue) * 100;
      return {
        style: {
          background: `repeating-linear-gradient(
                        90deg,
                        var(--${Slider_styles.hostClass}-track-marker-base-color),
                        var(--${Slider_styles.hostClass}-track-marker-base-color) 4px,
                        rgba(0,0,0,0) 4px,
                        rgba(0,0,0,0) ${markerStepPercentage}%)
                    `
        }
      };
    }
    return {
      style: {
        backgroundColor: sliderMarkerTrackBaseColor
      }
    };
  };
  const id = index.useUniqueId(`${Slider_styles.hostClass}-`, props.id);
  const labelId = index.useUniqueId(`${Slider_styles.hostClass}-label`, props.id && `${props.id}-label`);
  const showSliderTrackEnd = look === "singleSlider" ? value < maxValue : value[1] < maxValue;
  const ariaLabel = props.ariaLabel || label;
  let lowerSliderAriaLabel;
  let upperSliderAriaLabel;
  if (look === "singleSlider") {
    lowerSliderAriaLabel = ariaLabel;
  } else if (Array.isArray(ariaLabel)) {
    lowerSliderAriaLabel = ariaLabel[0];
    upperSliderAriaLabel = ariaLabel[1];
  } else {
    lowerSliderAriaLabel = `${ariaLabel}, ${Localization.texts.lsg.component.InputSlider.ariaLowerSliderLabel}`;
    upperSliderAriaLabel = `${ariaLabel}, ${Localization.texts.lsg.component.InputSlider.ariaUpperSliderLabel}`;
  }
  const isValidValue = () => {
    // Do not show slider knobs if values are invalid.
    // Todo: check on min/max range, too?
    if (look === "singleSlider") {
      return typeof value === "number" && !Number.isNaN(value);
    }
    return Array.isArray(value) && typeof value[0] === "number" && !Number.isNaN(value[0]) && typeof value[1] === "number" && !Number.isNaN(value[1]);
  };
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    id: id,
    name: name,
    className: DomUtils.cleanupClassObject({
      [className]: !!className,
      [Slider_styles.hostClass]: true,
      [`${prefix.lsgPre}no-margin`]: noMargin,
      [`${Slider_styles.hostClass}__disabled`]: disabled
    }),
    ...htmlAttrs,
    tabIndex: -1,
    onBlur: handleOnSliderBlur,
    ref: hostRef,
    isStencilHost: isStencilHost,
    onKeyDown: onKeyDown
  }, /*#__PURE__*/React__default.createElement("div", {
    id: labelId,
    className: DomUtils.cleanupClassObject({
      [`${Slider_styles.hostClass}-label`]: true,
      [`${Slider_styles.hostClass}-label__visible`]: label && showLabel
    })
  }, label), /*#__PURE__*/React__default.createElement("div", {
    className: `${Slider_styles.hostClass}-container`,
    onClick: onTrackClick
  }, /*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${Slider_styles.hostClass}-track-container`]: true,
      [`${Slider_styles.hostClass}-track-container__stepped`]: step
    }),
    ref: sliderTrackContainerRef
  }, step > 0 && (/*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
    className: `${Slider_styles.hostClass}-marker-track`,
    key: "slider-marker-track",
    ...getSliderMarkerTrackStyle()
  }), /*#__PURE__*/React__default.createElement("div", {
    className: `${Slider_styles.hostClass}-track-start`,
    key: "slider-track-start"
  }), showSliderTrackEnd && /*#__PURE__*/React__default.createElement("div", {
    className: `${Slider_styles.hostClass}-track-end`,
    key: "slider-track-end"
  }))), look === "singleSlider" && [/*#__PURE__*/React__default.createElement("div", {
    key: `${Slider_styles.hostClass}-track-lower${lowerSliderThumbPercentage}`,
    className: `${Slider_styles.hostClass}-track`,
    style: {
      width: `${lowerSliderThumbPercentage}%`
    }
  })], look === "rangeSlider" && upperSliderThumbPercentage > lowerSliderThumbPercentage && [/*#__PURE__*/React__default.createElement("div", {
    key: `${Slider_styles.hostClass}-track-upper${upperSliderThumbPercentage}`,
    className: `${Slider_styles.hostClass}-track`,
    style: {
      width: `${upperSliderThumbPercentage - lowerSliderThumbPercentage}%`,
      left: `${lowerSliderThumbPercentage}%`
    }
  })]), /*#__PURE__*/React__default.createElement("div", {
    id: `${id}${extensionKnobIdLower}`,
    className: DomUtils.cleanupClassObject({
      [`${Slider_styles.hostClass}-thumb-container`]: true,
      [`${Slider_styles.hostClass}-thumb-container__focus`]: keyboardFocus === "lower",
      [`${Slider_styles.hostClass}-thumb-container__invisible`]: !showThumb || lowerSliderThumbPercentage < 0 || lowerSliderThumbPercentage > 100 || !isValidValue()
    }),
    ref: lowerSliderThumbRef,
    onMouseDown: onMouseDown,
    onTouchStart: onMouseDown,
    onFocus: e => onFocus(e, name),
    style: {
      left: `${lowerSliderThumbPercentage}%`,
      zIndex: activeSlider === "lower" ? zIndex.zIndex.zAction + 1 : zIndex.zIndex.zAction
    },
    tabIndex: disabled ? -1 : htmlAttrs?.tabIndex ?? 0,
    role: "slider",
    "aria-label": lowerSliderAriaLabel,
    "aria-valuemin": minValue,
    "aria-valuemax": look === "singleSlider" ? maxValue : value[1],
    "aria-disabled": disabled,
    "aria-valuenow": look === "singleSlider" ? value : value[0],
    "aria-valuetext": ariaValueTextFormatter && (look === "singleSlider" && ariaValueTextFormatter(value).toString() || ariaValueTextFormatter(value)[0])
  }, /*#__PURE__*/React__default.createElement("svg", {
    className: `${Slider_styles.hostClass}-thumb`,
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/React__default.createElement("circle", {
    cx: "16",
    cy: "16",
    r: "12"
  }))), look !== "singleSlider" && (/*#__PURE__*/React__default.createElement("div", {
    id: `${id}${extensionKnobIdUpper}`,
    className: DomUtils.cleanupClassObject({
      [`${Slider_styles.hostClass}-thumb-container`]: true,
      [`${Slider_styles.hostClass}-thumb-container__focus`]: keyboardFocus === "upper",
      [`${Slider_styles.hostClass}-thumb-container__invisible`]: !showThumb || upperSliderThumbPercentage < lowerSliderThumbPercentage || upperSliderThumbPercentage < 0 || upperSliderThumbPercentage > 100 || !isValidValue()
    }),
    ref: upperSliderThumbRef,
    onMouseDown: onMouseDown,
    onTouchStart: onMouseDown,
    onFocus: e => onFocus(e, name),
    style: {
      left: `${upperSliderThumbPercentage}%`,
      zIndex: activeSlider === "upper" ? zIndex.zIndex.zAction + 1 : zIndex.zIndex.zAction
    },
    tabIndex: disabled ? -1 : htmlAttrs?.tabIndex || 0,
    role: "slider",
    "aria-label": upperSliderAriaLabel,
    "aria-valuemin": value[0],
    "aria-valuemax": maxValue,
    "aria-disabled": disabled,
    "aria-valuenow": look === "rangeSlider" ? value[1] : undefined,
    "aria-valuetext": ariaValueTextFormatter && ariaValueTextFormatter(value)[1]
  }, /*#__PURE__*/React__default.createElement("svg", {
    className: `${Slider_styles.hostClass}-thumb`,
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/React__default.createElement("circle", {
    cx: "16",
    cy: "16",
    r: "12"
  }))))), (helperMinValue || helperMaxValue) && (/*#__PURE__*/React__default.createElement("div", {
    className: `${Slider_styles.hostClass}-helper`
  }, /*#__PURE__*/React__default.createElement("div", {
    onClick: onHelperMinClick,
    className: `${Slider_styles.hostClass}-helper-label-minvalue`
  }, helperMinValue), /*#__PURE__*/React__default.createElement("div", {
    onClick: onHelperMaxClick,
    className: `${Slider_styles.hostClass}-helper-label-maxvalue`
  }, helperMaxValue))));
}, defaultProps);
SliderPresentation.displayName = "SliderPresentation";

exports.SliderPresentation = SliderPresentation;
exports.defaultProps = defaultProps;
exports.extensionKnobIdLower = extensionKnobIdLower;
exports.extensionKnobIdUpper = extensionKnobIdUpper;
