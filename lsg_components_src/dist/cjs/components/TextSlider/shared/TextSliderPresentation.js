'use strict';

var icons = require('@lsg/icons');
var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var index = require('../../../utils/Hooks/index.js');
var Host = require('../../../utils/Host.js');
var Localization = require('../../../utils/Localization.js');
var IconLinkWrapper = require('../../IconLink/shared/IconLinkWrapper.js');
var IconLinkGroupWrapper = require('../../IconLinkGroup/shared/IconLinkGroupWrapper.js');
var NumberTextFieldWrapper = require('../../NumberTextField/shared/NumberTextFieldWrapper.js');
var SliderWrapper = require('../../_Slider/SliderWrapper.js');
var TextSlider_styles = require('./TextSlider.styles.js');

// @ts-strict-ignore
// Helper functions
const formatNumber = (value, decimalDigits) => {
  if (typeof value === "string") return value;
  if (value === undefined) return value; // TODO: check whether validation is sufficently?
  // TODO make this configurable in the translation files
  const locale = Localization.getBrowserLanguage();
  const separator = Intl.NumberFormat(locale).format(1.1).charAt(1);
  return value.toFixed(decimalDigits).replace(".", separator);
};
const defaultFormatter = (value, decimalDigits) => {
  const digits = decimalDigits || 0;
  return !Array.isArray(value) ? formatNumber(value, digits) : [formatNumber(value[0], digits), formatNumber(value[1], digits)];
};
const TextSliderPresentation = props => {
  const {
    className,
    noMargin,
    isStencilHost,
    label,
    ariaTextFieldLabel,
    ariaSliderLabel,
    name,
    disabled,
    helperMinValue,
    helperMaxValue,
    minValue = 0,
    maxValue,
    sliderVisible,
    isMobile,
    precision = 1,
    look = "singleSlider",
    decimalDigits = 0,
    value,
    // internal extended props
    handleOnIconClick,
    handleInputOnClear,
    handleInputOnChange,
    handleSliderOnChange,
    handleInputOnFocus,
    handleOnBlur,
    handleOnFocus,
    hostRef,
    inputTextLowerRef,
    inputTextUpperRef,
    handleTextInputAreaKeydown,
    openTextInputAreaButtonRef,
    formatter,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    invalidInputField: invalidInputFieldProp = "lower",
    ...otherProps
  } = props;
  const id = index.useUniqueId(`${TextSlider_styles.hostClass}-`, props.id);
  const labelTo = props.labelTo === undefined ? Localization.texts.lsg.component.InputSlider.defaultLabelTo : props.labelTo;
  // when a slider is moved, the displayed values on top of the slider change as well. So the value(s) change on drag of the slider.
  const formatDisplayValue = val => {
    const displayValue = formatter ? formatter(val) : defaultFormatter(val, decimalDigits);
    // Filter invalid values to prevent erroneous display of seemingly "correct" values. If a value is invalid, display an empty string instead.
    if (look === "singleSlider") {
      return typeof val === "number" && !Number.isNaN(val) ? displayValue : "";
    }
    if (Array.isArray(val)) {
      return `${typeof val[0] === "number" && !Number.isNaN(val[0]) ? displayValue[0] : ""} ${labelTo || ""}  ${typeof val[1] === "number" && !Number.isNaN(val[1]) ? displayValue[1] : ""}`;
    }
    return "";
  };
  const [displayValue, setDisplayValue] = React__default.useState(formatDisplayValue(value));
  const icon = !disabled && sliderVisible ? icons.object_devices_keyboard : icons.interaction___slider;
  const openTextInputAreaButtonLabel = `${label}, ${Localization.texts.lsg.component.InputSlider.current} ${displayValue}, ${Localization.texts.lsg.component.InputSlider.openInputArea}`;
  const closeTextInputAreaButtonLabel = `${label}, ${Localization.texts.lsg.component.InputSlider.current} ${displayValue}, ${Localization.texts.lsg.component.InputSlider.closeInputArea}}`;
  const ariaTextFieldLabelString = ariaTextFieldLabel && typeof ariaTextFieldLabel === "string" ? ariaTextFieldLabel : label;
  let lowerTextfieldAriaLabel = ariaTextFieldLabelString;
  let upperTextfieldAriaLabel;
  if (look === "rangeSlider") {
    if (Array.isArray(ariaTextFieldLabel)) {
      lowerTextfieldAriaLabel = ariaTextFieldLabel[0];
      upperTextfieldAriaLabel = ariaTextFieldLabel[1];
    } else {
      lowerTextfieldAriaLabel = `${ariaTextFieldLabelString}, ${Localization.texts.lsg.component.InputSlider.ariaLowerTextfieldLabel}`;
      upperTextfieldAriaLabel = `${ariaTextFieldLabelString}, ${Localization.texts.lsg.component.InputSlider.ariaUpperTextfieldLabel}`;
    }
  }
  const invalidInput = props.invalidInput || !!props.errorText && !(Array.isArray(props.errorText) && !props.errorText[0] && !props.errorText[1]);
  let invalidInputField = invalidInputFieldProp;
  if (props.preventAutoCorrection && invalidInput && !invalidInputField) {
    // you do not need to set invalidInput and invalidInputField, if you set errorTexts accordingly.
    const hasLowerErrorTextProp = props.errorText && !(Array.isArray(props.errorText) && !props.errorText[0]);
    const hasUpperErrorTextProp = Array.isArray(props.errorText) && !!props.errorText[1];
    invalidInputField = hasLowerErrorTextProp && hasUpperErrorTextProp && "both" || hasLowerErrorTextProp && "lower" || hasUpperErrorTextProp && "upper" || undefined;
  }
  let helperTextLower;
  let helperTextUpper;
  let errorTextLower;
  let errorTextUpper;
  if (look === "rangeSlider") {
    // as of LSG v19, user should give in an array for the lower and upper helperText, in version 18 it used to be a string only.
    if (props.helperTextValue) {
      if (!Array.isArray(props.helperTextValue)) {
        helperTextLower = props.helperTextValue;
      } else {
        helperTextLower = props.helperTextValue[0];
        helperTextUpper = props.helperTextValue[1];
      }
    }
    if (invalidInput) {
      if (!Array.isArray(props.errorText)) {
        if (invalidInputField !== "upper") {
          errorTextLower = props.errorText;
        } else {
          errorTextUpper = props.errorText;
        }
      } else {
        errorTextLower = props.errorText[0];
        errorTextUpper = props.errorText[1];
      }
    }
  } else {
    helperTextLower = props.helperTextValue;
    errorTextLower = props.errorText;
  }
  const handleSliderOnInput = (val, n) => {
    setDisplayValue(formatDisplayValue(val));
    if (props.handleSliderOnInput) {
      props.handleSliderOnInput(val, n);
    }
  };
  React__default.useEffect(() => {
    setDisplayValue(formatDisplayValue(value));
  }, [value?.toString(), sliderVisible]);
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    id: id,
    className: DomUtils.cleanupClassObject({
      [className]: !!className,
      [TextSlider_styles.hostClass]: true,
      [`${prefix.lsgPre}no-margin`]: noMargin
    }),
    isStencilHost: isStencilHost,
    onBlur: handleOnBlur,
    onFocus: handleOnFocus,
    tabIndex: -1,
    ref: hostRef,
    role: "group",
    "aria-labelledby": sliderVisible ? `${id}-label` : `${id}-inputTextLower-label`
  }, /*#__PURE__*/React__default.createElement("div", {
    id: `${id}-textfield-area`,
    className: DomUtils.cleanupClassObject({
      [`${TextSlider_styles.hostClass}-${look.toLowerCase()}`]: true,
      [`${TextSlider_styles.hostClass}__hidden`]: disabled
    }),
    onKeyDown: handleTextInputAreaKeydown
  }, !sliderVisible && (/*#__PURE__*/React__default.createElement(NumberTextFieldWrapper.NumberTextFieldWrapper, {
    id: `${id}-inputTextLower`,
    name: `${name}_inputTextLower`,
    readonly: sliderVisible,
    label: label,
    htmlAttrs: {
      "aria-label": lowerTextfieldAriaLabel,
      autoComplete: "off",
      "aria-autocomplete": "none"
    },
    noMargin: noMargin,
    value: look === "singleSlider" ? value : value[0],
    icon: isMobile && look === "rangeSlider" || look === "singleSlider" ? icon : undefined,
    iconText: closeTextInputAreaButtonLabel,
    iconExpanded: true,
    iconHtmlAttrs: {
      "aria-controls": `${id}-textfield-area`
    },
    onIconClick: handleOnIconClick,
    onChange: handleInputOnChange,
    onClearIconClick: handleInputOnClear,
    disabled: disabled,
    invalid: invalidInput && (["lower", "both"].includes(invalidInputField) || look === "singleSlider"),
    helperText: helperTextLower,
    errorText: errorTextLower,
    onFocus: handleInputOnFocus,
    inputRef: inputTextLowerRef
  })), !sliderVisible && look === "rangeSlider" && (/*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("span", {
    className: `${TextSlider_styles.hostClass}-label-to`
  }, labelTo), /*#__PURE__*/React__default.createElement(NumberTextFieldWrapper.NumberTextFieldWrapper, {
    id: `${id}-inputTextUpper`,
    name: `${name}_inputTextUpper`,
    label: "",
    decimalDigits: props.decimalDigits,
    htmlAttrs: {
      "aria-label": upperTextfieldAriaLabel,
      autoComplete: "off",
      "aria-autocomplete": "none"
    },
    readonly: sliderVisible,
    noMargin: noMargin,
    value: value[1],
    icon: !isMobile ? icon : undefined,
    iconText: closeTextInputAreaButtonLabel,
    iconExpanded: true,
    iconHtmlAttrs: {
      "aria-controls": `${id}-textfield-area`
    },
    onIconClick: handleOnIconClick,
    onChange: handleInputOnChange,
    onClearIconClick: handleInputOnClear,
    disabled: disabled,
    invalid: invalidInput && ["upper", "both"].includes(invalidInputField),
    helperText: helperTextUpper,
    errorText: errorTextUpper,
    onFocus: handleInputOnFocus,
    inputRef: inputTextUpperRef
  })))), (sliderVisible || disabled /* visible in single or range mode as simple display} */) && (/*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${TextSlider_styles.hostClass}-display-container`]: true,
      [`${TextSlider_styles.hostClass}-display-container__disabled`]: disabled
    })
  }, /*#__PURE__*/React__default.createElement("div", {
    id: `${id}-label`,
    className: `${TextSlider_styles.hostClass}-display-container-overline`
  }, label), /*#__PURE__*/React__default.createElement("div", {
    className: `${TextSlider_styles.hostClass}-display-container-value-row`
  }, /*#__PURE__*/React__default.createElement("span", {
    className: `${TextSlider_styles.hostClass}-display-container-label-value`
  }, displayValue), !disabled && (/*#__PURE__*/React__default.createElement(IconLinkGroupWrapper.IconLinkGroupWrapper, {
    direction: "textfield",
    noMargin: true
  }, /*#__PURE__*/React__default.createElement(IconLinkWrapper.IconLinkWrapper, {
    appearance: "no-text",
    label: openTextInputAreaButtonLabel,
    key: `${TextSlider_styles.hostClass}-switcher-desktop`,
    name: `${name}_openInput`,
    icon: icon,
    htmlAttrs: {
      "aria-controls": `${id}-textfield-area`
    },
    onClick: handleOnIconClick,
    expanded: false,
    actionRef: openTextInputAreaButtonRef
  }))))), /*#__PURE__*/React__default.createElement(SliderWrapper.SliderWrapper, {
    ...otherProps,
    id: `${id}-slider`,
    name: `${name}_slider`,
    ariaLabel: ariaSliderLabel || label,
    value: value,
    onChange: handleSliderOnChange,
    onInput: handleSliderOnInput,
    disabled: disabled,
    minValue: minValue,
    maxValue: maxValue,
    helperMinValue: helperMinValue,
    helperMaxValue: helperMaxValue,
    look: look,
    precision: precision,
    onFocus: handleOnFocus,
    onBlur: handleOnBlur
  }))));
};
TextSliderPresentation.displayName = "TextSliderPresentation";

exports.TextSliderPresentation = TextSliderPresentation;
exports.formatNumber = formatNumber;
