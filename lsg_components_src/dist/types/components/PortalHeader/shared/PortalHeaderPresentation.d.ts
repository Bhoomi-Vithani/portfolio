import React, { ReactNode } from "react";
import { INavigationItem } from "../../../interfaces/NavigationTree";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface IPortalHeaderPresentationProps extends IBasicPropsInternal {
    iconLinksInteraction?: ReactNode;
    iconLinksInteractionAriaLabel?: string;
    iconLinksQuickLink?: ReactNode;
    iconLinksMobileHeader?: ReactNode;
    iconLinksMobileSidebar?: ReactNode;
    logoLabel?: string;
    logoSrcMobile?: string;
    logoSrcDesktop?: string;
    logoDisabled?: boolean;
    logoHref?: string;
    logoName?: string;
    logoHtmlAttrs?: React.ButtonHTMLAttributes<HTMLButtonElement> | React.AnchorHTMLAttributes<HTMLAnchorElement> | Record<`data-${string}`, string | number | boolean>;
    logoActionAs?: any;
    logoActionProps?: any;
    onLogoClick?: (e: React.MouseEvent<HTMLElement>, name: string) => void;
    onMobileMenuClick?: (e: React.MouseEvent<HTMLElement>, name: string) => void;
    segmentLabel?: string;
    navigationTree: INavigationItem[];
    navigationAriaLabel?: string;
    navigationActionAs?: any;
    segmentNavigationTree?: INavigationItem[];
    segmentNavigationAriaLabel?: string;
    value?: string;
    segmentValue?: string;
    name?: string;
    onChange?: (value: string, name: string, event: React.SyntheticEvent<HTMLElement>) => void;
    onSegmentChange?: (value: string, name: string, event: React.SyntheticEvent<HTMLElement>) => void;
    isSticky?: boolean;
    setScrollPosition?: (scrollPosition: number) => void;
    menuFlyoutAriaLabel?: string;
}
export declare const PortalHeaderPresentation: {
    ({ id, className, noMargin, isStencilHost, navigationTree: navigationTreeProp, navigationAriaLabel, navigationActionAs, segmentNavigationTree, segmentNavigationAriaLabel, value, onChange, segmentValue, onSegmentChange, name, iconLinksInteraction, iconLinksInteractionAriaLabel, iconLinksQuickLink, iconLinksMobileHeader, iconLinksMobileSidebar, isSticky, segmentLabel, logoSrcMobile, logoSrcDesktop, logoHref, logoName, logoLabel, logoHtmlAttrs, logoDisabled, logoActionAs, logoActionProps, onLogoClick, onMobileMenuClick, menuFlyoutAriaLabel, }: IPortalHeaderPresentationProps): React.JSX.Element;
    displayName: string;
};
