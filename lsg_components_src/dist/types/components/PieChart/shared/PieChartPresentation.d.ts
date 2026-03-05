import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
import { IDatapointPresentation } from "../../ChartInfos/IDatapointPresentation";
export interface IPieChartPresentationProps extends IBasicPropsInternal {
    label?: string;
    subline?: string;
    dataSeries?: IDatapointPresentation[];
    isDecorative?: boolean;
    activeIndex?: number;
    onItemActive?: (index: number | null) => void;
    htmlAttrs?: React.HtmlHTMLAttributes<HTMLElement> | Record<`data-${string}`, string | number | boolean>;
}
export interface IPieChartPresentationPropsInternal extends IPieChartPresentationProps {
    donutShape?: boolean;
}
export declare const PieChartPresentation: ({ id, label, subline, className, dataSeries, isDecorative, activeIndex, onItemActive, htmlAttrs, ...props }: IPieChartPresentationPropsInternal) => React.JSX.Element;
