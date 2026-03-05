import React from "react";
import { IDetailPageHeaderSharedProps } from "./DetailPageHeaderPresentation";
interface IDetailPageHeaderWrapperState {
    isMobile?: boolean;
    forceMobile?: boolean;
}
interface IDetailPageHeaderWrapperProps extends IDetailPageHeaderSharedProps {
}
export declare class DetailPageHeaderWrapper extends React.Component<IDetailPageHeaderWrapperProps, IDetailPageHeaderWrapperState> {
    constructor(props: IDetailPageHeaderWrapperProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    onViewportChange: (viewport: any) => void;
    render(): React.JSX.Element;
}
export {};
