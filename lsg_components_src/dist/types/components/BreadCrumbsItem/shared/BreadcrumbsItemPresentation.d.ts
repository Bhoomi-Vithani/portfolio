import React from "react";
import { IActionBaseProps } from "../../Action/shared/ActionPresentation";
export interface IBreadcrumbsItemPresentationProps extends Omit<IActionBaseProps, "hasTabIndex"> {
}
export declare const BreadcrumbsItemPresentation: {
    ({ children, className, noMargin, disabled, actionRef, hasMouseHover, hasKeyboardFocus, htmlAttrs: htmlAttrsProp, ...otherProps }: IBreadcrumbsItemPresentationProps): React.JSX.Element;
    displayName: string;
};
