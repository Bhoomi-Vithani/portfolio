import * as React from 'react';
import { DatePickerWrapper } from '../Datepicker/shared/DatePickerWrapper.js';

const ChipsDatePicker = ({ label, isSelected, onResetFilter, ...props }) => (React.createElement(DatePickerWrapper, { ...props, chipVariant: true, label: label || "", chipSelected: isSelected, chipResetFilter: onResetFilter }));
ChipsDatePicker.displayName = "Chips.DatePicker";

export { ChipsDatePicker };
