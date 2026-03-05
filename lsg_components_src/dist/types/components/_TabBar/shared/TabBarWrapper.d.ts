import React from "react";
import { ITabBarPresentationProps } from "./TabBarPresentation";
export interface ITabBarWrapperProps extends Omit<ITabBarPresentationProps, "activeRef" | "activeElement" | "innerRef" | "offsetLeft" | "showArrowLeft" | "showArrowRight"> {
}
export declare const TabBarWrapper: (props: ITabBarWrapperProps) => React.JSX.Element;
