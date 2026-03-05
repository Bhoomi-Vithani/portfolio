import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
type ILayoutContainerProps = IBasicProps & {
    /** Use this to set the CSS display property (e.g. for nested containers). Default: "flex" */
    display?: "flex" | "block";
    /** HTML tag for container. Default: "div" */
    as?: "div" | "aside" | "ul" | "ol" | "li";
    /** This defines the default behavior for how flex items are laid out along the cross axis on the current line. */
    alignItems?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
    /** This defines the alignment along the main axis. */
    justifyContent?: "flex-start" | "flex-end" | "center" | "space-between";
    /** Children will be stacked vertical for the defined viewport and below  */
    stack?: "xs" | "sm" | "md" | "lg" | "xl";
    /** Defines the wrap behaviour if children don't fit a  single row */
    wrap?: "nowrap" | "wrap" | "wrap-reverse";
    /** Reverse element flow of children depending on the viewport */
    flowReverse?: "xs" | "sm" | "md" | "lg" | "xl";
    /** CSS property gap. Default: "none".
     xxsmall = 4px / 4px, xsmall = 8px / 8px, small = 12px / 16px , medium = 16px / 24px, large = 24px / 32px */
    gap?: "none" | "xxsmall" | "xsmall" | "small" | "medium" | "large";
    /** CSS property gap. Default: "none". If rowGap is not set, gap will be used for both row and column gaps.
     xxsmall = 4px / 4px, xsmall = 8px / 8px, small = 12px / 16px , medium = 16px / 24px, large = 24px / 32px */
    rowGap?: "none" | "xxsmall" | "xsmall" | "small" | "medium" | "large";
    /** Spacing below component
     large (default) = 24px / 32px, medium = 16px / 24px */
    componentSpacing?: "small" | "medium" | "large";
    /** This defines the ability for a flex item to grow if necessary. CSS property flex-grow */
    grow?: number;
    /** This defines the ability for a flex item to shrink if necessary. Values from 0-5 can be used */
    shrink?: number;
    /** String accepted as a value. It can be a length (e.g. 20%, 5rem, etc.) or a keyword.    */
    basis?: string;
};
declare const Layout: React.FC<ILayoutContainerProps>;
export { Layout, ILayoutContainerProps };
