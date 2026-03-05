import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface IBadgePresentationProps extends IBasicPropsInternal {
    color?: "primary" | "highlight" | "supplementary" | "optional" | "inactive" | "error" | "success" | "alert" | "secondary-1" | "secondary-2" | "secondary-3" | "secondary-4" | "secondary-5" | "secondary-6";
    size?: "default" | "large" | "icon-large" | "dot";
    inline?: boolean;
    margin?: "left" | "right" | "both";
    htmlAttrs?: React.HTMLAttributes<HTMLElement> | Record<`data-${string}`, string | number | boolean>;
}
export declare const BadgePresentation: ({ id: idProp, className, children, color: colorInternal, size: sizeInternal, inline, margin, htmlAttrs, }: IBadgePresentationProps) => React.JSX.Element;
