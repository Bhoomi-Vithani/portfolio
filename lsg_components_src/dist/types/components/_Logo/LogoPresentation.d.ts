import React from "react";
import { IBasicPropsInternal } from "../../utils/IBasicPropsInternal";
export interface ILogoPresentationProps extends IBasicPropsInternal {
    /**
     * Label of the logo
     *
     * The default label for Commerzbank logo is "Commerzbank Logo" and
     * the default label for custom logo is "Company Logo" (en) or "Unternehmenslogo" (de)
     * If the logoLabel is set to "&#9141;" the image will be hidden for assistive technologies (rare purely decorative cases).
     *
     * In case of internal Coba-logos, the SVG-title will set the `aria-labelledby`-attribute of the SVG element.
     * If the logo is a custom image, the `alt`-attribute is used (alt is specific to `<img>` elements).
     * If the logo shall be active, `aria-label` is also used on the `a` or `button element`. (aria-label is generic and
     * can be applied to other elements than `img`.)
     */
    logoLabel?: string;
    /** Logo and text monochrome (only available for default Commerzbank logo) */
    isMonochrome?: boolean;
    /** Logo variant (only available for default Commerzbank logo) - Use one of "vertical", "horizontal" or "mobile" (default). */
    variant?: "vertical" | "horizontal" | "mobile";
    /** Resize logo to fit its parent container */
    fitToBox?: boolean;
    /** Image source for a custom logo. */
    srcCustom?: string;
    /** ActionPresentation props. */
    /** If set to true, the logo is rendered as an <img> element without a surrounding action element (e.g. a link or a button). */
    disabled?: boolean;
    /** URL of the link (e.g. home page) that will be opened on logo click. An 'a'-tag will be rendered. */
    href?: string;
    /**
     * Additional (action-)HTML attributes can be added here, e.g. target, tabindex or a different aria-label for the
     * link or button element (these attributes are routed to the surrounding action not to the image). */
    htmlAttrs?: React.ButtonHTMLAttributes<HTMLButtonElement> | React.AnchorHTMLAttributes<HTMLAnchorElement> | Record<`data-${string}`, string | number | boolean>;
    /**
     * Render an alternative action component, e.g. a React Router link.
     * Example: <Button, Teaser, etc.> actionAs={ReactRouterLink} actionProps={{to: "/myPage"}} ...
     */
    actionAs?: any;
    /** Props for the alternative action component (e.g. a React Router link). */
    actionProps?: any;
    /** Function to be called on onClick-event. Not called when the logo is disabled. */
    onClick?: (e: React.MouseEvent<HTMLElement>, name: string) => void;
    /** Name for navigation element. If `logoName` is equal to the current navigation value (currently opened page),
     * `htmlAttrs` are set to "aria-current":"page". (This is used and set in SimpleHeaderPresentation or
     * PortalHeaderPresentation) */
    logoName?: string;
    /** Internal props. */
    scrollPosition?: number;
}
export declare const LogoPresentation: {
    (props: ILogoPresentationProps): React.JSX.Element;
    displayName: string;
};
