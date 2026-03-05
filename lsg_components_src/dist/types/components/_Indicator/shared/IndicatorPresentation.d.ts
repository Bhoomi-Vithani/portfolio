import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface IIndicatorProps extends IBasicPropsInternal {
    translate?: number;
    translateOrthogonal?: number;
    scale?: number;
    noAnimation?: boolean;
    direction?: "horizontal" | "vertical";
    fadeAnimation?: boolean;
}
export declare const getTransform: (indicatorElement: HTMLElement, activeElement: HTMLElement, progress: number, isFullUnderline: boolean, isDirectionHorizontal: boolean) => {
    translate: number;
    scale: number;
};
export declare const IndicatorPresentation: React.ForwardRefExoticComponent<IIndicatorProps & React.RefAttributes<HTMLElement>>;
