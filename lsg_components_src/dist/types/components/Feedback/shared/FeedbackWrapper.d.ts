import React from "react";
import { IFeedbackPresentationProps } from "./FeedbackPresentation";
interface IFeedbackWrapperState {
    animationHide: boolean;
}
interface IFeedbackWrapperProps extends Omit<IFeedbackPresentationProps, never> {
}
export declare class FeedbackWrapper extends React.Component<IFeedbackWrapperProps, IFeedbackWrapperState> {
    constructor(props: IFeedbackWrapperProps);
    onChange: (result: boolean) => void;
    onTrueClick: () => void;
    onFalseClick: () => void;
    render(): React.JSX.Element;
}
export {};
