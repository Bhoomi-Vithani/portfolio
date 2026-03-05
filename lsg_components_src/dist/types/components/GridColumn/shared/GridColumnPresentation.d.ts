import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
type HorizontalAlign = "left" | "center" | "right";
export interface IGridColumnPresentationProps extends IBasicPropsInternal {
    size?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    md?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    sm?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
    xs?: 0 | 1 | 2 | 3 | 4;
    horizontalAlignment?: HorizontalAlign;
    horizontalAlignmentXs?: HorizontalAlign;
    horizontalAlignmentSm?: HorizontalAlign;
    horizontalAlignmentMd?: HorizontalAlign;
    style?: any;
    as?: keyof JSX.IntrinsicElements;
}
export declare const getGridColumnClasses: ({ horizontalAlignment, horizontalAlignmentXs, horizontalAlignmentSm, horizontalAlignmentMd, size, md, sm, xs, className, }: IGridColumnPresentationProps) => string;
export declare const GridColumnPresentation: {
    ({ id, as, children, style, ...otherProps }: IGridColumnPresentationProps): React.JSX.Element;
    displayName: string;
};
export {};
