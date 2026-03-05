import * as React from "react";
import { ReactNode } from "react";
import { IBasicProps } from "../../base/IBasicProps";
import type { INavigationItem } from "../../interfaces";
interface ISideNavigationPageProps extends IBasicProps {
    /**
     * This has to be an array of objects looking like:
     * {
     *   expanded?: boolean, (this sets the children of this item to be expanded/collapsed)
     *   active?: boolean, (this sets this item active / sets the indicator on this item)
     *   indicator?: boolean, (this enables an indicator for the children of this item)
     *   id?: string,
     *   label: string,
     *   icon?: string,
     *   href?: string,
     *   onClick?: (ev: React.MouseEvent<any>) => void,
     *   children?: INavigationItem[] (an array of more objects looking like this one)
     * }
     */
    navigationTree?: INavigationItem[];
    /** Provide a label for the navigation `<nav>` element. */
    navigationAriaLabel: string;
    /**
     * Standard component to be rendered as a navigation link; e.g. you can add a ReactRouter link here.
     * If no actionProps are defined in the navigationTree item, a "normal" LSG Action component (<a> or <button>
     * will be rendered.
     */
    navigationActionAs?: any;
    /** @deprecated 09.11.2023 - Use `logoLabel` instead. Alternative text for the logo. */
    logoAlt?: string;
    /** The visible text at the top left of the side navigation directly to the right of the logo. */
    logoLabel?: string;
    /** The `aria-label` for the logo and the logo-link. Use the default value for the Commerzbank logo or assign your
     * own. The `aria-label` of the link can be overwritten using `logoHtmlAttrs`. */
    logoAriaLabel?: string;
    /** URL of the link (e.g. home page) that will be opened on logo click. */
    logoHref?: string;
    /** Render an alternative action component, e.g. a React Router link. */
    logoActionAs?: any;
    /** Props for the alternative action component (e.g. a React Router link). */
    logoActionProps?: any;
    /** If set to `true` or if you do not provide a `logoHref` or other actions, the logo will be rendered as an image
     * without any interaction. */
    logoDisabled?: boolean;
    /** Additional HTML attributes can be added here, e.g. target, tabindex or a different aria-label for the
     * link element, e.g.: logoHtmlAttrs={{ "aria-label": "My custom link label" }} */
    logoHtmlAttrs?: React.ButtonHTMLAttributes<HTMLButtonElement> | React.AnchorHTMLAttributes<HTMLAnchorElement> | Record<`data-${string}`, string | number | boolean>;
    /** Function to be called on onClick-event. Not called when the logo is disabled. */
    onLogoClick?: (e: React.MouseEvent<HTMLElement>, name: string) => void;
    /** Disables the search functionality * */
    searchDisabled?: boolean;
    /** Removes the search completely * */
    searchInvisible?: boolean;
    /** Placeholder for search input */
    searchPlaceholder?: string;
    /** Is called on every text change and passes the value and the name of the input. */
    onSearchChange?: (value: string, name: string, event: React.SyntheticEvent<HTMLElement>) => void;
    /** Sets the value of the search input. */
    searchValue?: string;
    /** name prop that gets returned with the onChange prop */
    searchName?: string;
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    searchFormHtmlAttrs?: React.FormHTMLAttributes<HTMLFormElement> | Record<`data-${string}`, string | number | boolean>;
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    searchHtmlAttrs?: React.InputHTMLAttributes<HTMLInputElement> | Record<`data-${string}`, string | number | boolean>;
    /** React elements that should be placed at the bottom.  */
    iconLinksBottom?: ReactNode[];
    /** determines the size of the menu items */
    indicatorAtLevel?: "topic" | "group" | "page";
    /** Sets the 'name'-attribute of the input. */
    name?: string;
    /**
     * @param {string} value (this will give you the targetValue of the clicked element, or an empty string if no element shall be active - e.g. on Drawer close)
     * @param {string} name
     * @param {React.SyntheticEvent<HTMLElement>} event
     *
     * This will be called on click of any item within the nav
     */
    onChange?: (activeItem: string, name: string, ev: React.SyntheticEvent<HTMLElement>) => void;
    /** Pass the targetValue of the selected item */
    value?: string;
    /** whether to open all menu items. Might be necessary when filtering with the search chip. */
    expandAll?: boolean;
}
declare const SideNavigationPage: ({ logoAlt, logoAriaLabel, ...props }: ISideNavigationPageProps) => React.JSX.Element;
export { SideNavigationPage };
export type { ISideNavigationPageProps };
