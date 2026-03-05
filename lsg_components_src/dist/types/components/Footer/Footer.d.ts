import * as React from "react";
import { ReactNode } from "react";
import { IBasicProps } from "../../base/IBasicProps";
type IFooterProps = IBasicProps & {
    /** Content of the contact area. */
    contactArea?: React.ReactNode;
    /**
     * Set previousTheme to Theme.Looks.Dark if the footer is at the end of a dark-themed section. The area at the top
     * of the <ContactModule> will then a get dark-themed background.
     */
    previousTheme?: "light" | "dark";
    /** Brand bar: Corporate slogan, e.g. "The bank at your side". */
    brandBarSlogan?: string;
    /**  Brand bar: URL of the link (e.g. home page) that will be opened on logo click. */
    brandBarHref?: string;
    /** Brand bar: Render an alternative action component for the logo, e.g. a React Router link. */
    brandBarActionAs?: any;
    /** Brand bar: Props for the alternative logo action component (e.g. a React Router link). */
    brandBarActionProps?: any;
    /** Brand bar: Label for the logo, rendered as `alt`- or `aria-label`-attribute. Use the default values for
     * Commerzbank or custom logos or assign your own.
     * If the logo is a link or a button, an additional action-label can be assigned using `brandBarLogoHtmlAttrs`. */
    brandBarLogoLabel?: string;
    /** Brand bar: Image source for a custom logo. */
    brandBarLogoSrcCustom?: string;
    /** Brand bar: If set to `true` or if you do not provide a `brandBarHref` or other actions, the logo will be
     * rendered as an image without any interaction. */
    brandBarLogoDisabled?: boolean;
    /** Brand bar: Additional (action-)HTML attributes can be added here, e.g. target, tabindex or a different aria-
     * label for the logo's link or button element, e.g.: brandBarLogoHtmlAttrs={{ "aria-label": "My custom action" }} */
    brandBarLogoHtmlAttrs?: React.ButtonHTMLAttributes<HTMLButtonElement> | React.AnchorHTMLAttributes<HTMLAnchorElement> | Record<`data-${string}`, string | number | boolean>;
    /** Brand bar: Function to be called on onClick-event. Not called when the logo is disabled. */
    brandBarOnLogoClick?: (e: React.MouseEvent<HTMLElement>, name: string) => void;
    /**
     * Meta bar: Standard component to be rendered as a navigation link; e.g. you can add a ReactRouter link here.
     * If no actionProps are defined in the navigationTree item, a "normal" LSG Action component (<a> or <button>
     * will be rendered.
     */
    metaBarNavigationActionAs?: any;
    /** Meta bar: Tree of the navigation. */
    metaBarNavigationTree?: any[];
    /** Meta bar: Provide a unique ARIA-label for the social links navigation `<nav>` element (required).
     * This enables screen reader users to distinguish the navigation areas. */
    metaBarNavigationAriaLabel?: string;
    /** Meta bar: Centers the meta bar for the ProcessPage layout. */
    metaBarHorizontallyCentered?: boolean;
} & ({
    metaBarSocialLinks?: undefined;
} | {
    /** Meta bar: Content of the social links area. */
    metaBarSocialLinks: ReactNode;
    /** Meta bar: Provide a unique ARIA-label for the social links navigation `<nav>` element (required if you set
     *  socialLinks). This enables screen reader users to distinguish the navigation areas. */
    metaBarSocialLinksAriaLabel: string;
});
declare const Footer: React.FunctionComponent<IFooterProps>;
export { Footer, IFooterProps };
