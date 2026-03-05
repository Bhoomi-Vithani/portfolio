import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
import { IChartInfoContainerPropsInternal } from "../../ChartInfos/shared/ChartInfoContainer";
export type PresentationMode = "static" | "animated" | "countdown";
export declare const defaultMaxChartSize = 480;
export declare const defaultMinChartSize = 240;
export declare const defaultDelayStartTimer = 1000;
export interface ISizing {
    baseWidth?: number;
    chartPosition?: string;
    heightContainer: number;
    widthContainer: number;
    heightInner?: number;
    widthInner?: number;
    heightChartInfo?: number;
    widthChartInfo?: number;
}
export interface ICircleCountdownPresentationProps extends IBasicPropsInternal {
    valueLabel: string;
    label?: string;
    amount?: number;
    noAnimation?: boolean;
    animationOnStart?: boolean;
    headline?: string;
    callToActionButton?: any;
    countdown?: boolean;
    countDownFinishText?: string;
    secondsUntilRefresh?: number;
    onRefreshClick?: () => void;
    ariaLabel?: string;
    color?: "primary-1" | "primary-2";
    chartInfo?: IChartInfoContainerPropsInternal;
    sizeMode?: "fixed" | "dynamic";
    presentationMode: PresentationMode;
    size: ISizing;
    secondsLeft?: number;
    errorText?: string;
    hostRef?: any;
    startTimer?: (restart: boolean) => void;
    ctaBelowCircle?: boolean;
    headlineRef?: any;
    readLabelAfterRefresh?: boolean;
}
export declare const defaultProps: Partial<ICircleCountdownPresentationProps>;
export declare const CircleCountdownPresentation: React.ForwardRefExoticComponent<ICircleCountdownPresentationProps & React.RefAttributes<HTMLElement>>;
