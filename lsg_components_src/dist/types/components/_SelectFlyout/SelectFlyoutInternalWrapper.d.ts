import React from "react";
import { ISelectFlyoutPresentationProps } from "./SelectFlyoutPresentation";
export interface ISelectFlyoutInternalWrapperProps extends Omit<ISelectFlyoutPresentationProps, "onMouseOver" | "onKeyDown" | "scrollFocussedElementToTop" | "ref"> {
    onFocussedValueChange?: (value: string, scrollElementIntoView: boolean) => void;
    scrollFocussedElementIntoView: boolean | "top";
    withTextInput?: boolean;
}
export declare const SelectFlyoutInternalWrapper: ({ onFocussedValueChange, withTextInput, ...props }: ISelectFlyoutInternalWrapperProps) => React.JSX.Element;
