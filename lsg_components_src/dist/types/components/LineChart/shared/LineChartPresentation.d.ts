import React from "react";
import { INavigationTree } from "../../../interfaces/NavigationTree";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export type LineChartXValue = Date;
export type LineChartYValue = number | Date;
export type LineChartFormatterFn<T> = (entry: T) => string;
export interface ILineChartAxis<T> {
    /** @deprecated: don't use "day", "week", ... "year" any more, use number   */
    steps?: T extends LineChartXValue ? "day" | "week" | "month" | "3months" | "6months" | "year" : number;
    min?: T;
    max?: T;
    /** @deprecated: markers not specified anymore   */
    markerRange?: boolean;
    tickValues?: T[];
    tickFormatter?: LineChartFormatterFn<T>;
    mobileTickFormatter?: LineChartFormatterFn<T>;
    /** @deprecated: markers not specified anymore   */
    tooltipFormatter?: LineChartFormatterFn<T>;
    gridStyle?: "none" | "solid" | "dashed";
}
export interface ILineChartAxisOptions {
    /** @deprecated: yAxis all time on left side; right side position not specified anymore   */
    labelPosition?: "left" | "right";
    /** @deprecated: not used anymore   */
    simpleGrid?: boolean;
    xAxis?: ILineChartAxis<LineChartXValue>;
    yAxis?: ILineChartAxis<LineChartYValue>;
}
export interface ILineChartTooltipOptions {
    titleFormatter?: any;
    valueFormatter?: any;
}
export interface ILineChartDataPoint {
    x: LineChartXValue;
    y: LineChartYValue;
}
export interface ILineChartLine {
    dataPoints: ILineChartDataPoint[];
    label: string;
    style?: "style-1" | "style-2" | "style-3" | "style-4" | "style-5";
    weight?: "regular" | "bold";
    stepped?: boolean;
}
export interface ILineChartBaseProps extends IBasicPropsInternal {
    lines: ILineChartLine[];
    axisOptions?: ILineChartAxisOptions;
    tooltipOptions?: ILineChartTooltipOptions;
    selectionBar?: INavigationTree[];
    selectionBarActionAs?: any;
    selectionValue?: string;
    onSelectionChange?: (newValue: string) => void;
    interactive?: boolean;
    zeroLineBold?: boolean;
    /** @deprecated */
    tooltipComponent?: any;
    loadingIndicator?: boolean;
}
export interface ILineChartPresentationProps extends ILineChartBaseProps {
    isMobile?: boolean;
    canvasHeight: number;
    canvasWidth: number;
    tickValuesX?: any;
    tickValuesY?: any;
    tickFormatX?: any;
    tickFormatY?: any;
    tickValueMaxY?: any;
    tickValueMinY?: any;
    marginTop: number;
    marginRight: number;
    marginBottom: number;
    marginLeft: number;
    labelYWidth: number;
    lastXAxisLabelWidth: number;
    yTickValues?: any;
    tooltipWidth: any;
    tooltipOptions: ILineChartTooltipOptions;
    setSelectedIndex: any;
    selectedIndex: number;
    gridStyleX?: "none" | "solid" | "dashed";
    gridStyleY?: "none" | "solid" | "dashed";
    componentRef?: any;
    axisRefY?: any;
    chartXAxisLabelRef?: any;
    setInfoBoxMeasures?: any;
    infoAreaHeight?: number;
}
export declare const defaultProps: Partial<ILineChartPresentationProps>;
export declare const LineChartPresentation: React.ForwardRefExoticComponent<ILineChartPresentationProps & React.RefAttributes<HTMLElement>>;
