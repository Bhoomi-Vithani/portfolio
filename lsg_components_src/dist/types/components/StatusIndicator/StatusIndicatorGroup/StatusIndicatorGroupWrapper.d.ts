import React from "react";
import { IStatusIndicatorGroupPresentationProps } from "./StatusIndicatorGroupPresentation";
interface IStatusIndicatorGroupWrapperState {
    viewport?: "xs" | "sm" | "md" | "lg" | "xl";
}
interface IStatusIndicatorGroupWrapperProps extends Omit<IStatusIndicatorGroupPresentationProps, "viewport"> {
}
export declare class StatusIndicatorGroupWrapper extends React.Component<IStatusIndicatorGroupWrapperProps, IStatusIndicatorGroupWrapperState> {
    static defaultProps: Partial<IStatusIndicatorGroupWrapperProps>;
    constructor(props: IStatusIndicatorGroupWrapperProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    updateViewport: (viewport: any) => void;
    render(): React.JSX.Element;
}
export {};
