import React from "react";
import { IYellowElevatorPresentationProps } from "./ElevatorAnimationPresentation";
export interface YellowElevatorWrapperProps extends Omit<IYellowElevatorPresentationProps, "isVisible" | "hostRef"> {
}
interface IVideoWrapperState {
    isVisible?: boolean;
}
export declare class ElevatorAnimationWrapper extends React.Component<YellowElevatorWrapperProps, IVideoWrapperState> {
    private target;
    private observer;
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleVisibilityChange: () => void;
    render(): React.JSX.Element;
}
export {};
