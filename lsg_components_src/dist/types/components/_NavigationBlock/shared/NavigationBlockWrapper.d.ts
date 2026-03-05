import React from "react";
import { INavigationBlockPresentationProps } from "./NavigationBlockPresentation";
interface INavigationBlockWrapperState {
    counter: number;
    openObject: any;
}
interface INavigationBlockWrapperProps extends Omit<INavigationBlockPresentationProps, "activeElement" | "activeRef" | "openObject" | "onOpenObjectChange"> {
}
export declare class NavigationBlockWrapper extends React.Component<INavigationBlockWrapperProps, INavigationBlockWrapperState> {
    private activeElement;
    static defaultProps: {
        navigationTree: any[];
    };
    constructor(props: INavigationBlockWrapperProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: INavigationBlockWrapperProps, prevState: INavigationBlockWrapperState): void;
    render(): React.JSX.Element;
}
export {};
