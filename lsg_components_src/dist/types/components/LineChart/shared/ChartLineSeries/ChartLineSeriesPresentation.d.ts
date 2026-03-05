import { ScaleLinear, ScaleTime } from "d3-scale";
import React from "react";
import { IChartDataPoint } from "../ChartXYPlot/ChartXYPlotPresentation";
/**
 * ChartLineSeries is used to create a continuous line representing the given data series.
 */
interface IChartLineSeriesPresentationProps {
    xScale: ScaleTime<number, number>;
    yScale: ScaleLinear<number, number>;
    data: IChartDataPoint[];
    color?: "primary-1" | "primary-2" | "level-3" | "level-5" | "level-6";
    mobile?: boolean;
    /** Type of path interpolation */
    curveType?: "stepped";
}
export declare const ChartLineSeriesPresentation: {
    ({ xScale, yScale, data, color, mobile, curveType, }: IChartLineSeriesPresentationProps): React.JSX.Element;
    displayName: string;
};
export {};
