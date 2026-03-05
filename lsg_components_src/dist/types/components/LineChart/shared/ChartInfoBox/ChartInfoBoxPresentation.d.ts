import React from "react";
import { IBasicPropsInternal } from "../../../../utils/IBasicPropsInternal";
export interface IChartInfoBoxItemProps extends IBasicPropsInternal {
    look?: "legend" | "tooltip" | "infoarea";
    indicatorColor?: "primary-1" | "primary-2" | "level-3" | "level-5" | "level-6";
    label?: string;
    value?: string;
    valueColor?: "red" | "green";
    valueFormatter?: any;
}
interface IChartInfoBoxPresentationOnlyProps {
}
interface IChartInfoBoxPresentationProps extends IChartInfoBoxItemProps, IChartInfoBoxPresentationOnlyProps {
}
export declare const ChartInfoBoxPresentation: {
    ({ id, className, noMargin, isStencilHost, label, value, indicatorColor, look, valueColor, valueFormatter, }: IChartInfoBoxPresentationProps): React.JSX.Element;
    displayName: string;
};
export {};
