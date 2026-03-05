import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
import { IChartInfoItemProps } from "./ChartInfoItemPresentation";
export type ChartInfoPosition = "auto" | "top" | "right" | "bottom" | "";
/**  Mapping to a valid position when position = auto
Return possible values:
 - mapped position when auto is given
 - unmapped position when not auto is given
 - no-position (default: when undefined) */
export declare const mapChartInfoPosition: (originalPosition: ChartInfoPosition, viewPort: string) => "auto" | "top" | "right" | "bottom" | "";
export interface IChartInfoContainerProps extends Omit<IBasicPropsInternal, "horizontalAlignment"> {
    /** The prop can be used to decide which position the info should be placed around the chart element  */
    position?: ChartInfoPosition;
    /** Title covers the whole information within the container element. Can be a common title, date or anything else */
    title?: string;
    /** Formatting option, when title is a date or anything special format */
    titleFormatter?: <T>(value: T) => string;
    /** Description when title not set or more information is needed */
    ariaDescription?: string;
    /** An array of chart info items. */
    items?: IChartInfoItemProps[];
    /** The index of the currently active item. */
    activeIndex?: number;
    /** A callback that is triggered when an item becomes active. */
    onItemActive?: (index: number) => void;
    /** The appearance style of the chart info container. */
    appearance?: "tooltip" | "legend" | "infoarea";
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    htmlAttrs?: React.HtmlHTMLAttributes<HTMLElement> | Record<`data-${string}`, string | number | boolean>;
}
export interface IChartInfoContainerPropsInternal extends IChartInfoContainerProps {
}
export declare const ChartInfoContainer: (props: IChartInfoContainerPropsInternal) => React.JSX.Element;
