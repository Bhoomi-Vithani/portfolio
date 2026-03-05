import type { IIcon } from "@lsg/icons";
import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
import type { INavigationItem } from "../../interfaces";
export interface IProfileWidgetProps extends IBasicProps {
    /** ProfileWidget is initially open */
    open?: boolean;
    /** Close button click event */
    onCloseClick?: (event?: MouseEvent | React.MouseEvent<HTMLElement, MouseEvent>) => void;
    /** Backdrop button click event */
    onBackdropClick?: (event?: MouseEvent) => void;
    /** Profile name */
    profileName?: string;
    /** Profile subline */
    profileSubline?: string;
    /** Profile Thumbnail image */
    profileImg?: any;
    /** Profile Thumbnail text */
    profileImgAltText?: any;
    /** Profile Thumbnail icon */
    profileIcon?: IIcon;
    /** Profile icon variant. One of: "outline" | "solid" */
    profileIconVariant?: "outline" | "solid";
    /** Profile switch link text */
    switchProfileLinkText?: string;
    /** Profile switch link icon */
    switchProfileLinkIcon?: IIcon;
    /** Profile switch link href */
    switchProfileLinkHref?: string;
    /** Profile switch link target (applied if href is set). Use HTML anchor-targets, e.g. _self, _blank, _parent or _top. */
    switchProfileLinkTarget?: string;
    /** Render an alternative action component, e.g. a React Router link */
    switchProfileLinkActionAs?: any;
    /** Alternative action component (e.g. a React-Router link) */
    switchProfileLinkActionProps?: any;
    /** Profile switch onclick event */
    onProfileSwitchClick?: (event?: MouseEvent | React.MouseEvent<HTMLElement, MouseEvent>) => void;
    /** Navigation tree */
    navigationTree?: INavigationItem[];
    /** Standard component to be rendered as a navigation link (e.g. a React-Router link).
     * If no actionProps are defined in the navigationTree item, a "normal" LSG action component (<a> or <button>
     * will be rendered. */
    navigationActionAs?: any;
    /** Logout button link text */
    logOutButtonText?: string;
    /** Logout button href */
    logOutButtonHref?: string;
    /** Logout button link target (applied if href is set). Use HTML anchor-targets, e.g. _self, _blank, _parent or _top. */
    logOutButtonTarget?: string;
    /** Render an alternative action component, (e.g. a React-Router link). */
    logOutButtonActionAs?: any;
    /** Alternative action component (e.g. a React-Router link). */
    logOutButtonActionProps?: any;
    /** Logout button onclick event */
    onLogOutButtonClick?: (event: React.MouseEvent<HTMLElement>, name: string) => void;
    /** Logout button is hidden */
    logOutButtonHidden?: boolean;
    /** Message text */
    messageText?: string;
    /** Container for additional IconLink (left) */
    linkSectionLeft?: any;
    /** Container for additional IconLink (right) */
    linkSectionRight?: any;
}
/**
 * @deprecated: 11.2023 - Will be removed in the next major release.
 * Have a look at the "Profile Widget Pattern" which uses native components like shown in the Markenportal UX Patterns
 * section: https://markenportal.commerzbank.com/styleguide/profile-widget-pattern/index.html
 */
export declare const ProfileWidget: React.FunctionComponent<IProfileWidgetProps>;
