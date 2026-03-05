import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface IClickListSharedProps extends IBasicPropsInternal {
    label?: string;
    /**  Error text can used set in cases of radio or checkbox list validation variants */
    errorText?: string;
    /** Can be intercepted on client side in order to detect any input has done */
    onBlur?: (e: React.FocusEvent<HTMLElement>) => void;
    spacing?: "dense" | "narrow" | "standard";
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    htmlAttrs?: React.HTMLAttributes<HTMLElement> | Record<`data-${string}`, string | number | boolean>;
}
export interface IClickListPresentationProps extends IClickListSharedProps {
    hostRef?: any;
    handleOnBlur?: (event: React.FocusEvent<HTMLElement>) => void;
    look?: "default" | "radio" | "checkbox";
}
export declare const ClickListPresentation: {
    ({ id, noMargin, children, className, horizontalAlignment, label, spacing, errorText, hostRef, look, handleOnBlur, htmlAttrs, }: IClickListPresentationProps): React.JSX.Element;
    displayName: string;
};
