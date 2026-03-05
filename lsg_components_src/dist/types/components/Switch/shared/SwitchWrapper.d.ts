import React from "react";
import { ISwitchPresentationProps } from "./SwitchPresentation";
interface ISwitchWrapperState {
    hasMouseHover: boolean;
    hasKeyboardFocus: boolean;
}
export interface ISwitchWrapperProps extends Omit<ISwitchPresentationProps, "id" | "hasKeyboardFocus" | "hasMouseHover" | "onMouseHoverChange" | "onKeyboardFocusChange"> {
    id?: string;
}
export declare class SwitchWrapper extends React.Component<ISwitchWrapperProps, ISwitchWrapperState> {
    constructor(props: ISwitchWrapperProps);
    render(): React.JSX.Element;
}
export {};
