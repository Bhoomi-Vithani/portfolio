import React from "react";
import { IBasicPropsInternal } from "../../utils/IBasicPropsInternal";
export interface ISeparatorLineSharedProps extends IBasicPropsInternal {
    /** Switch between right-aligned and centered layout  */
    centeredLayout?: boolean;
    /** Experimental Spacing  */
    componentSpacing?: "small" | "medium" | "large" | "none";
}
interface ISeparatorLinePresentationProps extends ISeparatorLineSharedProps {
}
export declare const SeparatorLinePresentation: {
    ({ id, className, isStencilHost, centeredLayout, componentSpacing, horizontalAlignment, }: ISeparatorLinePresentationProps): React.JSX.Element;
    displayName: string;
};
export {};
