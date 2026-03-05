import * as React from 'react';
import { HeadlinePresentation } from '../Headline/shared/HeadlinePresentation.js';
import { StepperItemPresentation } from './shared/StepperItem/StepperItemPresentation.js';
import { StepperWrapper } from './shared/StepperWrapper.js';

/** @deprecated */
var IconSizes;
(function (IconSizes) {
    IconSizes["MEDIUM"] = "medium";
    IconSizes["LARGE"] = "large";
})(IconSizes || (IconSizes = {}));
/** @deprecated */
var IconColors;
(function (IconColors) {
    IconColors["DEFAULT"] = "default";
    IconColors["PRIMARY"] = "primary";
})(IconColors || (IconColors = {}));
/**
 * @deprecated: 11.2023 - Will be removed in the next major release.
 * Have a look at the "Stepper Pattern" which uses native components like shown in the Markenportal UX Patterns
 * section: https://markenportal.commerzbank.com/styleguide/stepper-pattern/index.html
 */
class Stepper extends React.Component {
    render() {
        const { title, titleAs, links, children, centeredLayout, ...props } = this.props;
        return (React.createElement(StepperWrapper, { headline: React.createElement(HeadlinePresentation, { size: "h2", as: titleAs, centeredLayout: centeredLayout }, title), iconLinks: links, centeredLayout: centeredLayout, ...props }, children));
    }
}
// eslint-disable-next-line react/sort-comp
Stepper.Block = ({ text, ...otherProps }) => {
    const stepperBlockDefaultProps = {
        headlineAs: "h4",
        iconSize: "medium",
        iconColor: "default",
    };
    return (React.createElement(StepperItemPresentation, { ...stepperBlockDefaultProps, ...otherProps }, text));
};
Stepper.displayName = "Stepper.Block";
Stepper.defaultProps = {
    centeredLayout: false,
    iconSize: "medium",
};
/** @deprecated */
Stepper.IconSizes = IconSizes;
/** @deprecated */
Stepper.IconColors = IconColors;

export { IconColors, IconSizes, Stepper };
