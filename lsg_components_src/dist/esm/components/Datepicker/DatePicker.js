import * as React from 'react';
import { DatePickerWrapper } from './shared/DatePickerWrapper.js';

const DatePicker = ({ optional, datepickerFormat, dateFormat = "day", ...otherProps }) => (React.createElement(DatePickerWrapper, { datepickerFormat: datepickerFormat || dateFormat, ...otherProps, optional: !!optional, optionalText: typeof optional === "string" ? optional : undefined }));
DatePicker.displayName = "DatePicker";

export { DatePicker };
