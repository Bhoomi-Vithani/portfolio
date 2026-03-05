import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
import { INavigationTree } from "../../interfaces";
interface ISimpleFooterProps extends IBasicProps {
    /** Content of the contact area. */
    contactModule?: any;
    /** Tree of the footer navigation. */
    navigationTree: INavigationTree[];
    /** @deprecated 30.01.24: Use navigationAriaLabel instead. */
    navigationTreeAriaLabel?: string;
    /** Provide a unique ARIA-label for the navigation `<nav>` element (required).
     * This enables screen reader users to distinguish the navigation areas. */
    navigationAriaLabel: string;
    /** Standard component to be rendered as a navigation link; e.g. you can add a ReactRouter link here
     * If no actionProps are defined in the navigationTree item, a "normal" LSG Action component (<a> or <button>
     * will be rendered.
     */
    navigationActionAs?: any;
    /** Brand claim */
    claim?: string;
    /** @deprecated 09.11.2023 - Use `logoLabel` instead. Alternative text for the logo. */
    logoAlt?: string;
    /** Label for the logo, rendered as `alt`- or `aria-label`-attribute. Use the default values for Commerzbank or
     * custom logos or assign your own.
     * If the logo is a link or a button, an additional action-label can be assigned using `logoHtmlAttrs`. */
    logoLabel?: string;
    /** Image source for a custom logo. */
    logoSrc?: string;
    /** If set to `true` or if you do not provide a `logoHref` or other actions the logo will be rendered as an image
     * without any interaction. */
    logoDisabled?: boolean;
    /** URL of the link (e.g. home page) that will be opened on logo click. */
    logoHref?: string;
    /** Additional (action-)HTML attributes can be added here, e.g. target, tabindex or a different aria-label for the
     * link or button element, e.g.: logoHtmlAttrs={{ "aria-label": "My custom action" }} */
    logoHtmlAttrs?: React.ButtonHTMLAttributes<HTMLButtonElement> | React.AnchorHTMLAttributes<HTMLAnchorElement> | Record<`data-${string}`, string | number | boolean>;
    /** Render an alternative action component, e.g. a React Router link. */
    logoActionAs?: any;
    /** Props for the alternative action component (e.g. a React Router link). */
    logoActionProps?: any;
    /** Function to be called on onClick-event. Not called when the logo is disabled. */
    onLogoClick?: (e: React.MouseEvent<HTMLElement>, name: string) => void;
}
declare const SimpleFooter: {
    ({ logoAlt, logoLabel, navigationAriaLabel, navigationTreeAriaLabel, ...props }: ISimpleFooterProps): React.JSX.Element;
    displayName: string;
};
export { SimpleFooter };
export type { ISimpleFooterProps };
