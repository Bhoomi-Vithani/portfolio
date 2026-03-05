import { ReactNode } from "react";
import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
import type { INavigationItem } from "../../interfaces";
type IPortalHeaderProps = IBasicProps & {
    /** IconLink(s) at the bottom right of the desktop menu  */
    iconLinksQuickLink?: ReactNode;
    /** IconLink(s) for the mobile header */
    iconLinksMobileHeader?: ReactNode;
    /** IconLink(s) for the mobile sidebar */
    iconLinksMobileSidebar?: ReactNode;
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
    /** Name for navigation element. If logoName is equal to the current navigation value (currently opened page),
     * htmlAttrs are set to "aria-current":"page" */
    logoName?: string;
    /** Additional (action-)HTML attributes can be added here, e.g. target, tabindex or a different aria-label for the
     * link or button element, e.g.: logoHtmlAttrs={{ "aria-label": "My custom action" }} */
    logoHtmlAttrs?: React.ButtonHTMLAttributes<HTMLButtonElement> | React.AnchorHTMLAttributes<HTMLAnchorElement> | Record<`data-${string}`, string | number | boolean>;
    /** Render an alternative action component, e.g. a React Router link. */
    logoActionAs?: any;
    /** Props for the alternative action component (e.g. a React Router link). */
    logoActionProps?: any;
    /** Function to be called on onClick-event. Not called when the logo is disabled. */
    onLogoClick?: (e: React.MouseEvent<HTMLElement>, name: string) => void;
    /** click event callback for the mobile menu button (hamburger menu) */
    onMobileMenuClick?: (e: React.MouseEvent<HTMLElement>, name: string) => void;
    /** Text/claim on the upper left. */
    segmentLabel?: string;
    /**
     * An array of objects like:
     * {
     *   label: string,
     *   name?: string;
     *   href?: string,
     *   children?: INavigationItem[] (an array of objects like this one)
     * }
     * Also, please have a look at Markenportal/Developer Guidelines
     */
    navigationTree: INavigationItem[];
    /** @deprecated 30.01.24, use navigationAriaLabel instead. */
    navigationTreeAriaLabel?: string;
    /** Provide a unique ARIA-label for the main navigation `<nav>` element (required).
     * This enables screen reader users to distinguish the navigation areas. */
    navigationAriaLabel: string;
    /** ARIA-Label for the flyout dialog for screen reader users (required). */
    menuFlyoutAriaLabel: string;
    /** Standard component to be rendered as a navigation link; e.g. you can add a ReactRouter link here
     * If no actionProps are defined in the navigationTree item, a "normal" LSG Action component (<a> or <button>
     * will be rendered.
     */
    navigationActionAs?: any;
    /** @deprecated 21.02.24: Use segmentNavigationAriaLabel instead. */
    segmentNavigationTreeAriaLabel?: string;
    /** Name of the navigation */
    name?: string;
    /** Current selected navigation item (which can also be a deep menu item) */
    value?: string;
    /** Current selected navigation item in the segment menu (top navigation) */
    segmentValue?: string;
    /** The onChange handler returns the "name" of the navigation item as value */
    onChange?: (value: string, name: string, event: React.SyntheticEvent<HTMLElement>) => void;
    /** The onSegmentChange handler returns the "name" of the navigation item as value */
    onSegmentChange?: (value: string, name: string, event: React.SyntheticEvent<HTMLElement>) => void;
    /** Decides if the navigation should be sticky */
    isSticky?: boolean;
} & ({
    segmentNavigationTree?: undefined;
    segmentNavigationAriaLabel?: undefined;
} | {
    /**
     * This has to be an array of objects looking like:
     * {
     *   label: string,
     *   name?: string;
     *   href?: string,
     *   children?: INavigationItem[] (an array of more objects looking like this one)
     * }
     */
    segmentNavigationTree: INavigationItem[];
    /** Provide a unique ARIA-label for the segment navigation `<nav>` element (mandatory if you set segmentNavigationTree).
     * This enables screen reader users to distinguish the navigation areas. */
    segmentNavigationAriaLabel: string;
}) & ({
    iconLinksInteraction?: undefined;
} | {
    /** IconLink(s) at the top right of the Desktop menu */
    iconLinksInteraction: ReactNode;
    /** Provide a unique ARIA-label for the icon links navigation `<nav>` element (mandatory if you set iconLinksInteraction).
     * This enables screen reader users to distinguish the navigation areas. */
    iconLinksInteractionAriaLabel: string;
});
declare const PortalHeader: {
    ({ logoLabel, logoAlt, navigationAriaLabel, navigationTreeAriaLabel, segmentNavigationAriaLabel, segmentNavigationTreeAriaLabel, ...restProps }: IPortalHeaderProps): React.JSX.Element;
    displayName: string;
};
export { PortalHeader };
export type { IPortalHeaderProps };
