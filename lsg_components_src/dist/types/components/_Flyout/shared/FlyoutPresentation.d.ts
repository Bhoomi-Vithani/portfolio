import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface IFlyoutPresentationProps extends IBasicPropsInternal {
    onKeyDown?: (ev: React.KeyboardEvent<HTMLElement>) => void;
    toggleElement: HTMLElement;
    toggleContainerElement?: HTMLElement;
    isToggleElmWidth?: boolean;
    hasTabIndex?: boolean;
    stretchBreakpointBu?: number;
    withGap?: boolean;
    innerSpacing?: "small" | "medium" | "large" | "none";
    preferOpenToLeft?: boolean;
    renderCounter?: number;
    forceRender?: (newRender: number) => void;
    open?: boolean;
    onClose?: (ev: any) => void;
    as?: "ul" | "div";
    htmlAttrs?: React.HTMLAttributes<HTMLElement> | Record<`data-${string}`, string | number | boolean>;
    hostRef?: any;
    noAutoFocus?: boolean;
    isDrawerOnMobile?: boolean;
    ariaLabel?: string;
    ariaLabelledBy?: string;
    minWidth?: number;
    maxWidth?: number;
    maxHeight?: number;
    width?: "content" | "toggle" | "container";
}
export declare const FlyoutPresentation: React.ForwardRefExoticComponent<IFlyoutPresentationProps & React.RefAttributes<HTMLDivElement>>;
