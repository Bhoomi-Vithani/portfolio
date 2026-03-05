import React from "react";
import { IBasicPropsInternal } from "../../utils/IBasicPropsInternal";
export interface ILabelPresentationProps extends IBasicPropsInternal {
    onMouseHoverChange?: (newHover: boolean) => void;
    onKeyboardFocusChange?: (newFocus: boolean) => void;
    type?: "label" | "checkbox" | "radio";
    htmlFor?: string;
    value?: boolean;
    name?: string;
    onChange?: (value: boolean, name: string, event: React.SyntheticEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    loading?: boolean;
    htmlInputAttrs?: React.InputHTMLAttributes<HTMLInputElement> | Record<`data-${string}`, string | number | boolean>;
    htmlAttrs?: React.LabelHTMLAttributes<HTMLLabelElement> | Record<`data-${string}`, string | number | boolean>;
    expandToOverlay?: boolean;
    hasMouseHover?: boolean;
    hasKeyboardFocus?: boolean;
    isDisplayInline?: boolean;
    nonInteractive?: boolean;
}
export declare const defaultProps: Partial<ILabelPresentationProps>;
export declare const LabelPresentation: React.ForwardRefExoticComponent<ILabelPresentationProps & React.RefAttributes<HTMLElement>>;
