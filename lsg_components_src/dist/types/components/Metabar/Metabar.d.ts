import * as React from "react";
import { ReactNode } from "react";
import { IBasicProps } from "../../base/IBasicProps";
type IMetabarProps = IBasicProps & {
    /**
     * Standard component to be rendered as a navigation link; e.g. you can add a ReactRouter link here.
     * If no actionProps are defined in the navigationTree item, a "normal" LSG Action component (<a> or <button>
     * will be rendered.
     */
    navigationActionAs?: any;
    /** Tree of the navigation. */
    navigationTree: any[];
    /** @deprecated 21.02.24: Use navigationAriaLabel instead. */
    navigationTreeAriaLabel?: string;
    /** Provide a unique ARIA-label for the social links navigation `<nav>` element (required).
     * This enables screen reader users to distinguish the navigation areas. */
    navigationAriaLabel: string;
    /** Centers the Metabar for the ProcessPage Layout */
    horizontallyCentered?: boolean;
} & ({
    socialLinks?: undefined;
} | {
    /** Content of the social links area. */
    socialLinks: ReactNode;
    /** Provide a unique ARIA-label for the social links navigation `<nav>` element (required if you set socialLinks).
     * This enables screen reader users to distinguish the navigation areas. */
    socialLinksAriaLabel: string;
});
/** @deprecated 19.2.2025 - Use metaBar props directly from Footer instead. For the ProcessPage, use the
 *  FooterMetabar component instead.   */
declare const Metabar: {
    ({ navigationAriaLabel, horizontallyCentered, navigationTreeAriaLabel, ...props }: IMetabarProps): React.JSX.Element;
    displayName: string;
};
export { Metabar };
export type { IMetabarProps };
