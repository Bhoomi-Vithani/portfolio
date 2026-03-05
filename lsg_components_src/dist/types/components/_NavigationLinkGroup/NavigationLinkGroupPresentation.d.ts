import React from "react";
import { IBasicPropsInternal } from "../../utils/IBasicPropsInternal";
export interface INavigationLinkGroupPresentationProps extends IBasicPropsInternal {
    size?: "meta-bar" | "segment-bar";
    centeredLayout?: boolean;
}
export declare const NavigationLinkGroupPresentation: {
    ({ id, noMargin, children, className, centeredLayout, size, }: INavigationLinkGroupPresentationProps): React.JSX.Element;
    displayName: string;
};
