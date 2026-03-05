import React, { ReactNode } from "react";
import { INavigationItem } from "../../../interfaces/NavigationTree";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface ISimpleHeaderSharedProps extends IBasicPropsInternal {
    iconLinksInteraction?: ReactNode;
    logoLabel?: string;
    logoSrcMobile?: string;
    logoSrcDesktop?: string;
    logoDisabled?: boolean;
    logoHref?: string;
    logoHtmlAttrs?: React.ButtonHTMLAttributes<HTMLButtonElement> | React.AnchorHTMLAttributes<HTMLAnchorElement> | Record<`data-${string}`, string | number | boolean>;
    logoActionAs?: any;
    logoActionProps?: any;
    logoName?: string;
    onLogoClick?: (e: React.MouseEvent<HTMLElement>, name: string) => void;
    segmentLabel?: string;
    navigationTree?: INavigationItem[];
    navigationAriaLabel?: string;
    mobileOpenMenuButtonRef?: React.RefObject<HTMLElement>;
    navigationActionAs?: any;
    value?: string;
    name?: string;
    onChange?: (value: string, name: string, event: React.SyntheticEvent<HTMLElement>) => void;
    isSticky?: boolean;
    onForceMobileChange?: (forceMobileValue: boolean) => void;
    menuFlyoutAriaLabel?: string;
}
export interface ISimpleHeaderPresentationProps extends ISimpleHeaderSharedProps {
    activeElement: HTMLElement;
    activeRef: any;
    open?: boolean;
    onOpenChange: (newOpen: boolean) => void;
    isMobile: boolean;
    handleOnIconClick?: () => void;
}
export declare const SimpleHeaderPresentation: {
    ({ id, className, noMargin, isStencilHost, activeRef, activeElement, isSticky, isMobile, logoSrcMobile, logoSrcDesktop, logoHref, logoLabel, logoHtmlAttrs, logoDisabled, logoActionAs, logoActionProps, logoName, onLogoClick, segmentLabel, navigationTree, navigationAriaLabel, navigationActionAs, value, onChange, name, iconLinksInteraction, onOpenChange, onForceMobileChange, open, mobileOpenMenuButtonRef, menuFlyoutAriaLabel, handleOnIconClick, }: ISimpleHeaderPresentationProps): React.JSX.Element;
    displayName: string;
};
