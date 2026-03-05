import type { IIcon } from "@lsg/icons";
import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
export interface IClickListItemBaseProps extends IBasicProps {
    /** First line text for your item. It has to be mandatory for screen readers. If a thumbnail icon is set, the
     *  'headline' prop also describes it. */
    headline: string;
    /** HTML tag rendered for the surrounding tag (in some cases further out) of your first line text.
     * Set to "strong" by default for the directly-surrounding text tag of ClickList.Multiactions.Item and of a
     *  ClickList with 'linkIcon' prop (overwritable by e.g. "p", "h5"). */
    headlineAs?: string;
    /** If set, a subline will be rendered */
    subline?: string;
    /** An alternative HTML tag for the subline */
    sublineAs?: string;
    /** This prop illustrates the current status with a coloured, small dot. The status value
     *  "inactive" will show a dot in the colour of the surrounding Theme, the value "success" will show a green dot,
     *  "warning" an orange dot, and "error" a red dot. */
    statusColor?: "inactive" | "success" | "warning" | "error";
    /** This prop sets the status tag (label), which will be read by screen readers */
    statusTag?: string;
    /** Thumbnail icon */
    thumbIcon?: IIcon;
    /** Style variant for the thumbnail icon. Icons can be styled as outline, featuring hollow designs that emphasize
     *  contours, or solid, which are filled in. */
    thumbIconVariant?: "outline" | "solid";
    /** You can set a title for your thumbnail icon with this prop. */
    thumbIconTitle?: string;
    /** Text that should be placed inside the circle */
    thumbText?: string;
    /** Source for the thumbnail image */
    thumbImgSrc?: string;
}
interface IClickListItemProps extends IClickListItemBaseProps {
    /** Icon */
    linkIcon?: IIcon;
    /** Sets an additional small icon as a status indicator. */
    statusIndicatorIcon?: IIcon;
    /** Will specify if the link label is shown. */
    showLinkLabel?: boolean;
    /** Icon text */
    linkLabel?: string;
    /** Is the item clickable by the user? This will also affect its appearance. */
    disabled?: boolean;
    /** onClick mouse event */
    onClick?: (e: React.MouseEvent<HTMLElement>, name: string) => void;
    /** If you insert an href prop, an `a` tag will be rendered */
    href?: string;
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    htmlAttrs?: React.ButtonHTMLAttributes<HTMLButtonElement> | React.AnchorHTMLAttributes<HTMLAnchorElement> | Record<`data-${string}`, string | number | boolean>;
    /** Display a badge component in the TwoLineItem by adding a badge text. */
    badgeText?: string;
    /** Display a badge component in the TwoLineItem by adding a badge icon. */
    badgeIcon?: IIcon;
    /** Badge icons can be styled as outline, featuring hollow designs that emphasize contours, or solid, which are
     *  filled in. */
    badgeIconVariant?: "solid" | "outline";
    /** Describe the Badge Content or add context to the badge message which will be read by screen readers */
    badgeScreenReaderLabel?: string;
    /**
     * Render an alternative action component, e.g. a React Router link instead of an <a> or <button> tag
     * Example: <ClickListItem actionAs={ReactRouterLink} actionProps={{to: "/mypage"}} ...
     */
    actionAs?: any;
    /** These are the props for the alternative action component (e.g. a React Router link) */
    actionProps?: any;
    /** @deprecated: Use badgeColor instead. Badge color  */
    badgeLook?: "primary" | "highlight" | "supplementary" | "error" | "success" | "alert";
    /** This prop sets the colour of the Badge. Please see our https://markenportal.commerzbank.com/styleguide/badge/index.html site for the
     *  generated colour effects.  */
    badgeColor?: "primary" | "highlight" | "supplementary" | "error" | "success" | "alert";
    /** Switch the item to loading mode. It will be disabled and a loading spinner will be shown. */
    loading?: boolean;
    /** This prop is used to provide an ARIA label for the Spinner component to inform screen reader users about the current status of processes.
     If not set, a fixed text ("Loading"/"Laden...") will be read by screen readers. Note that this text (also visible beneath the Spinner circle with reduced-motion browser settings)
     cannot be modified to avoid potential UX issues caused by too long text. */
    loadingAriaLabel?: string;
}
declare const ClickListItem: {
    ({ badgeColor, badgeLook, badgeIconVariant, showLinkLabel, linkIcon, headlineAs, ...props }: IClickListItemProps): React.JSX.Element;
    displayName: string;
};
export { ClickListItem, IClickListItemProps };
