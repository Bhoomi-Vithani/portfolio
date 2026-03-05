import * as React from "react";
import { ReactNode } from "react";
import { IBasicProps } from "../../base/IBasicProps";
import { INavigationTree } from "../../interfaces";
type IFooterMetabarProps = IBasicProps & {
    /**
     * Standard component to be rendered as a navigation link; e.g. you can add a ReactRouter link here.
     * If no actionProps are defined in the navigationTree item, a "normal" LSG Action component (<a> or <button>
     * will be rendered.
     */
    navigationActionAs?: any;
    /** Tree of the navigation. */
    navigationTree?: INavigationTree[];
    /** Provide a unique ARIA-label for the social links navigation `<nav>` element (required).
     * This enables screen reader users to distinguish the navigation areas. */
    navigationAriaLabel?: string;
    /** Centers the Metabar for the ProcessPage Layout */
    horizontalAlignment?: "center" | undefined;
} & ({
    socialLinks?: undefined;
    socialLinksAriaLabel?: string;
} | {
    /** Content of the social links area. */
    socialLinks: ReactNode;
    /** Provide a unique ARIA-label for the social links navigation `<nav>` element (required if you set socialLinks).
     * This enables screen reader users to distinguish the navigation areas. */
    socialLinksAriaLabel: string;
});
declare const FooterMetabar: React.FunctionComponent<IFooterMetabarProps>;
export { FooterMetabar, IFooterMetabarProps };
