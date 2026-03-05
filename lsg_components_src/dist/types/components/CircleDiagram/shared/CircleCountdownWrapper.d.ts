import React from "react";
import { ICircleCountdownPresentationProps, ISizing } from "./CircleCountdownPresentation";
interface ICircleCountdownWrapperState {
    timestampStarted?: number;
    valueLabel?: string;
    animationAmount: number;
    size: ISizing;
    secondsLeft?: number;
    errorText?: string;
    ctaBelowCircle?: boolean;
    viewPort: string;
}
interface ICircleCountdownWrapperProps extends Omit<ICircleCountdownPresentationProps, "size" | "secondsLeft" | "headlineRef" | "ctaBelowCircle" | "startTimer"> {
    valueAnimationCallback?: (progress: number, amount: number) => string;
}
export declare class CircleCountdownWrapper extends React.Component<ICircleCountdownWrapperProps, ICircleCountdownWrapperState> {
    static defaultProps: Partial<ICircleCountdownPresentationProps>;
    static animationDuration: number;
    private animationSupported;
    private headline;
    countdown: number;
    private observer;
    private host;
    private readLabelAfterRefresh;
    constructor(props: ICircleCountdownWrapperProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: Readonly<ICircleCountdownWrapperProps>): void;
    updateViewport: (viewPort: any) => void;
    private getCurrentRectWidthForChart;
    startTimer: (restart?: boolean) => void;
    updateSize: (newWidth?: number) => void;
    handleVisibilityChange: () => void;
    animate: () => void;
    private getPresentationMode;
    render(): React.JSX.Element;
}
export {};
