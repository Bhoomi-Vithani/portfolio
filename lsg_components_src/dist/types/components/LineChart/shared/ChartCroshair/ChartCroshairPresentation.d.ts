import React from "react";
import { IBasicPropsInternal } from "../../../../utils/IBasicPropsInternal";
/**
 * ChartCroshair is  used to highlight several selected values with similar
 * x-coordinates inside a chart and is automatically aligned to them.
 */
export interface Point {
    x: number;
    y: number;
}
export type ChartXValue = Date;
export type ChartYValue = number | Date;
export interface IChartDataPoint {
    x: ChartXValue;
    y: ChartYValue;
}
export interface IChartCroshairPresentationProps extends IBasicPropsInternal {
    xScale: any;
    yScale: any;
    points: any;
    height: number;
}
export declare const ChartCroshairPresentation: {
    ({ xScale, yScale, points }: IChartCroshairPresentationProps): React.JSX.Element;
    displayName: string;
};
