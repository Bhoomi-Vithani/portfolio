import React from "react";
import { ICheckboxPresentationProps } from "./CheckboxPresentation";
export interface ICheckboxWrapperProps extends Omit<ICheckboxPresentationProps, "id" | "hasKeyboardFocus" | "hasMouseHover" | "onKeyboardFocusChange"> {
    id?: string;
    hasMouseHover?: boolean;
}
export declare const CheckboxWrapper: <T extends ICheckboxWrapperProps>(props: T) => React.JSX.Element;
