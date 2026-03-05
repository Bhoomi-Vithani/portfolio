import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface IFeedbackPresentationProps extends IBasicPropsInternal {
    /** Main text for the non-voted state */
    textBefore: string;
    /** Second text for the non-voted state */
    textAfter: string;
    /** Text for positive button in the non-voted state */
    textButtonTrue?: string;
    /** Text for negative button in the non-voted state */
    textButtonFalse?: string;
    /** Text shown after voting */
    textResult?: string;
    /** User interaction result */
    result?: boolean;
    /** State of animation to toggle visibility. */
    animationHide?: boolean;
    /** Function to be called on button true click. */
    onTrueClick?: () => void;
    /** Function to be called on button false click. */
    onFalseClick?: () => void;
    /** Function to be called on user interaction. */
    onChange?: (result: boolean) => void;
}
export declare const FeedbackPresentation: {
    ({ id, className, noMargin, isStencilHost, textBefore, textAfter, textResult, textButtonTrue, textButtonFalse, result, onTrueClick, onFalseClick, animationHide, }: IFeedbackPresentationProps): React.JSX.Element;
    displayName: string;
};
