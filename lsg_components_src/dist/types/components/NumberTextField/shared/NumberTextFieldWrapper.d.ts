import React from "react";
import { ITextFieldWrapperProps } from "../../TextField/shared/TextFieldWrapper";
export interface ITextFieldState {
    inputValue: string | undefined;
}
export interface INumberTextFieldWrapperProps extends Omit<ITextFieldWrapperProps, "value" | "onChange"> {
    value?: string | number;
    onChange?: (value: string | number, name: string, ev: React.SyntheticEvent<HTMLElement>) => void;
    valueNumberFormatter?: (value: number, decimalDigits?: number) => string;
    decimalDigits?: number;
}
export declare const NumberTextFieldWrapper: ({ valueNumberFormatter, value, onChange, onFocus, onBlur, htmlAttrs, decimalDigits, spacing, ...otherProps }: INumberTextFieldWrapperProps) => React.JSX.Element;
