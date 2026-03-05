import React from "react";
import { IChartInfoBoxContainerSharedProps } from "./ChartInfoBoxContainerPresentation";
interface IChartInfoBoxContainerWrapperState {
    containerWidth: number;
    containerHeight: number;
}
export interface IChartInfoBoxContainerWrapperProps extends IChartInfoBoxContainerSharedProps {
}
export declare class ChartInfoBoxContainerWrapper extends React.Component<IChartInfoBoxContainerSharedProps, IChartInfoBoxContainerWrapperState> {
    private componentRef;
    static defaultProps: {};
    constructor(props: IChartInfoBoxContainerWrapperProps);
    componentDidMount(): void;
    componentDidUpdate(): boolean;
    render(): React.JSX.Element;
}
export {};
