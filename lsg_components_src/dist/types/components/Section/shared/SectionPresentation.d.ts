import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface ISectionProps extends IBasicPropsInternal {
    separator?: boolean;
    spacing?: "standard" | "large" | "marketing" | "technical" | "doublesubsection" | "no-margin" | "side-navigation-page";
    htmlAttrs?: React.HTMLAttributes<HTMLElement> | Record<`data-${string}`, string | number | boolean>;
    as?: "section" | "article" | "main" | "div";
    contentWidth?: 12 | 10 | 8 | 6 | "full-width";
}
export declare const SectionPresentation: {
    ({ children, noMargin, className, spacing, id, separator, contentWidth, as, htmlAttrs, }: ISectionProps): React.JSX.Element;
    displayName: string;
};
