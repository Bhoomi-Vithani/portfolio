import React, { ReactNode, RefObject } from "react";
import { IBasicPropsInternal } from "../../utils/IBasicPropsInternal";
export interface ITogglePresentationProps extends IBasicPropsInternal {
    inputRef?: RefObject<HTMLInputElement>;
    value?: boolean;
    disabled?: boolean;
    invalid?: boolean;
    label?: ReactNode;
    helperText?: ReactNode;
    errorText?: ReactNode;
    errorTextAriaLive?: boolean;
    name?: string;
    onChange?: (value: boolean, name: string, event: React.SyntheticEvent<HTMLInputElement>) => void;
    title?: string;
    htmlAttrs?: React.InputHTMLAttributes<HTMLInputElement> | Record<`data-${string}`, string | number | boolean>;
    hasMouseHover: boolean;
    hasKeyboardFocus: boolean;
    onMouseHoverChange?: (newHover: boolean) => void;
    onKeyboardFocusChange?: (newFocus: boolean) => void;
    type: "checkbox" | "radio" | "switch";
    indeterminate?: boolean;
    hostClass: string;
}
export declare const TogglePresentation: {
    ({ id: idProp, className, children, noMargin, value, indeterminate, disabled, hasKeyboardFocus, hasMouseHover, invalid, htmlAttrs, label, helperText, errorText, errorTextAriaLive, title, onChange, name, onKeyboardFocusChange, onMouseHoverChange, type, hostClass, inputRef, }: ITogglePresentationProps): React.JSX.Element;
    displayName: string;
};
