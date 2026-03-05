import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface ITimelinePresentationProps extends IBasicPropsInternal {
    numberOfSteps: number;
    activeStep: number;
}
export declare const TimelinePresentation: {
    ({ id, className, noMargin, isStencilHost, numberOfSteps, activeStep, }: ITimelinePresentationProps): React.JSX.Element;
    displayName: string;
};
