import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface IGridProps extends IBasicPropsInternal {
    spacing?: "section" | "subsectionlarge" | "subsection" | "doublesubsection" | "dense" | "small" | "medium" | "large" | "none";
    gallerySliderSpacing?: boolean;
    gallerySlider?: boolean;
    centeredLayout?: boolean;
}
export declare const getGridClasses: ({ className, spacing, gallerySliderSpacing, gallerySlider, centeredLayout }: IGridProps, spacingFromContext?: {
    spacing?: string;
}) => string;
export declare const GridPresentation: {
    ({ id, children, ...otherProps }: IGridProps): React.JSX.Element;
    displayName: string;
};
