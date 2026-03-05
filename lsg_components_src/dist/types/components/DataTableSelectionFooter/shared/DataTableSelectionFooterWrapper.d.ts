import React from "react";
import { IDataTableSelectionFooterSharedProps } from "./DataTableSelectionFooterPresentation";
interface IDataTableSelectionFooterWrapperState {
    hasMouseHover?: boolean;
    hasKeyboardFocus?: boolean;
}
interface IDataTableSelectionFooterWrapperProps extends IDataTableSelectionFooterSharedProps {
}
export declare class DataTableSelectionFooterWrapper extends React.Component<IDataTableSelectionFooterWrapperProps, IDataTableSelectionFooterWrapperState> {
    static defaultProps: {};
    constructor(props: IDataTableSelectionFooterWrapperProps);
    render(): React.JSX.Element;
}
export {};
