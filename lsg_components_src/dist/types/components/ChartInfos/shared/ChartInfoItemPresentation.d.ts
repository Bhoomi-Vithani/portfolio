import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
import { IDatapointPresentation } from "../IDatapointPresentation";
export interface IChartInfoItemProps extends IBasicPropsInternal, IDatapointPresentation {
    /** @deprecated 20.11.2024: should not be selectable (as per specs) The color of the label. */
    labelColor?: "primary" | "error" | "success" | "primaryBold" | "errorBold" | "successBold";
    /** An optional formatter for the value. Takes a generic function that formats a value and returns it as a string. */
    valueFormatter?: <T>(value: T) => string;
    /** An optional callback that is triggered when the mouse enters the element. */
    onMouseEnter?: (event: React.MouseEvent<HTMLDivElement>) => void;
    /** An optional callback that is triggered when the mouse leaves the element. */
    onMouseLeave?: (event: React.MouseEvent<HTMLDivElement>) => void;
}
export interface IChartInfoPropsInternal extends IChartInfoItemProps {
    role?: string;
    appearance?: "tooltip" | "legend" | "infoarea";
    isActive?: boolean;
}
export declare const ChartInfoItemPresentation: (props: IChartInfoPropsInternal) => React.JSX.Element;
