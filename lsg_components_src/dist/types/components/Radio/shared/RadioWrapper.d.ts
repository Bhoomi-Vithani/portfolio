import React from "react";
import { IRadioPresentationProps } from "./RadioPresentation";
export interface IRadioWrapperProps extends Omit<IRadioPresentationProps, "hasKeyboardFocus" | "hasMouseHover" | "onKeyboardFocusChange"> {
    hasMouseHover?: boolean;
}
export declare const RadioWrapper: (props: IRadioWrapperProps) => React.JSX.Element;
