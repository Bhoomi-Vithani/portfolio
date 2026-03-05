import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface IFeedbackProps extends IBasicProps {
    /** Main text for the non-voted state */
    textBefore: string;
    /** Text for positive button in the non-voted state */
    textButtonTrue?: string;
    /** Text for negative button in the non-voted state */
    textButtonFalse?: string;
    /** Second text for the non-voted state */
    textAfter: string;
    /** Text shown after voting */
    textResult?: string;
    /** User interaction result */
    result?: boolean;
    /** Function to be called on user interaction. */
    onChange?(result: boolean): void;
}
/**
 * @deprecated: 11.2023 - Will be removed in the next major release.
 * Have a look at the "Feedback Pattern" which uses native components like shown in the Markenportal UX Patterns
 * section: https://markenportal.commerzbank.com/styleguide/feedback-pattern/index.html
 */
interface IFeedbackState {
    animationHide: boolean;
}
declare class Feedback extends React.Component<IFeedbackProps, IFeedbackState> {
    static displayName: string;
    static defaultProps: {
        textButtonTrue: string;
        textButtonFalse: string;
        textResult: string;
        onChange: () => void;
    };
    render(): React.JSX.Element;
}
export { Feedback, IFeedbackProps, IFeedbackState };
