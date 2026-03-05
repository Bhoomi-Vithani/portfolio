import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
import { ILinkPresentationProps } from "./LinkPresentation";
interface ILinkWrapperProps extends Omit<ILinkPresentationProps, "hasKeyboardFocus" | "hasMouseHover" | "onMouseHoverChange" | "onKeyboardFocusChange">, IBasicPropsInternal {
    forwardedRef?: (r: HTMLElement) => void;
}
export declare const LinkWrapper: (props: ILinkWrapperProps) => React.JSX.Element;
export {};
