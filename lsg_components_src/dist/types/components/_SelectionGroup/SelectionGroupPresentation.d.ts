import React, { ReactNode } from "react";
import { IBasicPropsInternal } from "../../utils/IBasicPropsInternal";
export interface ISelectionGroupPresentationProps extends IBasicPropsInternal {
    direction?: "horizontal" | "vertical";
    label?: string;
    helperText?: ReactNode;
    errorText?: ReactNode;
    invalid?: boolean;
    htmlAttrs?: React.HTMLAttributes<HTMLElement> | Record<`data-${string}`, string | number | boolean>;
}
export declare const SelectionGroupPresentation: {
    ({ id: idProp, children, className, noMargin, isStencilHost, direction, invalid, label, helperText, errorText, horizontalAlignment, htmlAttrs, }: ISelectionGroupPresentationProps): React.JSX.Element;
    displayName: string;
};
