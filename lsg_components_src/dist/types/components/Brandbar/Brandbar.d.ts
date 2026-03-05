import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface IBrandbarProps extends IBasicProps {
    /** Corporate slogan, e.g. "The bank at your side". */
    slogan?: string;
    /** URL of the link (e.g. home page) that will be opened on logo click. */
    href?: string;
    /** Render an alternative action component, e.g. a React Router link. */
    actionAs?: any;
    /** Props for the alternative action component (e.g. a React Router link). */
    actionProps?: any;
    /** @deprecated 09.11.2023 - Use `logoLabel` instead. Alternative text for the logo. */
    logoAlt?: string;
    /** Label for the logo, rendered as `alt`- or `aria-label`-attribute. Use the default values for Commerzbank or
     * custom logos or assign your own.
     * If the logo is a link or a button, an additional action-label can be assigned using `logoHtmlAttrs`. */
    logoLabel?: string;
    /** Image source for a custom logo. */
    logoSrcCustom?: string;
    /** If set to `true` or if you do not provide a `logoHref` or other actions, the logo will be rendered as an image
     * without any interaction. */
    logoDisabled?: boolean;
    /** Additional (action-)HTML attributes can be added here, e.g. target, tabindex or a different aria-label for the
     * link or button element, e.g.: logoHtmlAttrs={{ "aria-label": "My custom action" }} */
    logoHtmlAttrs?: React.ButtonHTMLAttributes<HTMLButtonElement> | React.AnchorHTMLAttributes<HTMLAnchorElement> | Record<`data-${string}`, string | number | boolean>;
    /** Function to be called on onClick-event. Not called when the logo is disabled. */
    onLogoClick?: (e: React.MouseEvent<HTMLElement>, name: string) => void;
}
/** @deprecated 27.11.2024 - Use brandBar props directly from Footer instead. */
declare const Brandbar: {
    ({ logoAlt, logoLabel, ...props }: IBrandbarProps): React.JSX.Element;
    displayName: string;
};
export { Brandbar, IBrandbarProps };
