import React from "react";
import { IButtonGroupPresentationProps } from "./ButtonGroupPresentation";
interface IButtonGroupWrapperState {
    viewport?: "xs" | "sm" | "md" | "lg" | "xl";
}
export interface IButtonGroupWrapperProps extends Omit<IButtonGroupPresentationProps, "viewport"> {
}
export declare class ButtonGroupWrapper extends React.Component<IButtonGroupWrapperProps, IButtonGroupWrapperState> {
    static defaultProps: {
        direction: string;
    };
    constructor(props: IButtonGroupWrapperProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    updateViewport: (viewport: any) => void;
    render(): React.JSX.Element;
}
export {};
