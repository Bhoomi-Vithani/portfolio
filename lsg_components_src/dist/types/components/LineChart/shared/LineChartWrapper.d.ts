import React from "react";
import { ILineChartBaseProps, LineChartYValue } from "./LineChartPresentation";
interface ILineChartWrapperState {
    isMobile: boolean;
    infoAreaWidth: number;
    infoAreaHeight: number;
    labelYWidth: number;
    lastXLabelWidth: number;
    selectedIndex: number;
    componentWidth: number;
    componentHeight: number;
}
export interface ILineChartWrapperProps extends ILineChartBaseProps {
    formatterYLabel?: (entry: LineChartYValue) => string;
}
export declare class LineChartWrapper extends React.Component<ILineChartWrapperProps, ILineChartWrapperState> {
    private componentRef;
    private axisRefY;
    private marginTop;
    private marginRight;
    private marginBottom;
    private marginLeft;
    constructor(props: ILineChartWrapperProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    shouldComponentUpdate(nextProps: Readonly<ILineChartWrapperProps>, nextState: Readonly<ILineChartWrapperState>): boolean;
    componentDidUpdate(_prevProps: any, prevState: any): void;
    setDimensions: () => void;
    setInfoBoxMeasures: (width: any, height: any) => void;
    setSelectedIndex: (index: any) => void;
    onViewportChange: (viewport: string) => void;
    private refChartXLabelCallBack;
    render(): React.JSX.Element;
}
export {};
