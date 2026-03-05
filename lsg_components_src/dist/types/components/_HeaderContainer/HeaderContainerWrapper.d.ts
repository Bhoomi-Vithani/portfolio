import React from "react";
import { IHeaderContainerPresentationProps } from "./HeaderContainerPresentation";
interface IHeaderContainerWrapperState {
    scrollPosition?: number;
    forceMobile?: boolean;
    forcedMobileWidth?: number;
}
interface IHeaderContainerWrapperProps extends Omit<IHeaderContainerPresentationProps, "scrollPosition"> {
    onForceMobileChange?: (forceMobile: boolean) => void;
    onScrollChangeCallback?: (scrollPosition: any) => void;
}
export declare class HeaderContainerWrapper extends React.Component<IHeaderContainerWrapperProps, IHeaderContainerWrapperState> {
    private mainContainerRightTopRef;
    private mainContainerRightBottomRef;
    static defaultProps: {
        onForceMobileChange: () => void;
        onScrollChangeCallback: () => void;
    };
    constructor(props: IHeaderContainerWrapperProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: IHeaderContainerWrapperProps): void;
    checkMarginLeft: (elementRef: any) => boolean;
    hasEnoughSpace: () => boolean;
    onResize: () => void;
    onResizeDeferred: () => void;
    addOffsetClasses: () => void;
    removeOffsetClasses: () => void;
    onScrollChange: () => void;
    render(): React.JSX.Element;
}
export {};
