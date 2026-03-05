import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface ILayoutSharedProps extends IBasicPropsInternal {
    as?: "div" | "aside" | "ul" | "ol" | "li";
    display?: "flex" | "block";
    justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
    alignItems?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
    gap?: "none" | "xxsmall" | "xsmall" | "small" | "medium" | "large";
    rowGap?: "none" | "xxsmall" | "xsmall" | "small" | "medium" | "large";
    stack?: "xs" | "sm" | "md" | "lg" | "xl";
    flowReverse?: "xs" | "sm" | "md" | "lg" | "xl";
    wrap?: "nowrap" | "wrap" | "wrap-reverse";
    componentSpacing?: "small" | "medium" | "large";
    /** Children elements */
    /** Values from 0-5 can be used */
    grow?: number;
    /** Values from 0-5 can be used */
    shrink?: number;
    /** String accepted as a value. It can be a length (e.g. 20%, 5rem, etc.) or a keyword.    */
    basis?: string;
}
interface ILayoutPresentationOnlyProps {
}
interface ILayoutPresentationProps extends ILayoutSharedProps, ILayoutPresentationOnlyProps {
}
export declare const LayoutPresentation: {
    ({ id, display, children, className, noMargin, as, justifyContent, gap, rowGap, wrap, grow, shrink, basis, alignItems, stack, componentSpacing, flowReverse, }: ILayoutPresentationProps): React.JSX.Element;
    displayName: string;
};
export {};
