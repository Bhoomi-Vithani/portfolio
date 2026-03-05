import React from "react";
import { IPaginationSharedProps } from "./PaginationPresentation";
interface IPaginationWrapperState {
}
export interface ISliderPaginationWrapperProps extends IPaginationSharedProps {
}
export declare class PaginationWrapper extends React.Component<ISliderPaginationWrapperProps, IPaginationWrapperState> {
    private rightArrow;
    private leftArrow;
    private pageLinks;
    static defaultProps: {};
    handleKey: (e: React.KeyboardEvent<HTMLElement>) => void;
    private selectAndUpdateFocus;
    private findPaginationBtns;
    render(): React.JSX.Element;
}
export {};
