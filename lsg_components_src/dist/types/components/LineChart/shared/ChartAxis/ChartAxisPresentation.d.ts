import { ScaleLinear, ScaleTime } from "d3-scale";
import React from "react";
import { IBasicPropsInternal } from "../../../../utils/IBasicPropsInternal";
/**
 * ChartAxis is used to annotate a Cartessian coordinate system by drawing labels
 * on the x or y axis helping viewers to interpret a chart.
 */
export interface IChartAxisSharedProps extends IBasicPropsInternal {
    scale: ScaleLinear<number, number> | ScaleTime<number, number>;
    orientation?: "horizontal" | "vertical";
    tickValues?: any[];
    tickFormat?: (value: string | number) => string;
}
interface IChartAxisPresentationOnlyProps {
}
interface IChartAxisPresentationProps extends IChartAxisSharedProps, IChartAxisPresentationOnlyProps {
}
export declare const ChartAxisPresentation: {
    ({ scale, orientation, tickValues, tickFormat, }: IChartAxisPresentationProps): React.JSX.Element;
    displayName: string;
};
export {};
