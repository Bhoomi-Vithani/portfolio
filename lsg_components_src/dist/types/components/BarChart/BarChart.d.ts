import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
import { IBarsOptions, IBarChartItem, IBarChartInfoArea, IBarChartLegend, IBarChartAxisOptions } from "./shared/BarChartPresentation";
interface IBarChartProps extends IBasicProps {
    /** Set of values displayed by bars */
    bars: IBarChartItem[];
    /** Configuration of individual bars */
    barsOptions?: IBarsOptions;
    /** Axes settings (x + y) */
    barChartAxisOptions?: IBarChartAxisOptions;
    /** Sets the bar chart to interactive or static */
    interactive?: boolean;
    /** Content of the bar chart info area */
    infoArea?: IBarChartInfoArea;
    /** Content of the bar chart legend */
    legendItems?: IBarChartLegend;
    /** Bar index on bar hover */
    onBarHover?: (barIndex: number, event: React.SyntheticEvent<HTMLElement>) => void;
    /** Adapt height to parent element */
    responsiveHeight?: boolean;
}
declare const BarChart: {
    ({ ...props }: IBarChartProps): React.JSX.Element;
    displayName: string;
};
export { BarChart, IBarChartProps };
