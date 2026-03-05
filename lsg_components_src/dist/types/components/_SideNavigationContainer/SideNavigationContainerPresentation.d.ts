import React, { ReactNode, Ref } from "react";
import { IBasicPropsInternal } from "../../utils/IBasicPropsInternal";
export interface ISideNavigationContainerPresentationProps extends IBasicPropsInternal {
    contentId?: string;
    hasBurgerMenu: boolean;
    menuOpen: boolean;
    onMenuOpenChange: (newOpen: boolean) => void;
    navigationArea: ReactNode;
    noMargin?: boolean;
    theme?: "light" | "dark";
    isDesktopHeaderSize?: boolean;
    contentRef?: Ref<HTMLDivElement>;
    drawerAttrs?: React.HTMLAttributes<HTMLElement>;
    isClosedArea?: boolean;
    pageTitle?: string;
    headerTitleId?: string;
}
export declare const SideNavigationContainerPresentation: {
    ({ contentId, children, className, hasBurgerMenu, isDesktopHeaderSize, menuOpen, onMenuOpenChange, navigationArea, noMargin, theme, contentRef, drawerAttrs, isClosedArea, pageTitle, headerTitleId, }: ISideNavigationContainerPresentationProps): React.JSX.Element;
    displayName: string;
};
