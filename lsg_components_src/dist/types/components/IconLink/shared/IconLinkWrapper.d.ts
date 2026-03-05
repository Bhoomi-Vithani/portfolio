import React from "react";
import { IIconLinkPresentationProps } from "./IconLinkPresentation";
export interface IIconLinkWrapperProps extends Omit<IIconLinkPresentationProps, "hasKeyboardFocus" | "hasMouseHover" | "onKeyboardFocusChange" | "iconId"> {
}
export declare const IconLinkWrapper: (props: IIconLinkWrapperProps) => React.JSX.Element;
