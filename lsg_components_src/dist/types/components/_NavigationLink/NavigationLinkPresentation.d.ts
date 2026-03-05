import React from "react";
import { IBasicPropsInternal } from "../../utils/IBasicPropsInternal";
export interface INavigationLinkPresentationProps extends IBasicPropsInternal {
    loading?: boolean;
    secondary?: boolean;
    disabled?: boolean;
    href?: string;
    name?: string;
    actionRef?: (element: HTMLElement) => void;
    hasMouseHover?: boolean;
    onMouseHoverChange?: (newHover: boolean) => void;
    hasKeyboardFocus?: boolean;
    onKeyboardFocusChange?: (newFocus: boolean) => void;
    onMouseDown?: (ev: React.MouseEvent<HTMLElement>) => void;
    svgAttrs?: any;
    onClick?: (e: React.MouseEvent<HTMLElement>, name: string) => void;
    htmlAttrs?: React.ButtonHTMLAttributes<HTMLButtonElement> | React.AnchorHTMLAttributes<HTMLAnchorElement> | Record<`data-${string}`, string | number | boolean>;
    actionAs?: any;
    actionProps?: any;
}
export declare const NavigationLinkPresentation: {
    ({ id, className, children, noMargin, hasMouseHover, hasKeyboardFocus, secondary, htmlAttrs: htmlAttrsProp, ...otherProps }: INavigationLinkPresentationProps): React.JSX.Element;
    displayName: string;
};
