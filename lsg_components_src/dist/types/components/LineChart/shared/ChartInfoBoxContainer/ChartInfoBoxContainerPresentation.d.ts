import React from "react";
import { IBasicPropsInternal } from "../../../../utils/IBasicPropsInternal";
export interface IChartInfoBoxContainerSharedProps extends IBasicPropsInternal {
    alignment: "horizontal" | "vertical";
    look?: "legend" | "tooltip" | "infoarea";
    title?: string | Date;
    titleFormatter?: any;
    positionTop?: number;
    positionLeft?: number;
    onMeasure?: (newWidth: number, newHeight: number) => void;
}
interface IChartInfoBoxContainerOnlyProps {
    containerRef?: any;
}
interface IChartInfoBoxContainerPresentationProps extends IChartInfoBoxContainerSharedProps, IChartInfoBoxContainerOnlyProps {
}
export declare const ChartInfoBoxContainerPresentation: {
    ({ id, children, className, noMargin, isStencilHost, positionTop, positionLeft, look, title, titleFormatter, containerRef, }: IChartInfoBoxContainerPresentationProps): React.JSX.Element;
    displayName: string;
};
export {};
