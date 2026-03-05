import type { IIcon } from "@lsg/icons";
import React from "react";
import { INavigationItem } from "../../../interfaces";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface IProfileWidgetSharedProps extends IBasicPropsInternal {
    open?: boolean;
    onCloseClick?: (event?: MouseEvent | React.MouseEvent<HTMLElement, MouseEvent>) => void;
    onBackdropClick?: (event?: MouseEvent) => void;
    profileName?: string;
    profileSubline?: string;
    profileImg?: any;
    profileImgAltText?: string;
    profileIcon?: IIcon;
    profileIconVariant?: "outline" | "solid";
    switchProfileLinkText?: string;
    switchProfileLinkIcon?: IIcon;
    switchProfileLinkHref?: string;
    switchProfileLinkTarget?: string;
    switchProfileLinkActionAs?: any;
    switchProfileLinkActionProps?: any;
    onProfileSwitchClick?: (event?: MouseEvent | React.MouseEvent<HTMLElement, MouseEvent>) => void;
    navigationTree?: INavigationItem[];
    navigationActionAs?: any;
    onLogOutButtonClick?: (event: React.MouseEvent<HTMLElement>, name: string) => void;
    logOutButtonHref?: string;
    logOutButtonTarget?: string;
    logOutButtonText?: string;
    logOutButtonActionAs?: any;
    logOutButtonActionProps?: any;
    logOutButtonHidden?: boolean;
    messageText?: string;
    linkSectionLeft?: any;
    linkSectionRight?: any;
}
interface IProfileWidgetPresentationOnlyProps {
}
interface IProfileWidgetPresentationProps extends IProfileWidgetSharedProps, IProfileWidgetPresentationOnlyProps {
}
export declare const ProfileWidgetPresentation: {
    ({ id, children, className, noMargin, isStencilHost, open, onCloseClick, onBackdropClick, profileName, profileSubline, profileImg, profileImgAltText, profileIcon, profileIconVariant, switchProfileLinkText, switchProfileLinkIcon, switchProfileLinkHref, switchProfileLinkTarget, switchProfileLinkActionAs, switchProfileLinkActionProps, onProfileSwitchClick, navigationTree, navigationActionAs, onLogOutButtonClick, logOutButtonHref, logOutButtonTarget, logOutButtonText, logOutButtonActionAs, logOutButtonActionProps, logOutButtonHidden, messageText, linkSectionLeft, linkSectionRight, }: IProfileWidgetPresentationProps): React.JSX.Element;
    displayName: string;
};
export {};
