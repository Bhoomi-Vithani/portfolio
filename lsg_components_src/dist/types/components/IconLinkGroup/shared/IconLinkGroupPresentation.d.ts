import React from "react";
import type { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface IIconLinkGroupPresentationProps extends IBasicPropsInternal {
    direction?: "vertical" | "horizontal" | "flip-xs" | "flip-sm" | "flip-md" | "flip-lg" | "collapse-xs" | "collapse-sm" | "collapse-md" | "collapse-lg" | "table" | "textfield" | "hero-search" | "header-menu" | "pagination" | "vertical-left";
    iconOnly?: boolean;
    viewport?: "xs" | "sm" | "md" | "lg" | "xl";
    maxWidth?: string;
    centeredLayout?: boolean;
    as?: keyof JSX.IntrinsicElements;
}
export declare const defaultProps: Partial<IIconLinkGroupPresentationProps>;
export declare const IconLinkGroupPresentation: {
    ({ direction, id, className, noMargin, children, viewport, maxWidth, centeredLayout, horizontalAlignment, as, }: IIconLinkGroupPresentationProps): React.JSX.Element;
    displayName: string;
};
