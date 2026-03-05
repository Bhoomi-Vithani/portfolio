import React from "react";
import { IBasicProps } from "../../base/IBasicProps";
import { IDatapointPresentation } from "../ChartInfos/IDatapointPresentation";
import { IChartInfoListProps } from "../CircleDiagram/CircleDiagram";
interface IDonutChartDatapointPresentation extends Omit<IDatapointPresentation, "valueColor"> {
    idLabel?: string;
}
type IDonutChartProps = IBasicProps & {
    /** Switch between left and centered layout. Default is left. */
    centeredLayout?: boolean;
    data: IDonutChartDatapointPresentation[];
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    htmlAttrs?: React.HtmlHTMLAttributes<HTMLElement> | Record<`data-${string}`, string | number | boolean>;
    /** Number of grid columns the chart should span */
    sizeChart?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    /** Function to format the value of the chart in the legend. The default format will format the value as Euro
     *  currency, with 2 decimals. */
    valueFormatter?: (value: number | string) => string;
} & ({
    /** set to true if the image is only decorative */
    isDecorative?: false;
    /** Text that is displayed in the middle of the chart */
    label?: string;
    /** Text that is displayed as subline in the middle of the chart */
    subline?: string;
    /** Legend for the Donut Chart. */
    chartInfoArea?: Omit<IChartInfoListProps, "items">;
    /** Number of grid columns the info area should span */
    sizeInfoArea?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
} | {
    /** set to true if the image is only decorative */
    isDecorative: true;
    /** Text that is displayed in the middle of the chart */
    label?: undefined;
    /** Text that is displayed as subline in the middle of the chart */
    subline?: undefined;
    /** Legend for the Donut Chart. */
    chartInfoArea?: undefined;
    /** Number of grid columns the info area should span */
    sizeInfoArea?: undefined;
});
declare const DonutChart: {
    ({ id: idProp, centeredLayout, data, chartInfoArea, isDecorative, sizeChart, sizeInfoArea, valueFormatter, ...props }: IDonutChartProps): React.JSX.Element;
    displayName: string;
};
export { DonutChart, IDonutChartProps, IDonutChartDatapointPresentation };
