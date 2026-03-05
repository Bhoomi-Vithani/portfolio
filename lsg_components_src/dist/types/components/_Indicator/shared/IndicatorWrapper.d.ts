import React from "react";
import { IIndicatorProps } from "./IndicatorPresentation";
interface IIndicatorWrapperProps extends Omit<IIndicatorProps, "translate" | "scale" | "fadeAnimation"> {
    activeElement?: HTMLElement;
    progress?: number;
    isFullUnderline?: boolean;
}
export declare const IndicatorWrapper: ({ activeElement, progress, isFullUnderline, direction, translateOrthogonal, }: IIndicatorWrapperProps) => React.JSX.Element;
export {};
