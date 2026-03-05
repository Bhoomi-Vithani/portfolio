import React from "react";
import { INavigationItemPresentationProps } from "./NavigationItemPresentation";
export interface INavigationItemWrapperProps extends Omit<INavigationItemPresentationProps, "hasKeyboardFocus" | "hasMouseHover" | "onMouseHoverChange" | "onKeyboardFocusChange"> {
}
export interface INavigationItemWrapperState {
    hasMouseHover: boolean;
    hasKeyboardFocus: boolean;
}
export declare class NavigationItemWrapper extends React.Component<INavigationItemWrapperProps, INavigationItemWrapperState> {
    constructor(props: INavigationItemWrapperProps);
    render(): React.JSX.Element;
}
