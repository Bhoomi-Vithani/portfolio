import React from "react";
import { ITextFieldWrapperProps } from "../../TextField/shared/TextFieldWrapper";
export interface IDateTextFieldWrapperProps extends Omit<ITextFieldWrapperProps, "value" | "onChange"> {
    value?: string | Date;
    onChange?: (value: string | Date, name: string, ev: React.SyntheticEvent<HTMLElement>) => void;
    dateFormat?: "day" | "month";
    minDate?: Date;
    maxDate?: Date;
}
export declare const parseTextFieldDate: (value: Date | string, dateFormat: any) => string | Date;
export declare const DateTextFieldWrapper: ({ value, onChange, onFocus, onBlur, htmlAttrs, minDate, maxDate, dateFormat, placeholder, ...otherProps }: IDateTextFieldWrapperProps) => React.JSX.Element;
