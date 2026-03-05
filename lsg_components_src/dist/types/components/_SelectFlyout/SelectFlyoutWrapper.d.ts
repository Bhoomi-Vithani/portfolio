import React from "react";
import { ISelectFlyoutInternalWrapperProps } from "./SelectFlyoutInternalWrapper";
interface ISelectFlyoutWrapperState {
    scrollFocussedElementIntoView: boolean;
    focussedValue?: string;
}
interface ISelectFlyoutWrapperProps extends Omit<ISelectFlyoutInternalWrapperProps, "onFocussedValueChange" | "scrollFocussedElementIntoView" | "focussedValue"> {
}
export declare class SelectFlyoutWrapper extends React.Component<ISelectFlyoutWrapperProps, ISelectFlyoutWrapperState> {
    render(): React.JSX.Element;
}
export {};
