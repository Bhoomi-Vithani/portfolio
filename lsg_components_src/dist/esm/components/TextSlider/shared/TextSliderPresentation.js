import { object_devices_keyboard, interaction___slider } from '@lsg/icons';
import React__default, { useState, useEffect } from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { useUniqueId } from '../../../utils/Hooks/index.js';
import { Host } from '../../../utils/Host.js';
import { texts, getBrowserLanguage } from '../../../utils/Localization.js';
import { IconLinkWrapper } from '../../IconLink/shared/IconLinkWrapper.js';
import { IconLinkGroupWrapper } from '../../IconLinkGroup/shared/IconLinkGroupWrapper.js';
import { NumberTextFieldWrapper } from '../../NumberTextField/shared/NumberTextFieldWrapper.js';
import { SliderWrapper } from '../../_Slider/SliderWrapper.js';
import { hostClass } from './TextSlider.styles.js';

// @ts-strict-ignore
// Helper functions
const formatNumber = (value, decimalDigits) => {
    if (typeof value === "string")
        return value;
    if (value === undefined)
        return value; // TODO: check whether validation is sufficently?
    // TODO make this configurable in the translation files
    const locale = getBrowserLanguage();
    const separator = Intl.NumberFormat(locale).format(1.1).charAt(1);
    return value.toFixed(decimalDigits).replace(".", separator);
};
const defaultFormatter = (value, decimalDigits) => {
    const digits = decimalDigits || 0;
    return !Array.isArray(value)
        ? formatNumber(value, digits)
        : [formatNumber(value[0], digits), formatNumber(value[1], digits)];
};
const TextSliderPresentation = (props) => {
    const { className, noMargin, isStencilHost, label, ariaTextFieldLabel, ariaSliderLabel, name, disabled, helperMinValue, helperMaxValue, minValue = 0, maxValue, sliderVisible, isMobile, precision = 1, look = "singleSlider", decimalDigits = 0, value, 
    // internal extended props
    handleOnIconClick, handleInputOnClear, handleInputOnChange, handleSliderOnChange, handleInputOnFocus, handleOnBlur, handleOnFocus, hostRef, inputTextLowerRef, inputTextUpperRef, handleTextInputAreaKeydown, openTextInputAreaButtonRef, formatter, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    invalidInputField: invalidInputFieldProp = "lower", ...otherProps } = props;
    const id = useUniqueId(`${hostClass}-`, props.id);
    const labelTo = props.labelTo === undefined ? texts.lsg.component.InputSlider.defaultLabelTo : props.labelTo;
    // when a slider is moved, the displayed values on top of the slider change as well. So the value(s) change on drag of the slider.
    const formatDisplayValue = (val) => {
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
    const [displayValue, setDisplayValue] = useState(formatDisplayValue(value));
    const icon = !disabled && sliderVisible ? object_devices_keyboard : interaction___slider;
    const openTextInputAreaButtonLabel = `${label}, ${texts.lsg.component.InputSlider.current} ${displayValue}, ${texts.lsg.component.InputSlider.openInputArea}`;
    const closeTextInputAreaButtonLabel = `${label}, ${texts.lsg.component.InputSlider.current} ${displayValue}, ${texts.lsg.component.InputSlider.closeInputArea}}`;
    const ariaTextFieldLabelString = ariaTextFieldLabel && typeof ariaTextFieldLabel === "string" ? ariaTextFieldLabel : label;
    let lowerTextfieldAriaLabel = ariaTextFieldLabelString;
    let upperTextfieldAriaLabel;
    if (look === "rangeSlider") {
        if (Array.isArray(ariaTextFieldLabel)) {
            lowerTextfieldAriaLabel = ariaTextFieldLabel[0];
            upperTextfieldAriaLabel = ariaTextFieldLabel[1];
        }
        else {
            lowerTextfieldAriaLabel = `${ariaTextFieldLabelString}, ${texts.lsg.component.InputSlider.ariaLowerTextfieldLabel}`;
            upperTextfieldAriaLabel = `${ariaTextFieldLabelString}, ${texts.lsg.component.InputSlider.ariaUpperTextfieldLabel}`;
        }
    }
    const invalidInput = props.invalidInput ||
        (!!props.errorText && !(Array.isArray(props.errorText) && !props.errorText[0] && !props.errorText[1]));
    let invalidInputField = invalidInputFieldProp;
    if (props.preventAutoCorrection && invalidInput && !invalidInputField) {
        // you do not need to set invalidInput and invalidInputField, if you set errorTexts accordingly.
        const hasLowerErrorTextProp = props.errorText && !(Array.isArray(props.errorText) && !props.errorText[0]);
        const hasUpperErrorTextProp = Array.isArray(props.errorText) && !!props.errorText[1];
        invalidInputField =
            (hasLowerErrorTextProp && hasUpperErrorTextProp && "both") ||
                (hasLowerErrorTextProp && "lower") ||
                (hasUpperErrorTextProp && "upper") ||
                undefined;
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
            }
            else {
                helperTextLower = props.helperTextValue[0];
                helperTextUpper = props.helperTextValue[1];
            }
        }
        if (invalidInput) {
            if (!Array.isArray(props.errorText)) {
                if (invalidInputField !== "upper") {
                    errorTextLower = props.errorText;
                }
                else {
                    errorTextUpper = props.errorText;
                }
            }
            else {
                errorTextLower = props.errorText[0];
                errorTextUpper = props.errorText[1];
            }
        }
    }
    else {
        helperTextLower = props.helperTextValue;
        errorTextLower = props.errorText;
    }
    const handleSliderOnInput = (val, n) => {
        setDisplayValue(formatDisplayValue(val));
        if (props.handleSliderOnInput) {
            props.handleSliderOnInput(val, n);
        }
    };
    useEffect(() => {
        setDisplayValue(formatDisplayValue(value));
    }, [value?.toString(), sliderVisible]);
    return (React__default.createElement(Host, { id: id, className: cleanupClassObject({
            [className]: !!className,
            [hostClass]: true,
            [`${lsgPre}no-margin`]: noMargin,
        }), isStencilHost: isStencilHost, onBlur: handleOnBlur, onFocus: handleOnFocus, tabIndex: -1, ref: hostRef, role: "group", "aria-labelledby": sliderVisible ? `${id}-label` : `${id}-inputTextLower-label` },
        React__default.createElement("div", { id: `${id}-textfield-area`, className: cleanupClassObject({
                [`${hostClass}-${look.toLowerCase()}`]: true,
                [`${hostClass}__hidden`]: disabled,
            }), onKeyDown: handleTextInputAreaKeydown },
            !sliderVisible && (React__default.createElement(NumberTextFieldWrapper, { id: `${id}-inputTextLower`, name: `${name}_inputTextLower`, readonly: sliderVisible, label: label, htmlAttrs: {
                    "aria-label": lowerTextfieldAriaLabel,
                    autoComplete: "off",
                    "aria-autocomplete": "none",
                }, noMargin: noMargin, value: look === "singleSlider" ? value : value[0], icon: (isMobile && look === "rangeSlider") || look === "singleSlider" ? icon : undefined, iconText: closeTextInputAreaButtonLabel, iconExpanded: true, iconHtmlAttrs: { "aria-controls": `${id}-textfield-area` }, onIconClick: handleOnIconClick, onChange: handleInputOnChange, onClearIconClick: handleInputOnClear, disabled: disabled, invalid: invalidInput && (["lower", "both"].includes(invalidInputField) || look === "singleSlider"), helperText: helperTextLower, errorText: errorTextLower, onFocus: handleInputOnFocus, inputRef: inputTextLowerRef })),
            !sliderVisible && look === "rangeSlider" && (React__default.createElement(React__default.Fragment, null,
                React__default.createElement("span", { className: `${hostClass}-label-to` }, labelTo),
                React__default.createElement(NumberTextFieldWrapper, { id: `${id}-inputTextUpper`, name: `${name}_inputTextUpper`, label: "", decimalDigits: props.decimalDigits, htmlAttrs: {
                        "aria-label": upperTextfieldAriaLabel,
                        autoComplete: "off",
                        "aria-autocomplete": "none",
                    }, readonly: sliderVisible, noMargin: noMargin, value: value[1], icon: !isMobile ? icon : undefined, iconText: closeTextInputAreaButtonLabel, iconExpanded: true, iconHtmlAttrs: { "aria-controls": `${id}-textfield-area` }, onIconClick: handleOnIconClick, onChange: handleInputOnChange, onClearIconClick: handleInputOnClear, disabled: disabled, invalid: invalidInput && ["upper", "both"].includes(invalidInputField), helperText: helperTextUpper, errorText: errorTextUpper, onFocus: handleInputOnFocus, inputRef: inputTextUpperRef })))),
        (sliderVisible || disabled) /* visible in single or range mode as simple display} */ && (React__default.createElement(React__default.Fragment, null,
            React__default.createElement("div", { className: cleanupClassObject({
                    [`${hostClass}-display-container`]: true,
                    [`${hostClass}-display-container__disabled`]: disabled,
                }) },
                React__default.createElement("div", { id: `${id}-label`, className: `${hostClass}-display-container-overline` }, label),
                React__default.createElement("div", { className: `${hostClass}-display-container-value-row` },
                    React__default.createElement("span", { className: `${hostClass}-display-container-label-value` }, displayValue),
                    !disabled && (React__default.createElement(IconLinkGroupWrapper, { direction: "textfield", noMargin: true },
                        React__default.createElement(IconLinkWrapper, { appearance: "no-text", label: openTextInputAreaButtonLabel, key: `${hostClass}-switcher-desktop`, name: `${name}_openInput`, icon: icon, htmlAttrs: { "aria-controls": `${id}-textfield-area` }, onClick: handleOnIconClick, expanded: false, actionRef: openTextInputAreaButtonRef }))))),
            React__default.createElement(SliderWrapper, { ...otherProps, id: `${id}-slider`, name: `${name}_slider`, ariaLabel: ariaSliderLabel || label, value: value, onChange: handleSliderOnChange, onInput: handleSliderOnInput, disabled: disabled, minValue: minValue, maxValue: maxValue, helperMinValue: helperMinValue, helperMaxValue: helperMaxValue, look: look, precision: precision, onFocus: handleOnFocus, onBlur: handleOnBlur })))));
};
TextSliderPresentation.displayName = "TextSliderPresentation";

export { TextSliderPresentation, formatNumber };
