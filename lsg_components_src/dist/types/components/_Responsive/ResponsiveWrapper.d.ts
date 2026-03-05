import React from "react";
import { IResponsiveSharedProps } from "./ResponsivePresentation";
interface IResponsiveWrapperState {
    viewport: string;
    display: boolean;
}
interface IResponsiveWrapperProps extends IResponsiveSharedProps {
}
export declare class ResponsiveWrapper extends React.Component<IResponsiveWrapperProps, IResponsiveWrapperState> {
    constructor(props: IResponsiveWrapperProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    updateViewport: () => void;
    render(): React.JSX.Element;
}
export {};
