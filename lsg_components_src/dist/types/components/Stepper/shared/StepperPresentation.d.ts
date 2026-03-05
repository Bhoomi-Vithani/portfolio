import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface IStepperPresentationProps extends IBasicPropsInternal {
    headline: any;
    iconLinks?: any;
    centeredLayout?: boolean;
    navHtmlAttrs?: React.HTMLAttributes<HTMLHtmlElement> & {
        "aria-label": React.AriaAttributes["aria-label"];
    };
}
export declare const StepperPresentation: {
    ({ id, children, noMargin, className, headline, iconLinks, centeredLayout, navHtmlAttrs, }: IStepperPresentationProps): React.JSX.Element;
    displayName: string;
};
