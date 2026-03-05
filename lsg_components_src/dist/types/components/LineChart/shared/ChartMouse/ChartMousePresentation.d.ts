import React from "react";
/**
 * ChartMouse is used to select the nearest value depending on mouse position by using a render child pattern.
 */
export type ChartXValue = number | Date;
export type ChartYValue = number | Date;
export interface IChartDataPoint {
    x: ChartXValue;
    y: ChartYValue;
}
export interface IChartMousePresentationProps {
    width: number;
    height: number;
    children: (pt: any | undefined) => React.ReactNode;
    toDataPoint: any;
}
export declare const ChartMousePresentation: {
    ({ width, height, children, toDataPoint }: IChartMousePresentationProps): React.JSX.Element;
    displayName: string;
};
