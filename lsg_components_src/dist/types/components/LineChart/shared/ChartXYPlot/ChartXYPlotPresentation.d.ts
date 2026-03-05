import React from "react";
import { IBasicPropsInternal } from "../../../../utils/IBasicPropsInternal";
export type ChartXValue = Date;
export type ChartYValue = number | Date;
export type ChartFormatterFn<T> = (entry: T) => string;
export interface IChartAxis<T> {
    steps?: T extends ChartXValue ? "day" | "week" | "month" | "3months" | "6months" | "year" : number;
    min?: T;
    max?: T;
    /** @deprecated: markers not specified anymore   */
    markerRange?: boolean;
    tickValues?: T[];
    tickFormatter?: ChartFormatterFn<T>;
    mobileTickFormatter?: ChartFormatterFn<T>;
    /** @deprecated: markers not specified anymore   */
    tooltipFormatter?: ChartFormatterFn<T>;
}
export interface IChartAxisOptions {
    labelPosition?: "left" | "right";
    simpleGrid?: boolean;
    xAxis: IChartAxis<ChartXValue>;
    yAxis: IChartAxis<ChartYValue>;
}
export interface IChartDataPoint {
    x: ChartXValue;
    y: ChartYValue;
}
export interface IChartXYPlotPresentationProps extends IBasicPropsInternal {
    height: number;
    width: number;
}
export declare const ChartXYPlotPresentation: {
    ({ width, height, children }: IChartXYPlotPresentationProps): React.JSX.Element;
    displayName: string;
};
