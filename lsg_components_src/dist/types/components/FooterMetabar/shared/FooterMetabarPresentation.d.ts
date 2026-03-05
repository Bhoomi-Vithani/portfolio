import React from "react";
import { INavigationTree } from "../../../interfaces";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface IFooterMetabarPresentationProps extends IBasicPropsInternal {
    navigationActionAs?: any;
    navigationTree?: INavigationTree[] | any[];
    navigationAriaLabel?: string;
    socialLinks?: any;
    socialLinksAriaLabel?: string;
}
export declare const FooterMetabarPresentation: {
    ({ id, className, isStencilHost, navigationActionAs, navigationTree, navigationAriaLabel, socialLinks, socialLinksAriaLabel, horizontalAlignment, }: IFooterMetabarPresentationProps): React.JSX.Element;
    displayName: string;
};
