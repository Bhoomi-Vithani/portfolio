import React, { ReactNode } from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export type BarChartXValue = string;
export type BarChartYValue = number;
export type BarChartFormatterFn<T> = (entry: T) => string;
export interface IBarChartLegend {
    items: IBarChartLegendItem[];
}
export interface IBarChartLegendItem {
    style: string;
    label: ReactNode;
}
export interface IBarChartInfoArea {
    items: IBarChartInfoAreaItem[];
}
export interface IBarChartInfoAreaItem {
    overline: ReactNode;
    value: ReactNode;
    variant?: "positive" | "negative";
}
export interface IBarChartDataPoint {
    x: BarChartXValue;
    y: BarChartYValue;
}
export interface IBarChartItem {
    dataPoints: IBarChartDataPoint[];
}
export interface IBarChartAxis<T> {
    display?: "none";
    steps?: T;
    min?: T;
    max?: T;
    tickValues?: T[];
    tickFormatter?: BarChartFormatterFn<T>;
}
export interface IBarChartAxisOptions {
    columnGrid?: "solid" | "dashed" | "none";
    rowGrid?: "dashed" | "none";
    xAxis?: Omit<IBarChartAxis<BarChartXValue>, "display">;
    yAxis?: IBarChartAxis<BarChartYValue>;
}
export interface IBarsOptions {
    style?: string[];
    separator?: number[];
    highlight?: number;
    highlightStyle?: "positive" | "negative";
    interactive?: boolean;
}
export interface IBarChartSharedProps extends IBasicPropsInternal {
    bars: IBarChartItem[];
    barsOptions?: IBarsOptions;
    interactive?: boolean;
    infoArea?: IBarChartInfoArea;
    legendItems?: IBarChartLegend;
    barChartAxisOptions?: IBarChartAxisOptions;
    responsiveHeight?: boolean;
}
interface IBarChartPresentationOnlyProps {
    width: number;
    height: number;
    yAxisWidth: number;
    viewport: string;
    handleOnMouseEnter?: (event: React.MouseEvent<SVGRectElement>) => void;
    handleOnMouseLeave?: (event: React.MouseEvent<SVGRectElement>) => void;
    hoveredElement: number;
    separator?: any;
    highlightedElement?: number;
    barLabelYPosition?: number[];
}
interface IBarChartPresentationProps extends IBarChartSharedProps, IBarChartPresentationOnlyProps {
    hostRef: any;
    chartRef: any;
    yAxisRef: any;
    barLabelRef: any;
}
export declare const BarChartPresentation: {
    ({ id, className, noMargin, isStencilHost, bars, width, height, hostRef, yAxisRef, yAxisWidth, barLabelRef, viewport, interactive, handleOnMouseEnter, handleOnMouseLeave, hoveredElement, separator, highlightedElement, chartRef, infoArea, barsOptions, legendItems, barChartAxisOptions, barLabelYPosition, responsiveHeight, }: IBarChartPresentationProps): React.JSX.Element;
    displayName: string;
};
export {};
