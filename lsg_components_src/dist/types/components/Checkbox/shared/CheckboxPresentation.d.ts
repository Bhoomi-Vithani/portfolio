import React, { ReactNode, RefObject } from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface ICheckboxPresentationProps extends IBasicPropsInternal {
    inputRef?: RefObject<HTMLInputElement>;
    value?: boolean;
    disabled?: boolean;
    invalid?: boolean;
    label?: ReactNode;
    helperText?: ReactNode;
    errorText?: ReactNode;
    name?: string;
    onChange?: (value: boolean, name: string, event: React.SyntheticEvent<HTMLInputElement>) => void;
    title?: string;
    htmlAttrs?: React.InputHTMLAttributes<HTMLInputElement> | Record<`data-${string}`, string | number | boolean>;
    hasMouseHover: boolean;
    hasKeyboardFocus: boolean;
    onMouseHoverChange?: (newHover: boolean) => void;
    onKeyboardFocusChange?: (newFocus: boolean) => void;
    errorTextAriaLive?: boolean;
}
export declare const CheckboxPresentation: {
    ({ value, onChange, ...otherProps }: ICheckboxPresentationProps): React.JSX.Element;
    displayName: string;
};
