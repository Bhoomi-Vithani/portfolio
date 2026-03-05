import React from "react";
import { IBarChartSharedProps } from "./BarChartPresentation";
interface IBarChartWrapperState {
    hostWidth: number;
    chartWidth: number;
    hostHeight: number;
    yAxisWidth: number;
    viewport: string;
    hoveredElement: number;
    barLabelHeight: number[];
}
interface IBarChartWrapperProps extends IBarChartSharedProps {
    onBarHover?: (barIndex: number, event: React.SyntheticEvent<HTMLElement>) => void;
}
export declare class BarChartWrapper extends React.Component<IBarChartWrapperProps, IBarChartWrapperState> {
    private hostElement;
    private chartElement;
    private yAxisElement;
    private barRefArray;
    constructor(props: IBarChartWrapperProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(_prevProps: Readonly<IBarChartWrapperProps>, prevState: Readonly<IBarChartWrapperState>, _snapshot?: any): void;
    handleViewport: () => void;
    handleResize: () => void;
    handleOnMouseEnter: (event: any) => void;
    render(): React.JSX.Element;
}
export {};
