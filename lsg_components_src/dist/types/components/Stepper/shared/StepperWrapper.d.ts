import React from "react";
import { IStepperPresentationProps } from "./StepperPresentation";
interface IStepperWrapperState {
    viewport: string;
}
export interface IStepperWrapperProps extends IStepperPresentationProps {
    iconSize?: "medium" | "large";
    centeredLayout?: boolean;
}
export declare class StepperWrapper extends React.Component<IStepperWrapperProps, IStepperWrapperState> {
    static defaultProps: {
        iconSize: string;
        centeredLayout: boolean;
    };
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    updateViewport: (viewport: any) => void;
    render(): React.JSX.Element;
}
export {};
