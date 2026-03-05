import React from "react";
import { IActionBaseProps } from "../Action/shared/ActionPresentation";
export interface INavigationItemPresentationProps extends IActionBaseProps {
    secondary?: boolean;
    level?: "segment" | "topic" | "group";
    innerRef?: any;
    expanded?: boolean;
}
export declare const NavigationItemPresentation: {
    ({ className, children, actionRef, hasMouseHover, hasKeyboardFocus, disabled, href, level, secondary, innerRef, ...otherProps }: INavigationItemPresentationProps): React.JSX.Element;
    displayName: string;
};
