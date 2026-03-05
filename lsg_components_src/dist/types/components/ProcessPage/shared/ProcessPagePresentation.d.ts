import React from "react";
import { INavigationTree } from "../../../interfaces/NavigationTree";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface IProcessPagePresentationProps extends IBasicPropsInternal {
    headerTitle?: string;
    headerTitleAs?: keyof React.JSX.IntrinsicElements;
    forceBurgerMenu?: boolean;
    hasPortalFooter?: boolean;
    progress?: number;
    menuOpen?: boolean;
    isMobile?: boolean;
    onMenuOpenChange?: (newOpen: boolean) => void;
    navigationLabel?: string;
    navigationAriaLabel?: string;
    iconLinks?: React.ReactNode;
    countIconLinks?: number;
    navigationTree?: INavigationTree[];
    navigationActionAs?: any;
    footerNavigationTree?: INavigationTree[];
    footerNavigationAriaLabel?: string;
    value?: string;
    onChange?: (newValue: string, event: any) => void;
    newNavigation?: boolean;
    noSemanticElements?: boolean;
    stickyNavigation?: boolean;
    isClosedArea?: boolean;
}
export declare const ProcessPagePresentation: {
    ({ id: idProp, className, noMargin, children, headerTitle, headerTitleAs, hasPortalFooter, progress, menuOpen, onMenuOpenChange, iconLinks, countIconLinks, navigationTree, navigationActionAs, navigationLabel, navigationAriaLabel, footerNavigationTree, footerNavigationAriaLabel, isMobile, forceBurgerMenu, value, newNavigation, noSemanticElements, stickyNavigation, isClosedArea, onChange, }: IProcessPagePresentationProps): React.JSX.Element;
    displayName: string;
};
