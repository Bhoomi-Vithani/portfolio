import React from "react";
import { IDataTableRowSharedProps } from "./DataTableRowPresentation";
import { threeStepShowHide } from "./DataTableStateMachine";
interface IDataTableRowWrapperState {
    visibility: keyof typeof threeStepShowHide;
    hasMouseHover?: boolean;
    hasMouseHoverToggle?: boolean;
    hasKeyboardFocus?: boolean;
    hasKeyboardFocusToggle?: boolean;
}
export interface IDataTableRowWrapperProps extends IDataTableRowSharedProps {
    hidden?: boolean;
    separatorStyles?: {
        weight: "default" | "bold";
    };
}
export declare class DataTableRowWrapper extends React.Component<IDataTableRowWrapperProps, IDataTableRowWrapperState> {
    private visibilityStateMachine;
    constructor(props: IDataTableRowWrapperProps);
    componentDidUpdate(prevProps: any, prevState: any): void;
    render(): React.JSX.Element;
}
export {};
