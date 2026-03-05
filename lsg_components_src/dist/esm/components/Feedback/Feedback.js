import * as React from 'react';
import { texts } from '../../utils/Localization.js';
import { FeedbackWrapper } from './shared/FeedbackWrapper.js';

class Feedback extends React.Component {
    render() {
        return React.createElement(FeedbackWrapper, { ...this.props });
    }
}
Feedback.displayName = "Feedback";
Feedback.defaultProps = {
    textButtonTrue: texts.lsg.component.Feedback.trueButton,
    textButtonFalse: texts.lsg.component.Feedback.falseButton,
    textResult: texts.lsg.component.Feedback.result,
    onChange: () => {
        /* empty */
    },
};

export { Feedback };
