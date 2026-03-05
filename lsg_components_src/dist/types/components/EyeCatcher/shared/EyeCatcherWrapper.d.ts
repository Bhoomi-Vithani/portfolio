import * as React from "react";
import { IEyeCatcherPresentationProps } from "./EyeCatcherPresentation";
interface IEyeCatcherWrapperState {
    viewport: string;
}
interface IEyeCatcherWrapperProps extends Omit<IEyeCatcherPresentationProps, "viewport"> {
}
export declare class EyeCatcherWrapper extends React.Component<IEyeCatcherWrapperProps, IEyeCatcherWrapperState> {
    constructor(props: IEyeCatcherWrapperProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    viewportHandler: (viewport: string) => void;
    render(): React.JSX.Element;
}
export {};
