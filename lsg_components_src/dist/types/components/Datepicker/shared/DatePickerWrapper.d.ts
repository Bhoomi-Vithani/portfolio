import React from "react";
import { IDatePickerPresentationProps } from "./DatePickerPresentation";
interface IDatePickerWrapperProps extends Omit<IDatePickerPresentationProps, "open" | "focussedValue" | "onFocussedValueChange" | "onFlyoutKeyDown" | "flyoutRef" | "onKeyDown" | "onOpenChange" | "hostRef"> {
}
export declare const DatePickerInternalWrapper: (props: IDatePickerWrapperProps) => React.JSX.Element;
export declare const DatePickerWrapper: ({ minDate, maxDate, datepickerFormat, dateFormat, ...props }: IDatePickerWrapperProps) => React.JSX.Element;
export {};
