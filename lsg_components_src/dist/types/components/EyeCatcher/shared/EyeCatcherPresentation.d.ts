import React, { ReactNode } from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface IEyeCatcherPresentationProps extends IBasicPropsInternal {
    /** Short text for EyeCatcher on small screens (viewport < lg) */
    text?: ReactNode;
    /** Long text for EyeCatcher on large screens (viewport >= lg) */
    textLong?: ReactNode;
    /** EyeCatcher font-size */
    fontSize?: "small" | "medium" | "large" | "xlarge";
    /** Increase width of text container on large screens (viewport >= lg) */
    increaseWidth?: boolean;
    /** Current viewport size (internal use)
     * The EyeCatcher will switch from box to circle shape on viewports >= lg
     */
    viewport?: string;
}
export declare const EyeCatcherPresentation: {
    ({ id, className, noMargin, text, textLong, increaseWidth, fontSize, viewport, horizontalAlignment, }: IEyeCatcherPresentationProps): React.JSX.Element;
    displayName: string;
};
