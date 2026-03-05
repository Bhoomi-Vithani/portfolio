import React, { ReactNode } from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface IRadioPresentationProps extends IBasicPropsInternal {
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
export declare const RadioPresentation: {
    (props: IRadioPresentationProps): React.JSX.Element;
    displayName: string;
};
