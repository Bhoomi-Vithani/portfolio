import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface IStatusIndicatorGroupPresentationProps extends IBasicPropsInternal {
    direction: "vertical" | "horizontal" | "flip-xs" | "flip-sm" | "flip-md" | "collapse-xs" | "collapse-sm" | "collapse-md";
    label?: string;
    viewport?: "xs" | "sm" | "md" | "lg" | "xl";
}
export declare const defaultProps: Partial<IStatusIndicatorGroupPresentationProps>;
export declare const StatusIndicatorGroupPresentation: {
    ({ id, children, className, noMargin, isStencilHost, direction, label, viewport, horizontalAlignment, }: IStatusIndicatorGroupPresentationProps): React.JSX.Element;
    displayName: string;
};
