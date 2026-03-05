import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
import { LineChartXValue as XValue, LineChartYValue as YValue, ILineChartAxis, ILineChartAxisOptions, ILineChartLine } from "./shared/LineChartPresentation";
export type LineChartXValue = Date;
export type LineChartYValue = number | Date;
type xAxisSteps = "day" | "week" | "month" | "3months" | "6months" | "year";
interface IAxis<T> extends Omit<ILineChartAxis<T>, "steps"> {
    steps?: T extends XValue ? xAxisSteps : number;
}
interface IAxisOptions extends Omit<ILineChartAxisOptions, "yAxis" | "xAxis"> {
    xAxis?: IAxis<XValue>;
    yAxis?: IAxis<YValue>;
}
export interface ILineChartTooltipOptions {
    titleFormatter?: any;
    valueFormatter?: any;
}
export interface ILineChartDataPoint {
    x: LineChartXValue;
    y: LineChartYValue;
}
interface ILine extends Omit<ILineChartLine, "style" | "weight"> {
    dataPoints: ILineChartDataPoint[];
    label: string;
    style?: "style-1" | "style-2" | "style-3" | "style-4" | "style-5";
    weight?: "regular" | "bold";
    stepped?: boolean;
}
interface ITree {
    name: string;
    label: string;
}
interface ILineChartProps extends IBasicProps {
    lines: ILine[];
    axisOptions?: IAxisOptions;
    tooltipOptions?: ILineChartTooltipOptions;
    selectionBar?: ITree[];
    selectionValue?: string;
    interactive?: boolean;
    formatterYLabel?: (entry: YValue) => string;
    onSelectionChange?: (newValue: string) => void;
    /** Enable a bold horizontal zero line. */
    zeroLineBold?: boolean;
    /** @deprecated */
    tooltipComponent?: any;
    loadingIndicator?: boolean;
}
declare const LineChart: {
    (props: ILineChartProps): React.JSX.Element;
    displayName: string;
};
export { LineChart, ILineChartProps, ITree, ILine, IAxis, IAxisOptions };
