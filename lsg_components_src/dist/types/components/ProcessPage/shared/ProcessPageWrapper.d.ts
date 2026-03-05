import React from "react";
import { IProcessPagePresentationProps } from "./ProcessPagePresentation";
interface IProcessPageWrapperState {
    menuOpen?: boolean;
    isMobile?: boolean;
    isClosedArea?: boolean;
}
export interface IProcessPageWrapperProps extends Omit<IProcessPagePresentationProps, "menuOpen" | "onMenuOpenChange" | "isMobile"> {
}
export declare class ProcessPageWrapper extends React.Component<IProcessPageWrapperProps, IProcessPageWrapperState> {
    constructor(props: IProcessPageWrapperProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    onViewportChange: (vp: any) => void;
    findPortalHeaderAndSetClosed: () => void;
    render(): React.JSX.Element;
}
export {};
