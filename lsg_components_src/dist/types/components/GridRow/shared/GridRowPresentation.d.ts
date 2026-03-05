import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface IGridRowPresentationProps extends IBasicPropsInternal {
    columnReverse?: "sm" | "md";
    verticalAlignment?: "top" | "middle" | "bottom";
    as?: keyof JSX.IntrinsicElements;
}
export declare const getGridRowClasses: ({ className, columnReverse, verticalAlignment }: IGridRowPresentationProps) => string;
export declare const GridRowPresentation: {
    ({ id, as, children, ...otherProps }: IGridRowPresentationProps): React.JSX.Element;
    displayName: string;
};
