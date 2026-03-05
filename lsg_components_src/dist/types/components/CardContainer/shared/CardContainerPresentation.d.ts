import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface ICardContainerPresentationProps extends IBasicPropsInternal {
    topArea?: any;
    bottomArea?: any;
    hasHover?: boolean;
    disabled?: boolean;
    active?: boolean;
    separator?: boolean;
    contentAlignment?: "center-horizontal" | "center-vertical" | "center" | "space-between";
    innerSpacing?: "none" | "small" | "large";
}
export declare const CardContainerPresentation: {
    ({ topArea, bottomArea, hasHover, disabled, active, separator, contentAlignment, innerSpacing, }: ICardContainerPresentationProps): React.JSX.Element;
    displayName: string;
};
