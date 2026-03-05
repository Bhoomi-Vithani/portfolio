import React from "react";
import { IClickListItemPresentationProps } from "./ClickListItemPresentation";
interface IClickListItemWrapperState {
    hasMouseHover: boolean;
    hasKeyboardFocus: boolean;
    clicked: boolean;
}
interface IClickListItemWrapperProps extends Omit<IClickListItemPresentationProps, "hasMouseHover" | "onMouseHoverChange" | "hasKeyboardFocus" | "onKeyboardFocusChange"> {
}
export declare class ClickListItemWrapper extends React.Component<IClickListItemWrapperProps, IClickListItemWrapperState> {
    private timeout;
    private clickAnimationDuration;
    static defaultProps: Partial<import("../../Action/shared/ActionPresentation").IActionBaseProps> | Partial<IClickListItemPresentationProps>;
    constructor(props: IClickListItemWrapperProps);
    componentWillUnmount(): void;
    render(): React.JSX.Element;
}
export {};
