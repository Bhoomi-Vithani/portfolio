import React from "react";
import { IPictureBackgroundPresentationProps } from "./PictureBackgroundPresentation";
interface IPictureBackgroundWrapperState {
    viewportSource: string;
    webpSupport: boolean;
}
interface IPictureBackgroundWrapperProps extends Omit<IPictureBackgroundPresentationProps, "viewportSource"> {
}
export declare class PictureBackgroundWrapper extends React.Component<IPictureBackgroundWrapperProps, IPictureBackgroundWrapperState> {
    private mediaQueryLists;
    constructor(props: IPictureBackgroundWrapperProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: IPictureBackgroundWrapperProps): void;
    testWebpSupport: () => void;
    addListeners: () => void;
    removeListeners: () => void;
    handleMediaQuery: () => void;
    render(): React.JSX.Element;
}
export {};
