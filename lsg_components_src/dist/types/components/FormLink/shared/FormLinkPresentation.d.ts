import React from "react";
import { IActionBaseProps } from "../../Action/shared/ActionPresentation";
export interface IIconLinkInputStylePresentationProps extends Omit<IActionBaseProps, "href"> {
    icon: any;
    label?: string;
    text: string;
    href: string;
}
export declare const defaultProps: Partial<IIconLinkInputStylePresentationProps>;
export declare const FormLinkPresentation: {
    ({ id: idProp, className, noMargin, isStencilHost, icon, label, text, href, htmlAttrs: htmlAttrsProp, ...otherProps }: IIconLinkInputStylePresentationProps): React.JSX.Element;
    displayName: string;
};
