import * as React from 'react';
import { DateTextFieldWrapper } from './shared/DateTextFieldWrapper.js';

const DateTextField = ({ optional, readOnly, clearIcon = true, minDate = new Date(100, 0, 1), maxDate = new Date(9999, 11, 31), dateFormat = "day", ...otherProps }) => (React.createElement(DateTextFieldWrapper, { ...otherProps, minDate: minDate, maxDate: maxDate, optional: !!optional, optionalText: typeof optional === "string" ? optional : undefined, readonly: readOnly, clearIcon: clearIcon, dateFormat: dateFormat }));
DateTextField.displayName = "DateTextfield";

export { DateTextField };
