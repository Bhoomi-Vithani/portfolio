import React, { Ref } from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
/**  Interface is used about multiple components */
export interface IActionBaseProps extends IBasicPropsInternal {
    nonInteractive?: boolean;
    a11yMeaningfulLabel?: boolean;
    onMouseHoverChange?: (newHover: boolean) => void;
    onKeyboardFocusChange?: (newFocus: boolean) => void;
    onMouseDown?: (ev: React.MouseEvent<HTMLElement>) => void;
    onMouseUp?: (ev: React.MouseEvent<HTMLElement>) => void;
    onMouseEnter?: (ev: React.MouseEvent<HTMLElement>) => void;
    onMouseLeave?: (ev: React.MouseEvent<HTMLElement>) => void;
    onKeyDown?: (ev: React.KeyboardEvent<HTMLElement>) => void;
    onKeyUp?: (ev: React.KeyboardEvent<HTMLElement>) => void;
    onTouchStart?: (ev: React.TouchEvent<HTMLElement>) => void;
    onTouchEnd?: (ev: React.TouchEvent<HTMLElement>) => void;
    hasTabIndex?: boolean;
    disabled?: boolean;
    loading?: boolean;
    loadingAriaLabel?: string;
    expanded?: boolean;
    htmlAttrs?: React.AnchorHTMLAttributes<HTMLAnchorElement> | React.ButtonHTMLAttributes<HTMLButtonElement> | React.InputHTMLAttributes<HTMLInputElement> | Record<`data-${string}`, string | number | boolean>;
    name?: string;
    href?: string;
    onClick?: (event: React.MouseEvent<HTMLElement>, name: string) => void;
    clicked?: boolean;
    hasMouseHover?: boolean;
    hasKeyboardFocus?: boolean;
    actionRef?: Ref<HTMLElement>;
    containerRef?: Ref<HTMLElement>;
    actionAs?: any;
    actionProps?: any;
    selected?: boolean;
    role?: React.AriaRole;
}
export interface IActionPresentationProps extends Omit<IActionBaseProps, "hasMouseHover"> {
    isDisplayInline?: boolean;
    /** host component needs to be set to "position: relative" to make the feature work properly */
    expandToOverlay?: boolean;
    userSelect?: boolean;
    fullWidth?: boolean;
    initialHeight?: boolean;
}
export declare const defaultProps: Partial<IActionPresentationProps>;
export declare const ActionPresentation: React.ForwardRefExoticComponent<IActionPresentationProps & React.RefAttributes<HTMLElement>>;
