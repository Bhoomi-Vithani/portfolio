import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface ISpinnerPresentationInternal {
    /** Internal use only, mostly used in context of action elements */
    expandToOverlay?: boolean;
}
export interface ISpinnerPresentation extends IBasicPropsInternal, ISpinnerPresentationInternal {
    /** Size of circle */
    size?: number;
    /** Responsible for displaying the progress */
    value?: number;
    /**  Informs users about a time-consuming process and is an a11y-relevant prop */
    ariaLabel: string;
    /** Progress runs endlessly by using "indeterminate" or with steps based on a given value by using "static". */
    variant?: "indeterminate" | "static";
    /** This prop switches the Spinner on. Hence, fine-tuning can be done via appearance prop  */
    loading?: boolean;
}
export declare const SpinnerPresentation: {
    ({ id, size, value: valueProp, variant, expandToOverlay, ariaLabel, className, loading, }: ISpinnerPresentation): React.JSX.Element;
    displayName: string;
};
