import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface ISimpleFooterPresentationProps extends IBasicPropsInternal {
    contactModule?: any;
    navigationActionAs?: any;
    navigationTree?: any[];
    navigationAriaLabel?: string;
    claim?: string;
    logoLabel?: string;
    logoSrc?: string;
    logoDisabled?: boolean;
    logoHref?: string;
    logoHtmlAttrs?: React.ButtonHTMLAttributes<HTMLButtonElement> | React.AnchorHTMLAttributes<HTMLAnchorElement> | Record<`data-${string}`, string | number | boolean>;
    logoActionAs?: any;
    logoActionProps?: any;
    onLogoClick?: (e: React.MouseEvent<HTMLElement>, name: string) => void;
}
export declare const SimpleFooterPresentation: {
    ({ id, className, noMargin, isStencilHost, contactModule, navigationActionAs, navigationTree, navigationAriaLabel, logoDisabled, logoLabel, logoHref, logoSrc, logoHtmlAttrs, logoActionAs, logoActionProps, onLogoClick, claim, }: ISimpleFooterPresentationProps): React.JSX.Element;
    displayName: string;
};
