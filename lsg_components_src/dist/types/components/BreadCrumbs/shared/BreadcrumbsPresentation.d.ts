import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
interface IBreadcrumbsPresentationProps extends IBasicPropsInternal {
    title?: string;
    separatorBottom?: boolean;
    alwaysVisible?: boolean;
}
export declare const BreadcrumbsPresentation: {
    ({ id, children, className, alwaysVisible, separatorBottom, noMargin, title, }: IBreadcrumbsPresentationProps): React.JSX.Element;
    displayName: string;
};
export {};
