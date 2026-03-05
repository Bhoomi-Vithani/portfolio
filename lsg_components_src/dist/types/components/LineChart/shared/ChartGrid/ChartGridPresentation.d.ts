import React from "react";
import { IBasicPropsInternal } from "../../../../utils/IBasicPropsInternal";
/**
 * ChartGrid is used to create horizontal or vertical grid lines inside a chart.
 */
export interface IChartGridSharedProps extends IBasicPropsInternal {
    xScale: any;
    yScale: any;
    columnLineStyle?: "solid" | "dashed" | "none";
    rowLineStyle?: "solid" | "dashed" | "none";
    columnTickValues?: any;
    rowTickValues?: any;
    zeroLineBold?: boolean;
}
interface IChartGridPresentationOnlyProps {
}
interface IChartGridPresentationProps extends IChartGridSharedProps, IChartGridPresentationOnlyProps {
}
export declare const defaultProps: Partial<IChartGridPresentationProps>;
export declare const ChartGridPresentation: {
    ({ xScale, yScale, columnLineStyle, rowLineStyle, columnTickValues, rowTickValues, zeroLineBold, }: IChartGridPresentationProps): React.JSX.Element;
    displayName: string;
};
export {};
