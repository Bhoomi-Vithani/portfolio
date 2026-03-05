import React from "react";
import { INavigationLinkPresentationProps } from "./NavigationLinkPresentation";
interface INavigationLinkWrapperState {
    hasMouseHover: boolean;
    hasKeyboardFocus: boolean;
}
export interface INavigationLinkWrapperProps extends Omit<INavigationLinkPresentationProps, "hasKeyboardFocus" | "hasMouseHover" | "onMouseHoverChange" | "onKeyboardFocusChange"> {
}
export declare class NavigationLinkWrapper extends React.Component<INavigationLinkWrapperProps, INavigationLinkWrapperState> {
    constructor(props: INavigationLinkWrapperProps);
    render(): React.JSX.Element;
}
export {};
