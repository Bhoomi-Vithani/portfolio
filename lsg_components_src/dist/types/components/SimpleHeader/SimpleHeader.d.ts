import * as React from "react";
import { ReactNode } from "react";
import { IBasicProps } from "../../base/IBasicProps";
import type { INavigationItem } from "../../interfaces";
interface ISimpleHeaderProps extends Omit<IBasicProps, "children"> {
    /**
     * This has to be an array of objects looking like:
     * {
     *   label: string,
     *   name?: string;
     *   href?: string,
     *   children?: INavigationItem[] (an array of more objects looking like this one)
     * }
     */
    navigationTree?: INavigationItem[];
    /** @deprecated 30.01.24 - use navigationAriaLabel instead. */
    navigationTreeAriaLabel?: string;
    /** Provide a unique ARIA-label for the navigation `<nav>` element (required).
     * This enables screen-reader users to distinguish the navigation areas. */
    navigationAriaLabel: string;
    /** ARIA-label for the flyout dialog for screen-reader users (required). */
    menuFlyoutAriaLabel: string;
    /** Standard component to be rendered as a navigation link; e.g. you can add a ReactRouter link here
     * If no actionProps are defined in the navigationTree item, a "normal" LSG Action component (<a> or <button>
     * will be rendered. */
    navigationActionAs?: any;
    /** Menu label */
    segmentLabel?: string;
    /** Additional IconLink(s) */
    iconLinksInteraction?: ReactNode;
    /** @deprecated 09.11.2023 - Use `logoLabel` instead. Alternative text for the logo. */
    logoAlt?: string;
    /** Label for the logo, rendered as `alt`- or `aria-label`-attribute. Use the default values for Commerzbank or
     * custom logos or assign your own.
     * If the logo is a link or a button, an additional action-label can be assigned using `logoHtmlAttrs`. */
    logoLabel?: string;
    /** Image source for a custom logo on mobile viewports. */
    logoSrcMobile?: string;
    /** Image source for a custom logo on desktop viewports. */
    logoSrcDesktop?: string;
    /** If set to `true` or if you do not provide a `logoHref` or other actions, the logo will be rendered as an image
     * without any interaction. */
    logoDisabled?: boolean;
    /** URL of the link (e.g. home page) that will be opened on logo click. */
    logoHref?: string;
    /** Additional HTML attributes can be added here, e.g. target, tabindex or a different aria-label for the
     * link element, e.g.: logoHtmlAttrs={{ "aria-label": "My custom link label" }} */
    logoHtmlAttrs?: React.ButtonHTMLAttributes<HTMLButtonElement> | React.AnchorHTMLAttributes<HTMLAnchorElement> | Record<`data-${string}`, string | number | boolean>;
    /** Name for navigation element. If `logoName` is equal to the current navigation value (currently opened page),
     * `htmlAttrs` are set to "aria-current":"page" */
    logoName?: string;
    /** Function to be called on onClick-event. Not called when the logo is disabled. */
    onLogoClick?: (e: React.MouseEvent<HTMLElement>, name: string) => void;
    /** Current selected navigation item */
    value?: string;
    /** Name of the navigation component */
    name?: string;
    /** The onChange handler returns the "name" of the selected navigationTree item as value */
    onChange?: (value: string, name: string, event: React.SyntheticEvent<HTMLElement>) => void;
    /** Decides if the navigation should be sticky */
    isSticky?: boolean;
}
declare const SimpleHeader: {
    ({ logoLabel, logoAlt, navigationTreeAriaLabel, navigationAriaLabel, ...props }: ISimpleHeaderProps): React.JSX.Element;
    displayName: string;
};
export { SimpleHeader, ISimpleHeaderProps };
