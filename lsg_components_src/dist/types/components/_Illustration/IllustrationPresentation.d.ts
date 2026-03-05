import React from "react";
import { IBasicPropsInternal } from "../../utils/IBasicPropsInternal";
export interface IIllustrationPresentationProps extends IBasicPropsInternal {
    src?: string;
    alt?: string;
    ariaHidden?: boolean;
    size?: "small" | "responsive" | "large";
}
export declare const IllustrationPresentation: {
    ({ id, className, noMargin, isStencilHost, src, alt, size, ariaHidden, }: IIllustrationPresentationProps): React.JSX.Element;
    displayName: string;
};
