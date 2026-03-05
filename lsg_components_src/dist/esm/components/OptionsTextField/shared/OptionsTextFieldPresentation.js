import { isDate } from 'date-fns';
import React__default, { useState, useContext, useRef, useEffect } from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { useUniqueId, useResize } from '../../../utils/Hooks/index.js';
import { DateTextFieldWrapper } from '../../DateTextField/shared/DateTextFieldWrapper.js';
import { SpacingContext } from '../../FormContainer/shared/SpacingContext.js';
import { NumberTextFieldWrapper } from '../../NumberTextField/shared/NumberTextFieldWrapper.js';
import { SelectWrapper } from '../../Select/shared/SelectWrapper.js';
import { TextFieldWrapper } from '../../TextField/shared/TextFieldWrapper.js';
import { HelperTextPresentation } from '../../_HelperText/HelperTextPresentation.js';
import { hostClass } from './OptionsTextField.styles.js';

// @ts-strict-ignore
const OptionsTextFieldPresentation = (props) => {
    const [hasFocus, setHasFocus] = useState(false);
    const groupLabelId = useUniqueId(`${hostClass}-groupLabel`);
    const { id: idProp, className, noMargin, optionsProps, type, value, onChange, onFocus, onBlur, groupLabel, label, helperText, errorText, disabled, spacing, ...textFieldProps } = props;
    const { spacing: spacingFromContext } = useContext(SpacingContext); // For FormContainer with spacing="dense"
    const effectiveSpacing = spacing ?? spacingFromContext; // For spacing prop usage in OptionsTextField
    const hasValidValue = (typeof value === "number" && !Number.isNaN(value)) ||
        (typeof value === "string" && value?.trim().length > 0) ||
        (typeof value === "object" && isDate(value));
    // INFO: Variables `hasValidValue` and `hasFocus` are important for switch mechanism between TextField-Label and OptionsTextField in order
    // to show Group-Label from OptionsTextField or together with TextField-label during user interaction.
    const hideGroupLabel = hasValidValue || hasFocus;
    const id = useUniqueId(`${hostClass}-`, idProp);
    const errorTextId = `${id}-error-text`;
    const helperTextId = `${id}-helper-text`;
    const optionsId = optionsProps?.id || `${id}-options`;
    const labelRef = useRef(null);
    const groupLabelRef = useRef(null);
    const [labelPadding, setLabelPadding] = useState(0);
    const onResize = () => {
        const labelHeight = labelRef.current?.offsetHeight || 0;
        const groupLabelHeight = groupLabelRef.current?.offsetHeight || 0;
        // Height of floating label is increased with around (100/2.75)% when no focus and no value is there
        // If the increase of height is more than a certain threshold, it would overlap with the group label. Then,
        // an additional padding is added
        setLabelPadding(Math.max(0, labelHeight / 2.75 + groupLabelHeight - 30));
    };
    useResize(onResize, [label, groupLabel]);
    useEffect(onResize, []);
    return (React__default.createElement("div", { className: cleanupClassObject({
            [className]: !!className,
            [hostClass]: true,
            [`${lsgPre}no-margin`]: noMargin,
            [`${hostClass}__dense`]: effectiveSpacing === "dense",
        }), role: optionsProps && "group", "aria-labelledby": optionsProps ? groupLabelId : undefined, id: `${id}-base` },
        React__default.createElement("div", { className: `${hostClass}-container` },
            React__default.createElement("div", { id: groupLabelId, className: cleanupClassObject({
                    [`${hostClass}-label`]: true,
                    [`${hostClass}-label__hidden`]: hideGroupLabel,
                }), ref: groupLabelRef }, groupLabel),
            React__default.createElement("div", { className: `${hostClass}-textfield`, style: { paddingTop: hideGroupLabel ? 0 : labelPadding } },
                type === "number" && (React__default.createElement(NumberTextFieldWrapper, { ...textFieldProps, value: value, noMargin: true, onChange: onChange, label: !hasValidValue && !hasFocus ? label : `${groupLabel} - ${label}`, onFocus: (e, n) => {
                        onFocus?.(e, n);
                        setHasFocus(true);
                        // According new implementation scheme on TextField, component receive focus when user clicked in or clicked on Clear-Icon
                    }, onBlur: (e, n) => {
                        onBlur?.(e, n);
                        setHasFocus(false);
                    }, disabled: disabled, labelRef: labelRef, id: id, spacing: effectiveSpacing })),
                type === "date" && (React__default.createElement(DateTextFieldWrapper, { ...textFieldProps, type: "text", value: value, noMargin: true, onChange: (v, name, ev) => onChange(v, name, ev), label: !hasValidValue && !hasFocus ? label : groupLabel?.concat(" - ").concat(label), onFocus: (e, n) => {
                        onFocus?.(e, n);
                        setHasFocus(true);
                    }, onBlur: (e, n) => {
                        onBlur?.(e, n);
                        setHasFocus(false);
                    }, disabled: disabled, labelRef: labelRef, id: id, spacing: effectiveSpacing })),
                ["text", "password"].includes(type) && (React__default.createElement(TextFieldWrapper, { ...textFieldProps, type: type, value: value, noMargin: true, onChange: onChange, label: hideGroupLabel ? groupLabel?.concat(" - ").concat(label) : label, onFocus: (e, n) => {
                        onFocus?.(e, n);
                        setHasFocus(true);
                    }, onBlur: (e, n) => {
                        onBlur?.(e, n);
                        setHasFocus(false);
                    }, disabled: disabled, labelRef: labelRef, id: id, spacing: effectiveSpacing }))),
            optionsProps && (React__default.createElement("div", { className: `${hostClass}-options` },
                React__default.createElement(SelectWrapper, { ...optionsProps, id: optionsId, disabled: optionsProps.disabled, readonly: optionsProps.readonly, clearIcon: false, hiddenSelectIcon: false, noMargin: true, spacing: effectiveSpacing })))),
        React__default.createElement(HelperTextPresentation, { helperText: helperText, errorText: errorText, helperTextId: helperTextId, errorTextId: errorTextId, disabled: disabled, spacing: effectiveSpacing === "dense" ? "dense" : undefined })));
};
OptionsTextFieldPresentation.displayName = "OptionsTextFieldPresentation";

export { OptionsTextFieldPresentation };
