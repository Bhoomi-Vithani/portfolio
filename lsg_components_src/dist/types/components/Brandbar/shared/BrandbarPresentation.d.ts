import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface IBrandbarPresentationProps extends IBasicPropsInternal {
    slogan?: string;
    href?: string;
    actionAs?: any;
    actionProps?: any;
    logoLabel?: string;
    logoSrcCustom?: string;
    logoDisabled?: boolean;
    logoHtmlAttrs?: React.ButtonHTMLAttributes<HTMLButtonElement> | React.AnchorHTMLAttributes<HTMLAnchorElement> | Record<`data-${string}`, string | number | boolean>;
    onLogoClick?: (e: React.MouseEvent<HTMLElement>, name: string) => void;
}
export declare const BrandbarPresentation: {
    ({ id, className, noMargin, isStencilHost, slogan, href, actionAs, actionProps, logoLabel, logoSrcCustom, logoDisabled, logoHtmlAttrs, onLogoClick, }: IBrandbarPresentationProps): React.JSX.Element;
    displayName: string;
};
