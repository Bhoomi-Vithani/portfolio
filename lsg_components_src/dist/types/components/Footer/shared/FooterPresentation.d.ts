import React, { ReactNode } from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
import { IThemePresentationProps } from "../../Theme/shared/ThemePresentation";
export interface IFooterPresentationProps extends IBasicPropsInternal {
    contactArea?: any;
    previousTheme?: IThemePresentationProps["color"];
    brandBarSlogan?: string;
    brandBarHref?: string;
    brandBarActionAs?: any;
    brandBarActionProps?: any;
    brandBarLogoLabel?: string;
    brandBarLogoSrcCustom?: string;
    brandBarLogoDisabled?: boolean;
    brandBarLogoHtmlAttrs?: React.ButtonHTMLAttributes<HTMLButtonElement> | React.AnchorHTMLAttributes<HTMLAnchorElement> | Record<`data-${string}`, string | number | boolean>;
    brandBarOnLogoClick?: (e: React.MouseEvent<HTMLElement>, name: string) => void;
    metaBarNavigationActionAs?: any;
    metaBarNavigationTree?: any[];
    metaBarNavigationAriaLabel?: string;
    metaBarHorizontallyCentered?: boolean;
    metaBarSocialLinks?: ReactNode;
    metaBarSocialLinksAriaLabel?: string;
    dataComponentType?: "footer" | "simple-footer";
}
export declare const defaultProps: Partial<IFooterPresentationProps>;
export declare const FooterPresentation: {
    ({ id, children, className, noMargin, contactArea, previousTheme, brandBarSlogan, brandBarHref, brandBarActionAs, brandBarActionProps, brandBarLogoLabel, brandBarLogoSrcCustom, brandBarLogoDisabled, brandBarLogoHtmlAttrs, brandBarOnLogoClick, metaBarNavigationActionAs, metaBarNavigationTree, metaBarNavigationAriaLabel, metaBarHorizontallyCentered, metaBarSocialLinks, metaBarSocialLinksAriaLabel, dataComponentType, }: IFooterPresentationProps): React.JSX.Element;
    displayName: string;
};
