import * as React from 'react';
import { OptionsTextFieldPresentation } from './shared/OptionsTextFieldPresentation.js';

// @ts-strict-ignore
const OptionsTextField = ({ optional, readOnly, clearIcon = true, optionsProps, onKeyDown = () => { }, onClick, type, value, textArea, groupLabel, as = "input", ...otherProps }) => (React.createElement(OptionsTextFieldPresentation, { ...otherProps, groupLabel: groupLabel, value: value, type: type, as: typeof textArea !== "undefined" ? "textarea" : as, clearIcon: clearIcon, onKeyDown: e => onKeyDown(e.key, otherProps.name, e), onInputClick: onClick, optional: !!optional, optionalText: typeof optional === "string" ? optional : undefined, readonly: readOnly, optionsProps: optionsProps && { ...optionsProps, readonly: optionsProps.readOnly } }));
OptionsTextField.displayName = "OptionsTextField";

export { OptionsTextField };
