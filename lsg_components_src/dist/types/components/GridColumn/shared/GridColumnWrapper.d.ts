import React from "react";
import { IGridColumnPresentationProps } from "./GridColumnPresentation";
type HorizontalAlign = "left" | "center" | "right";
interface IGridColumnWrapperState {
    viewport: string;
}
export interface IGridColumnWrapperProps extends IGridColumnPresentationProps {
    horizontalAlignment?: HorizontalAlign;
    horizontalAlignmentXs?: HorizontalAlign;
    horizontalAlignmentSm?: HorizontalAlign;
    horizontalAlignmentMd?: HorizontalAlign;
}
export declare class GridColumnWrapper extends React.Component<IGridColumnWrapperProps, IGridColumnWrapperState> {
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    updateViewport: (viewport: any) => void;
    render(): React.JSX.Element;
}
export {};
